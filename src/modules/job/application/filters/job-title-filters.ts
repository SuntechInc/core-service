import { Prisma } from '@prisma/client';
import { Filter, PrismaFilterBuilder } from '@/shared/infrastructure/filters/prisma-filter-builder';

export type JobTitleFilter = Filter;

export interface JobTitleFilterOptions {
  filter?: JobTitleFilter;
  skip?: number;
  take?: number;
  orderBy?: Prisma.JobTitleOrderByWithRelationInput;
  include?: Prisma.JobTitleInclude;
  companyId?: string;
  branchId?: string;
}

export interface JobTitleFilterResult<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

/**
 * Classe responsável por processar filtros específicos de JobTitle
 * Converte filtros flexíveis em objetos Where do Prisma
 */
export class JobTitleFilters {
  /**
   * Converte JobTitleFilter para Prisma where clause
   */
  static buildWhere(filter?: JobTitleFilter): Prisma.JobTitleWhereInput {
    if (!filter) return {};
    
    return PrismaFilterBuilder.buildWhere(filter) as Prisma.JobTitleWhereInput;
  }

  /**
   * Cria filtro para busca por nome do cargo (case insensitive)
   */
  static byName(name: string): JobTitleFilter {
    return {
      name: { $contains: name }
    };
  }

  /**
   * Cria filtro para busca por código do cargo
   */
  static byCode(code: string): JobTitleFilter {
    return {
      code: { $contains: code }
    };
  }

  /**
   * Cria filtro para busca por empresa
   */
  static byCompany(companyId: string): JobTitleFilter {
    return {
      companyId: { $eq: companyId }
    };
  }

  /**
   * Cria filtro para busca por múltiplas empresas
   */
  static byCompanies(companyIds: string[]): JobTitleFilter {
    return {
      companyId: { $in: companyIds }
    };
  }

  /**
   * Cria filtro para busca por filial
   */
  static byBranch(branchId: string): JobTitleFilter {
    return {
      branchId: { $eq: branchId }
    };
  }

  /**
   * Cria filtro para busca por múltiplas filiais
   */
  static byBranches(branchIds: string[]): JobTitleFilter {
    return {
      branchId: { $in: branchIds }
    };
  }

  /**
   * Cria filtro para busca por data de criação
   */
  static byCreatedAtRange(startDate: string, endDate: string): JobTitleFilter {
    return {
      createdAt: { $between: [startDate, endDate] }
    };
  }

  /**
   * Cria filtro para busca por data de atualização
   */
  static byUpdatedAtRange(startDate: string, endDate: string): JobTitleFilter {
    return {
      updatedAt: { $between: [startDate, endDate] }
    };
  }

  /**
   * Cria filtro para busca por cargos criados recentemente
   */
  static recentlyCreated(days: number): JobTitleFilter {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return {
      createdAt: { $gte: date.toISOString() }
    };
  }

  /**
   * Cria filtro para busca por cargos atualizados recentemente
   */
  static recentlyUpdated(days: number): JobTitleFilter {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return {
      updatedAt: { $gte: date.toISOString() }
    };
  }

  /**
   * Cria filtro para busca por cargos com código definido
   */
  static withCode(): JobTitleFilter {
    return {
      code: { $null: false }
    };
  }

  /**
   * Cria filtro para busca por cargos sem código
   */
  static withoutCode(): JobTitleFilter {
    return {
      code: { $null: true }
    };
  }

  /**
   * Cria filtro combinando múltiplas condições
   */
  static combine(...filters: JobTitleFilter[]): JobTitleFilter {
    return {
      $and: filters
    };
  }

  /**
   * Cria filtro OR combinando múltiplas condições
   */
  static or(...filters: JobTitleFilter[]): JobTitleFilter {
    return {
      $or: filters
    };
  }

  /**
   * Cria filtro para busca de texto em múltiplos campos
   */
  static textSearch(searchTerm: string): JobTitleFilter {
    return this.or(
      this.byName(searchTerm),
      this.byCode(searchTerm)
    );
  }

  /**
   * Cria filtro para busca por múltiplos nomes de cargos
   */
  static byNames(names: string[]): JobTitleFilter {
    return {
      name: { $in: names }
    };
  }

  /**
   * Cria filtro para busca por múltiplos códigos de cargos
   */
  static byCodes(codes: string[]): JobTitleFilter {
    return {
      code: { $in: codes }
    };
  }

  /**
   * Cria filtro para busca por cargos de uma empresa e filial específicas
   */
  static byCompanyAndBranch(companyId: string, branchId: string): JobTitleFilter {
    return this.combine(
      this.byCompany(companyId),
      this.byBranch(branchId)
    );
  }

  /**
   * Cria filtro para busca por cargos que contenham texto no nome OU código
   */
  static byNameOrCode(searchTerm: string): JobTitleFilter {
    return this.or(
      this.byName(searchTerm),
      this.byCode(searchTerm)
    );
  }

  /**
   * Cria filtro para busca por cargos criados após uma data
   */
  static createdAfter(date: string): JobTitleFilter {
    return {
      createdAt: { $gte: date }
    };
  }

  /**
   * Cria filtro para busca por cargos criados antes de uma data
   */
  static createdBefore(date: string): JobTitleFilter {
    return {
      createdAt: { $lte: date }
    };
  }

  /**
   * Cria filtro para busca por cargos atualizados após uma data
   */
  static updatedAfter(date: string): JobTitleFilter {
    return {
      updatedAt: { $gte: date }
    };
  }

  /**
   * Cria filtro para busca por cargos atualizados antes de uma data
   */
  static updatedBefore(date: string): JobTitleFilter {
    return {
      updatedAt: { $lte: date }
    };
  }
} 