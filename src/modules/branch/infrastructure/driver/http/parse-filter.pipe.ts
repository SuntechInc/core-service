import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { BranchFilter, BranchFilters } from '@/modules/branch/application/filters/branch-filters';

@Injectable()
export class ParseFilterPipe implements PipeTransform {
  transform(query: any, metadata: ArgumentMetadata) {
    const { companyId, page, size } = query;
    // Remove campos fixos para processar só os filtros dinâmicos
    const raw = { ...query };
    delete raw.companyId;
    delete raw.page;
    delete raw.size;
    delete raw.filter;

    const andFilters: BranchFilter[] = [];
    const orFilters: BranchFilter[] = [];

    Object.entries(raw).forEach(([key, value]) => {
      const isOr = key.startsWith('or.');
      const k = isOr ? key.slice(3) : key;
      let expr = 'contains';
      let field = k;

      // Suporte a field=op:value ou field=valor
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

    let finalFilter: BranchFilter | undefined;
    if (andFilters.length && orFilters.length) {
      finalFilter = BranchFilters.combine(
        ...andFilters,
        BranchFilters.or(...orFilters)
      );
    } else if (andFilters.length) {
      finalFilter = andFilters.length === 1 ? andFilters[0] : BranchFilters.combine(...andFilters);
    } else if (orFilters.length) {
      finalFilter = orFilters.length === 1 ? orFilters[0] : BranchFilters.or(...orFilters);
    }

    console.log('ParseFilterPipe output:', {
      companyId,
      page,
      size,
      filter: finalFilter ? JSON.stringify(finalFilter) : undefined,
    });

    // Retorna só os campos esperados pelo DTO
    return {
      companyId,
      page,
      size,
      filter: finalFilter ? JSON.stringify(finalFilter) : undefined,
    };
  }

  private buildFilter(field: string, expr: string, raw: string): BranchFilter {
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