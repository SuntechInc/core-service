import { TenantModule } from '@/modules/tenant-module/domain/entities/tenant-module.entity';
import { Module } from '@/modules/tenant-module/domain/entities/module.entity';
import { TenantModuleResponseDto } from '@/modules/tenant-module/application/dtos/tenant-module-response.dto';
import { ModuleResponseDto } from '@/modules/tenant-module/application/dtos/module-response.dto';

export class TenantModuleMapper {
  static toResponseDto(tenantModule: TenantModule, module: Module): TenantModuleResponseDto {
    return new TenantModuleResponseDto(
      tenantModule.companyId,
      tenantModule.moduleId,
      module.code,
      module.name,
      tenantModule.segment,
      tenantModule.status,
      tenantModule.enabledAt,
      tenantModule.disabledAt,
      tenantModule.createdAt,
      tenantModule.updatedAt,
    );
  }

  static toModuleResponseDto(module: Module): ModuleResponseDto {
    return new ModuleResponseDto(
      module.id,
      module.code,
      module.name,
      module.description,
      module.createdAt,
      module.updatedAt,
    );
  }
} 