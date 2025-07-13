import { Prisma } from '@prisma/client';
import { DepartmentStatus } from '@/modules/department/domain/enums/department-status.enum';
import { EnumUtils } from '@/shared/infrastructure/utils/enum.utils';

export interface DepartmentFilter {
  name?: { [key: string]: any };
  code?: { [key: string]: any };
  description?: { [key: string]: any };
  responsibleName?: { [key: string]: any };
  responsibleEmail?: { [key: string]: any };
  status?: { [key: string]: any };
  branchId?: { [key: string]: any };
  createdAt?: { [key: string]: any };
  updatedAt?: { [key: string]: any };
  $and?: DepartmentFilter[];
  $or?: DepartmentFilter[];
}

export interface DepartmentFilterOptions {
  filter?: DepartmentFilter;
  skip?: number;
  take?: number;
  orderBy?: Prisma.DepartmentOrderByWithRelationInput;
  include?: Prisma.DepartmentInclude;
  companyId: string; // Obrigatório para isolamento multi-tenant
}

export interface DepartmentFilterResult<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export class DepartmentFilters {
  private static readonly BOOLEAN_FIELDS = ['isActive'];
  private static readonly ID_FIELDS = ['branchId'];
  private static readonly ENUM_FIELDS = ['status'];

  static buildWhere(filter?: DepartmentFilter): Prisma.DepartmentWhereInput {
    if (!filter) return {};

    const where: Prisma.DepartmentWhereInput = {};

    // Campos de texto
    if (filter.name) {
      where.name = this.buildFieldCondition(filter.name);
    }

    if (filter.code) {
      where.code = this.buildFieldCondition(filter.code);
    }

    if (filter.description) {
      where.description = this.buildFieldCondition(filter.description);
    }

    if (filter.responsibleName) {
      where.responsibleName = this.buildFieldCondition(filter.responsibleName);
    }

    if (filter.responsibleEmail) {
      where.responsibleEmail = this.buildFieldCondition(filter.responsibleEmail);
    }

    // Campo enum
    if (filter.status) {
      where.status = this.buildEnumCondition(filter.status, DepartmentStatus);
    }

    // Campo ID
    if (filter.branchId) {
      where.branchId = this.buildIdCondition(filter.branchId);
    }

    // Campos de data
    if (filter.createdAt) {
      where.createdAt = this.buildDateCondition(filter.createdAt);
    }

    if (filter.updatedAt) {
      where.updatedAt = this.buildDateCondition(filter.updatedAt);
    }

    // Operadores lógicos
    if (filter.$and && Array.isArray(filter.$and)) {
      where.AND = filter.$and.map(subFilter => this.buildWhere(subFilter));
    }

    if (filter.$or && Array.isArray(filter.$or)) {
      where.OR = filter.$or.map(subFilter => this.buildWhere(subFilter));
    }

    return where;
  }

  private static buildFieldCondition(condition: { [key: string]: any }): any {
    const operator = Object.keys(condition)[0];
    const value = condition[operator];

    switch (operator) {
      case '$eq':
        return { equals: value };
      case '$contains':
        return { contains: value, mode: 'insensitive' };
      case '$startsWith':
        return { startsWith: value, mode: 'insensitive' };
      case '$endsWith':
        return { endsWith: value, mode: 'insensitive' };
      case '$in':
        return { in: Array.isArray(value) ? value : [value] };
      case '$null':
        return value ? null : { not: null };
      default:
        console.warn(`Operador não suportado para campo de texto: ${operator}`);
        return undefined;
    }
  }

  private static buildEnumCondition(condition: { [key: string]: any }, enumClass: any): any {
    const operator = Object.keys(condition)[0];
    const value = condition[operator];

    switch (operator) {
      case '$eq':
        const validEnumValue = EnumUtils.getEnumValue(enumClass, value);
        if (validEnumValue === undefined) {
          console.warn(`Valor de enum inválido: ${value}`);
          return undefined;
        }
        return validEnumValue;
      case '$in':
        const validEnumValues = Array.isArray(value) 
          ? value.map(v => EnumUtils.getEnumValue(enumClass, v)).filter(v => v !== undefined)
          : [EnumUtils.getEnumValue(enumClass, value)].filter(v => v !== undefined);
        
        if (validEnumValues.length === 0) {
          console.warn(`Nenhum valor de enum válido encontrado: ${value}`);
          return undefined;
        }
        return { in: validEnumValues };
      default:
        console.warn(`Operador não suportado para campo enum: ${operator}`);
        return undefined;
    }
  }

  private static buildIdCondition(condition: { [key: string]: any }): any {
    const operator = Object.keys(condition)[0];
    const value = condition[operator];

    switch (operator) {
      case '$eq':
        return value;
      case '$in':
        return { in: Array.isArray(value) ? value : [value] };
      default:
        console.warn(`Operador não suportado para campo ID: ${operator}`);
        return undefined;
    }
  }

  private static buildDateCondition(condition: { [key: string]: any }): any {
    const operator = Object.keys(condition)[0];
    const value = condition[operator];

    switch (operator) {
      case '$eq':
        return { equals: new Date(value) };
      case '$gt':
        return { gt: new Date(value) };
      case '$gte':
        return { gte: new Date(value) };
      case '$lt':
        return { lt: new Date(value) };
      case '$lte':
        return { lte: new Date(value) };
      case '$between':
        if (Array.isArray(value) && value.length === 2) {
          return {
            gte: new Date(value[0]),
            lte: new Date(value[1]),
          };
        }
        console.warn('Operador $between requer array com 2 valores');
        return undefined;
      default:
        console.warn(`Operador não suportado para campo de data: ${operator}`);
        return undefined;
    }
  }
} 