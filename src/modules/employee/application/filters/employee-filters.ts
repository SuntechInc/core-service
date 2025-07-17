import { Prisma } from '@prisma/client';
import { Filter, PrismaFilterBuilder } from '@/shared/infrastructure/filters/prisma-filter-builder';

export type EmployeeFilter = Filter;

export interface EmployeeFilterOptions {
  filter?: EmployeeFilter;
  skip?: number;
  take?: number;
  orderBy?: Prisma.EmployeeOrderByWithRelationInput;
  include?: Prisma.EmployeeInclude;
  branchId?: string;
  departmentId?: string;
  companyId?: string;
}

export interface EmployeeFilterResult<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

/**
 * Classe responsável por processar filtros específicos de Employee
 * Converte filtros flexíveis em objetos Where do Prisma
 */
export class EmployeeFilters {
  /**
   * Converte EmployeeFilter para Prisma where clause
   */
  static buildWhere(filter?: EmployeeFilter): Prisma.EmployeeWhereInput {
    if (!filter) return {};
    
    return PrismaFilterBuilder.buildWhere(filter) as Prisma.EmployeeWhereInput;
  }

  /**
   * Cria filtro para busca por nome do funcionário
   */
  static byName(name: string): EmployeeFilter {
    return {
      name: { $contains: name }
    };
  }

  /**
   * Cria filtro para busca por email do funcionário
   */
  static byEmail(email: string): EmployeeFilter {
    return {
      email: { $contains: email }
    };
  }

  /**
   * Cria filtro para busca por telefone do funcionário
   */
  static byPhone(phone: string): EmployeeFilter {
    return {
      phone: { $contains: phone }
    };
  }

  /**
   * Cria filtro para busca por filial
   */
  static byBranch(branchId: string): EmployeeFilter {
    return {
      branchId: { $eq: branchId }
    };
  }

  /**
   * Cria filtro para busca por departamento
   */
  static byDepartment(departmentId: string): EmployeeFilter {
    return {
      departmentId: { $eq: departmentId }
    };
  }

  /**
   * Cria filtro para busca por tipo de emprego
   */
  static byEmploymentType(employmentType: string): EmployeeFilter {
    return {
      employmentType: { $eq: employmentType }
    };
  }

  /**
   * Cria filtro para busca por status do funcionário
   */
  static byStatus(status: string): EmployeeFilter {
    return {
      status: { $eq: status }
    };
  }

  /**
   * Cria filtro para busca por data de contratação
   */
  static byHiredAtRange(startDate: string, endDate: string): EmployeeFilter {
    return {
      hiredAt: { $between: [startDate, endDate] }
    };
  }

  /**
   * Cria filtro para busca por data de saída
   */
  static byLeftAtRange(startDate: string, endDate: string): EmployeeFilter {
    return {
      leftAt: { $between: [startDate, endDate] }
    };
  }

  /**
   * Cria filtro para busca por funcionários contratados recentemente
   */
  static recentlyHired(days: number): EmployeeFilter {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return {
      hiredAt: { $gte: date.toISOString() }
    };
  }

  /**
   * Cria filtro para busca por funcionários ativos
   */
  static active(): EmployeeFilter {
    return {
      status: { $eq: 'ACTIVE' }
    };
  }

  /**
   * Cria filtro para busca por funcionários inativos
   */
  static inactive(): EmployeeFilter {
    return {
      status: { $ne: 'ACTIVE' }
    };
  }

  /**
   * Cria filtro combinando múltiplas condições
   */
  static combine(...filters: EmployeeFilter[]): EmployeeFilter {
    return {
      $and: filters
    };
  }

  /**
   * Cria filtro OR combinando múltiplas condições
   */
  static or(...filters: EmployeeFilter[]): EmployeeFilter {
    return {
      $or: filters
    };
  }

  /**
   * Cria filtro para busca de texto em múltiplos campos
   */
  static textSearch(searchTerm: string): EmployeeFilter {
    return this.or(
      this.byName(searchTerm),
      this.byEmail(searchTerm),
      this.byPhone(searchTerm)
    );
  }

  /**
   * Cria filtro para busca por múltiplos nomes
   */
  static byNames(names: string[]): EmployeeFilter {
    return {
      name: { $in: names }
    };
  }

  /**
   * Cria filtro para busca por múltiplos emails
   */
  static byEmails(emails: string[]): EmployeeFilter {
    return {
      email: { $in: emails }
    };
  }

  /**
   * Cria filtro para busca por funcionários de uma filial e departamento específicos
   */
  static byBranchAndDepartment(branchId: string, departmentId: string): EmployeeFilter {
    return this.combine(
      this.byBranch(branchId),
      this.byDepartment(departmentId)
    );
  }

  /**
   * Cria filtro para busca por funcionários que contenham texto no nome OU email OU telefone
   */
  static byNameOrEmailOrPhone(searchTerm: string): EmployeeFilter {
    return this.or(
      this.byName(searchTerm),
      this.byEmail(searchTerm),
      this.byPhone(searchTerm)
    );
  }

  /**
   * Cria filtro para busca por funcionários contratados após uma data
   */
  static hiredAfter(date: string): EmployeeFilter {
    return {
      hiredAt: { $gte: date }
    };
  }

  /**
   * Cria filtro para busca por funcionários contratados antes de uma data
   */
  static hiredBefore(date: string): EmployeeFilter {
    return {
      hiredAt: { $lte: date }
    };
  }

  /**
   * Cria filtro para busca por funcionários que saíram após uma data
   */
  static leftAfter(date: string): EmployeeFilter {
    return {
      leftAt: { $gte: date }
    };
  }

  /**
   * Cria filtro para busca por funcionários que saíram antes de uma data
   */
  static leftBefore(date: string): EmployeeFilter {
    return {
      leftAt: { $lte: date }
    };
  }
} 