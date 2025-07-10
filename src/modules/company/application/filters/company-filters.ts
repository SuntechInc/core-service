import { Prisma } from '@prisma/client';
import { Filter, PrismaFilterBuilder } from '@/shared/infrastructure/filters/prisma-filter-builder';

export type CompanyFilter = Filter;

export interface CompanyFilterOptions {
  filter?: CompanyFilter;
  skip?: number;
  take?: number;
  orderBy?: Prisma.CompanyOrderByWithRelationInput;
  include?: Prisma.CompanyInclude;
}

export interface CompanyFilterResult<T = any> {
  data: T[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export class CompanyFilters {
  static buildWhere(filter?: CompanyFilter): Prisma.CompanyWhereInput {
    if (!filter) return {};
    return PrismaFilterBuilder.buildWhere(filter) as Prisma.CompanyWhereInput;
  }
  // Helpers podem ser adicionados aqui
} 