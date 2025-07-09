import { Prisma } from '@prisma/client';
import { Filter, PrismaFilterBuilder } from '@/shared/infrastructure/filters/prisma-filter-builder';

export type BranchFilter = Filter;

export interface BranchFilterOptions {
  filter?: BranchFilter;
  skip?: number;
  take?: number;
  orderBy?: Prisma.BranchOrderByWithRelationInput;
  include?: Prisma.BranchInclude;
}

export interface BranchFilterResult<T = any> {
  data: T[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

/**
 * Classe responsável por processar filtros específicos de Branch
 * Converte filtros flexíveis em objetos Where do Prisma
 */
export class BranchFilters {
  /**
   * Converte um filtro de Branch em objeto Where do Prisma
   */
  static buildWhere(filter?: BranchFilter): Prisma.BranchWhereInput | undefined {
    if (!filter) return undefined;
    return PrismaFilterBuilder.buildWhere(filter) as Prisma.BranchWhereInput;
  }

  /**
   * Converte string JSON de filtro em objeto Where do Prisma
   */
  static buildWhereFromString(filterString?: string): Prisma.BranchWhereInput | undefined {
    if (!filterString) return undefined;
    return PrismaFilterBuilder.buildWhereFromString(filterString) as Prisma.BranchWhereInput;
  }

  /**
   * Cria filtro para busca por nome (case insensitive)
   */
  static byName(name: string): BranchFilter {
    return {
      name: { $contains: name }
    };
  }

  /**
   * Cria filtro para busca por status
   */
  static byStatus(status: string): BranchFilter {
    return {
      status: { $eq: status }
    };
  }

  /**
   * Cria filtro para busca por empresa
   */
  static byCompany(companyId: string): BranchFilter {
    return {
      companyId: { $eq: companyId }
    };
  }

  /**
   * Cria filtro para buscar sedes
   */
  static headquarters(isHeadquarter: boolean = true): BranchFilter {
    return {
      isHeadquarter: { $eq: isHeadquarter }
    };
  }

  /**
   * Cria filtro para busca por email
   */
  static byEmail(email: string): BranchFilter {
    return {
      email: { $contains: email }
    };
  }

  /**
   * Cria filtro para busca por telefone
   */
  static byPhone(phone: string): BranchFilter {
    return {
      phone: { $contains: phone }
    };
  }

  /**
   * Cria filtro para busca por responsável
   */
  static byResponsible(responsible: string): BranchFilter {
    return {
      responsible: { $contains: responsible }
    };
  }

  /**
   * Cria filtro para busca por sigla
   */
  static bySigla(sigla: string): BranchFilter {
    return {
      sigla: { $contains: sigla }
    };
  }

  /**
   * Cria filtro para busca por ID oficial
   */
  static byOfficialId(officialId: string): BranchFilter {
    return {
      officialId: { $contains: officialId }
    };
  }

  /**
   * Cria filtro para branches ativas
   */
  static active(): BranchFilter {
    return this.byStatus('ACTIVE');
  }

  /**
   * Cria filtro para branches inativas
   */
  static inactive(): BranchFilter {
    return this.byStatus('INACTIVE');
  }

  /**
   * Cria filtro combinando múltiplas condições
   */
  static combine(...filters: BranchFilter[]): BranchFilter {
    return {
      $and: filters
    };
  }

  /**
   * Cria filtro com condições OR
   */
  static or(...filters: BranchFilter[]): BranchFilter {
    return {
      $or: filters
    };
  }

  /**
   * Cria filtro para busca de texto em múltiplos campos
   */
  static textSearch(searchTerm: string): BranchFilter {
    return this.or(
      this.byName(searchTerm),
      this.byEmail(searchTerm),
      this.byPhone(searchTerm),
      this.byResponsible(searchTerm),
      this.bySigla(searchTerm),
      this.byOfficialId(searchTerm)
    );
  }

  /**
   * Cria filtro para busca por data de criação
   */
  static byCreatedAtRange(startDate: Date | string, endDate: Date | string): BranchFilter {
    return {
      createdAt: { $between: [startDate.toString(), endDate.toString()] }
    };
  }

  /**
   * Cria filtro para busca por data de atualização
   */
  static byUpdatedAtRange(startDate: Date | string, endDate: Date | string): BranchFilter {
    return {
      updatedAt: { $between: [startDate.toString(), endDate.toString()] }
    };
  }

  /**
   * Cria filtro para branches com endereço
   */
  static withAddress(): BranchFilter {
    return {
      addressId: { $null: false }
    };
  }

  /**
   * Cria filtro para branches sem endereço
   */
  static withoutAddress(): BranchFilter {
    return {
      addressId: { $null: true }
    };
  }

  /**
   * Cria filtro para busca por múltiplos status
   */
  static byStatuses(statuses: string[]): BranchFilter {
    return {
      status: { $in: statuses }
    };
  }

  /**
   * Cria filtro para busca por múltiplas empresas
   */
  static byCompanies(companyIds: string[]): BranchFilter {
    return {
      companyId: { $in: companyIds }
    };
  }

  /**
   * Cria filtro para branches criadas recentemente (últimos X dias)
   */
  static recentlyCreated(days: number): BranchFilter {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    return this.byCreatedAtRange(startDate, new Date());
  }

  /**
   * Cria filtro para branches atualizadas recentemente (últimos X dias)
   */
  static recentlyUpdated(days: number): BranchFilter {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    return this.byUpdatedAtRange(startDate, new Date());
  }
} 