import { Module } from '@nestjs/common';
import { PrismaModule } from '@/shared/infrastructure/database/prisma.module';
import { PrismaTenantModuleRepository } from '@/modules/tenant-module/infrastructure/driven/prisma/tenant-module.prisma.repository';
import { PrismaModuleRepository } from '@/modules/tenant-module/infrastructure/driven/prisma/module.prisma.repository';
import { ITenantModuleRepository } from '@/modules/tenant-module/application/ports/tenant-module.repository';
import { IModuleRepository } from '@/modules/tenant-module/application/ports/module.repository';
import { EnableCompanyModuleUseCase } from '@/modules/tenant-module/application/use-cases/enable-company-module/enable-company-module.use-case';
import { ListModulesUseCase } from '@/modules/tenant-module/application/use-cases/list-modules/list-modules.use-case';
import { ListCompanyModulesUseCase } from '@/modules/tenant-module/application/use-cases/list-company-modules/list-company-modules.use-case';
import { TenantModuleController } from '@/modules/tenant-module/infrastructure/driver/http/tenant-module.controller';

@Module({
  imports: [PrismaModule],
  controllers: [TenantModuleController],
  providers: [
    // Adapters
    PrismaTenantModuleRepository,
    PrismaModuleRepository,
    { provide: ITenantModuleRepository, useExisting: PrismaTenantModuleRepository },
    { provide: IModuleRepository, useExisting: PrismaModuleRepository },

    // Use cases
    EnableCompanyModuleUseCase,
    ListModulesUseCase,
    ListCompanyModulesUseCase,
  ],
})
export class TenantModuleModule {} 