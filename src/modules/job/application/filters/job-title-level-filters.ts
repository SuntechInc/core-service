import { Prisma } from '@prisma/client';
import { Filter, PrismaFilterBuilder } from '@/shared/infrastructure/filters/prisma-filter-builder';

export type JobTitleLevelFilter = Filter;

export interface JobTitleLevelFilterOptions {
  filter?: JobTitleLevelFilter;
  skip?: number;
  take?: number;
  orderBy?: Prisma.JobTitleLevelOrderByWithRelationInput;
  include?: Prisma.JobTitleLevelInclude;
  jobTitleVersionId?: string;
}

export interface JobTitleLevelFilterResult<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

/**
 * Classe responsável por processar filtros específicos de JobTitleLevel
 * Converte filtros flexíveis em objetos Where do Prisma
 */
export class JobTitleLevelFilters {
  /**
   * Converte JobTitleLevelFilter para Prisma where clause
   */
  static buildWhere(filter?: JobTitleLevelFilter): Prisma.JobTitleLevelWhereInput {
    if (!filter) return {};
    
    return PrismaFilterBuilder.buildWhere(filter) as Prisma.JobTitleLevelWhereInput;
  }

  /**
   * Cria filtro para busca por label (case insensitive)
   */
  static byLabel(label: string): JobTitleLevelFilter {
    return {
      label: { $contains: label }
    };
  }

  /**
   * Cria filtro para busca por rank específico
   */
  static byRank(rank: number): JobTitleLevelFilter {
    return {
      rank: { $eq: rank }
    };
  }

  /**
   * Cria filtro para busca por rank mínimo
   */
  static byMinRank(minRank: number): JobTitleLevelFilter {
    return {
      rank: { $gte: minRank }
    };
  }

  /**
   * Cria filtro para busca por rank máximo
   */
  static byMaxRank(maxRank: number): JobTitleLevelFilter {
    return {
      rank: { $lte: maxRank }
    };
  }

  /**
   * Cria filtro para busca por faixa de rank
   */
  static byRankRange(minRank: number, maxRank: number): JobTitleLevelFilter {
    return {
      rank: { $between: [minRank, maxRank] }
    };
  }

  /**
   * Cria filtro para busca por salário mínimo
   */
  static byMinSalary(minSalary: number): JobTitleLevelFilter {
    return {
      salaryMin: { $gte: minSalary }
    };
  }

  /**
   * Cria filtro para busca por salário máximo
   */
  static byMaxSalary(maxSalary: number): JobTitleLevelFilter {
    return {
      salaryMax: { $lte: maxSalary }
    };
  }

  /**
   * Cria filtro para busca por faixa salarial
   */
  static bySalaryRange(minSalary: number, maxSalary: number): JobTitleLevelFilter {
    return {
      $and: [
        { salaryMin: { $lte: maxSalary } },
        { salaryMax: { $gte: minSalary } }
      ]
    };
  }

  /**
   * Cria filtro para busca por versão de cargo
   */
  static byJobTitleVersion(jobTitleVersionId: string): JobTitleLevelFilter {
    return {
      jobTitleVersionId: { $eq: jobTitleVersionId }
    };
  }

  /**
   * Cria filtro para busca por múltiplas versões de cargo
   */
  static byJobTitleVersions(jobTitleVersionIds: string[]): JobTitleLevelFilter {
    return {
      jobTitleVersionId: { $in: jobTitleVersionIds }
    };
  }

  /**
   * Cria filtro para busca por data de criação
   */
  static byCreatedAtRange(startDate: string, endDate: string): JobTitleLevelFilter {
    return {
      createdAt: { $between: [startDate, endDate] }
    };
  }

  /**
   * Cria filtro para busca por data de atualização
   */
  static byUpdatedAtRange(startDate: string, endDate: string): JobTitleLevelFilter {
    return {
      updatedAt: { $between: [startDate, endDate] }
    };
  }

  /**
   * Cria filtro para busca por níveis com salário mínimo definido
   */
  static withSalaryMin(): JobTitleLevelFilter {
    return {
      salaryMin: { $null: false }
    };
  }

  /**
   * Cria filtro para busca por níveis com salário máximo definido
   */
  static withSalaryMax(): JobTitleLevelFilter {
    return {
      salaryMax: { $null: false }
    };
  }

  /**
   * Cria filtro para busca por níveis com rank definido
   */
  static withRank(): JobTitleLevelFilter {
    return {
      rank: { $null: false }
    };
  }

  /**
   * Cria filtro combinando múltiplas condições
   */
  static combine(...filters: JobTitleLevelFilter[]): JobTitleLevelFilter {
    return {
      $and: filters
    };
  }

  /**
   * Cria filtro OR combinando múltiplas condições
   */
  static or(...filters: JobTitleLevelFilter[]): JobTitleLevelFilter {
    return {
      $or: filters
    };
  }

  /**
   * Cria filtro para busca de texto em múltiplos campos
   */
  static textSearch(searchTerm: string): JobTitleLevelFilter {
    return this.or(
      this.byLabel(searchTerm)
    );
  }

  /**
   * Cria filtro para busca por níveis de cargos específicos
   */
  static byLabels(labels: string[]): JobTitleLevelFilter {
    return {
      label: { $in: labels }
    };
  }

  /**
   * Cria filtro para busca por níveis com salário mínimo maior que
   */
  static bySalaryMinGreaterThan(value: number): JobTitleLevelFilter {
    return {
      salaryMin: { $gt: value }
    };
  }

  /**
   * Cria filtro para busca por níveis com salário máximo menor que
   */
  static bySalaryMaxLessThan(value: number): JobTitleLevelFilter {
    return {
      salaryMax: { $lt: value }
    };
  }

  /**
   * Cria filtro para busca por níveis criados recentemente
   */
  static recentlyCreated(days: number): JobTitleLevelFilter {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return {
      createdAt: { $gte: date.toISOString() }
    };
  }

  /**
   * Cria filtro para busca por níveis atualizados recentemente
   */
  static recentlyUpdated(days: number): JobTitleLevelFilter {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return {
      updatedAt: { $gte: date.toISOString() }
    };
  }
} 