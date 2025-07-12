import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

export interface FilterPipeOptions {
  booleanFields?: string[];
  requiredFields?: string[];
  enumFields?: { [field: string]: { [value: string]: string } };
  idFields?: string[];
}

@Injectable()
export class ParseFilterPipe implements PipeTransform {
  constructor(private readonly options: FilterPipeOptions = {}) {}

  transform(query: any, metadata: ArgumentMetadata) {
    const { page, size, ...otherFields } = query;
    const raw = { ...otherFields };
    delete raw.filter;

    const andFilters: any[] = [];
    const orFilters: any[] = [];

    Object.entries(raw).forEach(([key, value]) => {
      const isOr = key.startsWith('or.');
      const k = isOr ? key.slice(3) : key;
      let expr = 'contains';
      let field = k;

      // Se for campo de ID, sempre usa eq
      if (this.options.idFields?.includes(field)) {
        expr = 'eq';
      } else if (typeof value === 'string' && value.includes(':')) {
        const [maybeExpr, ...rest] = value.split(':');
        if (['eq', 'in', 'between'].includes(maybeExpr)) {
          expr = maybeExpr;
          value = rest.join(':');
        }
      }

      const filter = this.buildFilter(field, expr, value as string);
      if (filter !== undefined) {
        (isOr ? orFilters : andFilters).push(filter);
      }
    });

    let finalFilter: any | undefined;
    if (andFilters.length && orFilters.length) {
      finalFilter = { $and: [...andFilters, { $or: orFilters }] };
    } else if (andFilters.length) {
      finalFilter = andFilters.length === 1 ? andFilters[0] : { $and: andFilters };
    } else if (orFilters.length) {
      finalFilter = orFilters.length === 1 ? orFilters[0] : { $or: orFilters };
    }

    const result: any = {
      page,
      size,
      filter: finalFilter ? JSON.stringify(finalFilter) : undefined,
    };

    // Adiciona campos obrigatórios se especificados
    if (this.options.requiredFields) {
      this.options.requiredFields.forEach(field => {
        if (query[field] !== undefined) {
          result[field] = query[field];
        }
      });
    }

    return result;
  }

  private buildFilter(field: string, expr: string, raw: string): any {
    // Campos booleanos sempre usam equals
    if (this.options.booleanFields?.includes(field)) {
      return { [field]: { $eq: this.cast(raw) } };
    }

    // Campos de ID sempre usam equals
    if (this.options.idFields?.includes(field)) {
      return { [field]: { $eq: this.cast(raw) } };
    }

    // Campos enum precisam de validação
    if (this.options.enumFields?.[field]) {
      const enumMap = this.options.enumFields[field];
      if (expr === 'in') {
        const values = raw.split(',').map(v => v.trim());
        const validValues = values.filter(v => enumMap[v.toUpperCase()]);
        if (validValues.length === 0) {
          console.warn(`Nenhum valor válido encontrado para enum ${field}: ${values.join(', ')}`);
          return undefined;
        }
        return { [field]: { $in: validValues.map(v => enumMap[v.toUpperCase()]) } };
      } else {
        const upperValue = raw.toUpperCase();
        if (!enumMap[upperValue]) {
          console.warn(`Valor inválido para enum ${field}: ${raw}`);
          return undefined;
        }
        return { [field]: { $eq: enumMap[upperValue] } };
      }
    }

    switch (expr) {
      case 'eq':
        return { [field]: { $eq: this.cast(raw) } };
      case 'in':
        return { [field]: { $in: raw.split(',').map(this.cast) } };
      case 'between': {
        const [start, end] = raw.split(',');
        return { [field]: { $between: [start, end] } };
      }
      case 'contains':
      default:
        return { [field]: { $contains: raw } };
    }
  }

  private cast(val: string): any {
    if (val === 'true' || val === 'false') return val === 'true';
    const n = Number(val);
    return Number.isNaN(n) ? val : n;
  }
} 