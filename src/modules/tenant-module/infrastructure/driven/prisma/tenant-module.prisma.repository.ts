import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/infrastructure/database/prisma.service';
import { ITenantModuleRepository } from '@/modules/tenant-module/application/ports/tenant-module.repository';
import { TenantModule } from '@/modules/tenant-module/domain/entities/tenant-module.entity';
import { Prisma, TenantModule as PrismaTenantModule } from '@prisma/client';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';

@Injectable()
export class PrismaTenantModuleRepository extends ITenantModuleRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // ---------- helpers ----------
  private toDomain(raw: PrismaTenantModule): TenantModule {
    return TenantModule.create({
      companyId: raw.companyId,
      moduleId: raw.moduleId,
      segment: raw.segment as any,
      status: raw.status as any,
      enabledAt: raw.enabledAt,
      disabledAt: raw.disabledAt ?? undefined,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  // ---------- CRUD ----------
  async upsert(tenantModule: TenantModule): Promise<TenantModule> {
    const raw = await this.prisma.tenantModule.upsert({
      where: { 
        companyId_moduleId: { 
          companyId: tenantModule.companyId, 
          moduleId: tenantModule.moduleId 
        } 
      },
      update: {
        segment: tenantModule.segment,
        status: tenantModule.status,
        enabledAt: tenantModule.enabledAt,
        disabledAt: tenantModule.disabledAt,
        updatedAt: tenantModule.updatedAt,
      },
      create: {
        companyId: tenantModule.companyId,
        moduleId: tenantModule.moduleId,
        segment: tenantModule.segment,
        status: tenantModule.status,
        enabledAt: tenantModule.enabledAt,
        disabledAt: tenantModule.disabledAt,
        createdAt: tenantModule.createdAt,
        updatedAt: tenantModule.updatedAt,
      },
    });
    return this.toDomain(raw);
  }

  async findByCompanyAndModule(companyId: string, moduleId: string): Promise<TenantModule | null> {
    const raw = await this.prisma.tenantModule.findUnique({
      where: { 
        companyId_moduleId: { 
          companyId, 
          moduleId 
        } 
      },
    });
    return raw ? this.toDomain(raw) : null;
  }

  async findByCompanyId(companyId: string): Promise<TenantModule[]> {
    const tenantModules = await this.prisma.tenantModule.findMany({
      where: { companyId },
      orderBy: { createdAt: 'desc' },
    });
    return tenantModules.map(tenantModule => this.toDomain(tenantModule));
  }

  async findByModuleId(moduleId: string): Promise<TenantModule[]> {
    const tenantModules = await this.prisma.tenantModule.findMany({
      where: { moduleId },
      orderBy: { createdAt: 'desc' },
    });
    return tenantModules.map(tenantModule => this.toDomain(tenantModule));
  }
} 