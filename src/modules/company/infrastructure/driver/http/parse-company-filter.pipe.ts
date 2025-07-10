import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ParseCompanyFilterPipe implements PipeTransform {
  transform(query: any, metadata: ArgumentMetadata) {
    const { page, size } = query;
    const raw = { ...query };
    delete raw.page;
    delete raw.size;
    delete raw.filter;

    const andFilters: any[] = [];
    const orFilters: any[] = [];

    Object.entries(raw).forEach(([key, value]) => {
      const isOr = key.startsWith('or.');
      const k = isOr ? key.slice(3) : key;
      let expr = 'contains';
      let field = k;

      if (typeof value === 'string' && value.includes(':')) {
        const [maybeExpr, ...rest] = value.split(':');
        if (['eq', 'in', 'between'].includes(maybeExpr)) {
          expr = maybeExpr;
          value = rest.join(':');
        }
      }

      const filter = this.buildFilter(field, expr, value as string);
      (isOr ? orFilters : andFilters).push(filter);
    });

    let finalFilter: any | undefined;
    if (andFilters.length && orFilters.length) {
      finalFilter = { $and: [...andFilters, { $or: orFilters }] };
    } else if (andFilters.length) {
      finalFilter = andFilters.length === 1 ? andFilters[0] : { $and: andFilters };
    } else if (orFilters.length) {
      finalFilter = orFilters.length === 1 ? orFilters[0] : { $or: orFilters };
    }

    return {
      page,
      size,
      filter: finalFilter ? JSON.stringify(finalFilter) : undefined,
    };
  }

  private buildFilter(field: string, expr: string, raw: string): any {
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