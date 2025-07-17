import { Prisma } from '@prisma/client';
import { Filter, PrismaFilterBuilder } from '@/shared/infrastructure/filters/prisma-filter-builder';

export type JobTitleVersionFilter = Filter;

export interface JobTitleVersionFilterOptions {
  filter?: JobTitleVersionFilter;
  skip?: number;
  take?: number;
  orderBy?: Prisma.JobTitleVersionOrderByWithRelationInput;
  include?: Prisma.JobTitleVersionInclude;
  jobTitleId?: string;
  companyId?: string;
}

export interface JobTitleVersionFilterResult<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

/**
 * Classe responsável por processar filtros específicos de JobTitleVersion
 * Converte filtros flexíveis em objetos Where do Prisma
 */
export class JobTitleVersionFilters {
  /**
   * Converte JobTitleVersionFilter para Prisma where clause
   */
  static buildWhere(filter?: JobTitleVersionFilter): Prisma.JobTitleVersionWhereInput {
    if (!filter) return {};
    
    return PrismaFilterBuilder.buildWhere(filter) as Prisma.JobTitleVersionWhereInput;
  }

  /**
   * Cria filtro para busca por jobTitleId
   */
  static byJobTitleId(jobTitleId: string): JobTitleVersionFilter {
    return {
      jobTitleId: { $eq: jobTitleId }
    };
  }

  /**
   * Cria filtro para busca por versão
   */
  static byVersion(version: number): JobTitleVersionFilter {
    return {
      version: { $eq: version }
    };
  }

  /**
   * Cria filtro para busca por versões maiores que
   */
  static byVersionGreaterThan(version: number): JobTitleVersionFilter {
    return {
      version: { $gt: version }
    };
  }

  /**
   * Cria filtro para busca por versões menores que
   */
  static byVersionLessThan(version: number): JobTitleVersionFilter {
    return {
      version: { $lt: version }
    };
  }

  /**
   * Cria filtro para busca por descrição
   */
  static byDescription(description: string): JobTitleVersionFilter {
    return {
      description: { $contains: description }
    };
  }

  /**
   * Cria filtro para busca por data de criação
   */
  static byCreatedAtRange(startDate: string, endDate: string): JobTitleVersionFilter {
    return {
      createdAt: { $between: [startDate, endDate] }
    };
  }

  /**
   * Cria filtro para busca por data de atualização
   */
  static byUpdatedAtRange(startDate: string, endDate: string): JobTitleVersionFilter {
    return {
      updatedAt: { $between: [startDate, endDate] }
    };
  }

  /**
   * Cria filtro para busca por versões criadas recentemente
   */
  static recentlyCreated(days: number): JobTitleVersionFilter {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return {
      createdAt: { $gte: date.toISOString() }
    };
  }

  /**
   * Cria filtro para busca por versões atualizadas recentemente
   */
  static recentlyUpdated(days: number): JobTitleVersionFilter {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return {
      updatedAt: { $gte: date.toISOString() }
    };
  }

  /**
   * Cria filtro combinando múltiplas condições
   */
  static combine(...filters: JobTitleVersionFilter[]): JobTitleVersionFilter {
    return {
      $and: filters
    };
  }

  /**
   * Cria filtro OR combinando múltiplas condições
   */
  static or(...filters: JobTitleVersionFilter[]): JobTitleVersionFilter {
    return {
      $or: filters
    };
  }

  /**
   * Cria filtro para busca de texto em múltiplos campos
   */
  static textSearch(searchTerm: string): JobTitleVersionFilter {
    return this.or(
      this.byDescription(searchTerm)
    );
  }

  /**
   * Cria filtro para busca por múltiplas versões
   */
  static byVersions(versions: number[]): JobTitleVersionFilter {
    return {
      version: { $in: versions }
    };
  }

  /**
   * Cria filtro para busca por versões criadas após uma data
   */
  static createdAfter(date: string): JobTitleVersionFilter {
    return {
      createdAt: { $gte: date }
    };
  }

  /**
   * Cria filtro para busca por versões criadas antes de uma data
   */
  static createdBefore(date: string): JobTitleVersionFilter {
    return {
      createdAt: { $lte: date }
    };
  }

  /**
   * Cria filtro para busca por versões atualizadas após uma data
   */
  static updatedAfter(date: string): JobTitleVersionFilter {
    return {
      updatedAt: { $gte: date }
    };
  }

  /**
   * Cria filtro para busca por versões atualizadas antes de uma data
   */
  static updatedBefore(date: string): JobTitleVersionFilter {
    return {
      updatedAt: { $lte: date }
    };
  }
} 