import { ParseFilterPipe, FilterPipeOptions } from './parse-filter.pipe';
import { EnumUtils } from './enum-utils';
import { BranchStatus } from '@/modules/branch/domain/enums/branch-status.enum';
import { CompanyStatus } from '@/modules/company/domain/enums/company-status.enum';
import { DepartmentStatus } from '@/modules/department/domain/enums/department-status.enum';

export class FilterPipeFactory {
  /**
   * Cria um pipe de filtro para branches com enums type-safe
   */
  static createBranchFilterPipe(): ParseFilterPipe {
    return new ParseFilterPipe({
      booleanFields: ['isHeadquarter', 'isBaseCompany'],
      requiredFields: ['companyId'],
      idFields: ['companyId'],
      enumFields: {
        status: EnumUtils.createEnumMap(BranchStatus)
      }
    });
  }

  /**
   * Cria um pipe de filtro para companies com enums type-safe
   */
  static createCompanyFilterPipe(): ParseFilterPipe {
    return new ParseFilterPipe({
      booleanFields: ['isBaseCompany'],
      idFields: ['companyId'],
      enumFields: {
        status: EnumUtils.createEnumMap(CompanyStatus)
      }
    });
  }

  /**
   * Cria um pipe de filtro para departments com enums type-safe
   */
  static createDepartmentFilterPipe(): ParseFilterPipe {
    return new ParseFilterPipe({
      booleanFields: [],
      requiredFields: ['companyId'],
      idFields: ['branchId'],
      enumFields: {
        status: EnumUtils.createEnumMap(DepartmentStatus)
      }
    });
  }

  /**
   * Cria um pipe de filtro para job title levels
   */
  static createJobTitleLevelFilterPipe(): ParseFilterPipe {
    return new ParseFilterPipe({
      booleanFields: [],
      idFields: ['jobTitleVersionId']
    });
  }

  /**
   * Cria um pipe de filtro customizado
   */
  static createCustomFilterPipe(options: FilterPipeOptions): ParseFilterPipe {
    return new ParseFilterPipe(options);
  }

  /**
   * Cria um pipe de filtro com enums específicos
   * @param options - Opções básicas do pipe
   * @param enumFields - Mapeamento de campos para enums
   * @returns ParseFilterPipe configurado
   * 
   * @example
   * // Para um novo módulo com enums
   * const pipe = FilterPipeFactory.createFilterPipeWithEnums(
   *   {
   *     booleanFields: ['isActive'],
   *     requiredFields: ['userId']
   *   },
   *   {
   *     status: UserStatus,
   *     role: UserRole
   *   }
   * );
   */
  static createFilterPipeWithEnums(
    options: Omit<FilterPipeOptions, 'enumFields'>,
    enumFields: { [field: string]: any }
  ): ParseFilterPipe {
    const enumMaps: { [field: string]: { [key: string]: string } } = {};
    
    Object.entries(enumFields).forEach(([field, enumObj]) => {
      enumMaps[field] = EnumUtils.createEnumMap(enumObj);
    });

    return new ParseFilterPipe({
      ...options,
      enumFields: enumMaps
    });
  }
} 