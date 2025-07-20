import { TenantModule } from '../../domain/entities/tenant-module.entity';

export abstract class ITenantModuleRepository {
  abstract upsert(tenantModule: TenantModule): Promise<TenantModule>;
  abstract findByCompanyAndModule(companyId: string, moduleId: string): Promise<TenantModule | null>;
  abstract findByCompanyId(companyId: string): Promise<TenantModule[]>;
  abstract findByModuleId(moduleId: string): Promise<TenantModule[]>;
} 