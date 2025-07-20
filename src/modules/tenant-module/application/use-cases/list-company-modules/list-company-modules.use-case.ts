import { Injectable } from '@nestjs/common';
import { ITenantModuleRepository } from '@/modules/tenant-module/application/ports/tenant-module.repository';
import { IModuleRepository } from '@/modules/tenant-module/application/ports/module.repository';
import { TenantModule } from '@/modules/tenant-module/domain/entities/tenant-module.entity';
import { Module } from '@/modules/tenant-module/domain/entities/module.entity';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';

interface CompanyModuleInfo {
  tenantModule: TenantModule;
  module: Module;
}

@Injectable()
export class ListCompanyModulesUseCase {
  constructor(
    private readonly tenantModuleRepository: ITenantModuleRepository,
    private readonly moduleRepository: IModuleRepository,
  ) {}

  async execute(companyId: string): Promise<Result<CompanyModuleInfo[]>> {
    try {
      console.log('[ListCompanyModulesUseCase] Buscando módulos da empresa:', companyId);
      
      const tenantModules = await this.tenantModuleRepository.findByCompanyId(companyId);
      console.log('[ListCompanyModulesUseCase] TenantModules encontrados:', tenantModules.length);

      const companyModules: CompanyModuleInfo[] = [];

      for (const tenantModule of tenantModules) {
        const module = await this.moduleRepository.findById(tenantModule.moduleId);
        if (module) {
          companyModules.push({
            tenantModule,
            module,
          });
        }
      }

      console.log('[ListCompanyModulesUseCase] Módulos da empresa encontrados:', companyModules.length);

      return Result.ok<CompanyModuleInfo[]>(companyModules);
    } catch (error) {
      console.error('[ListCompanyModulesUseCase] Erro inesperado:', error);
      return Result.fail<CompanyModuleInfo[]>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 