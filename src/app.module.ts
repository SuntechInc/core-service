import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './shared/infrastructure/database/prisma.module';
import { CompanyModule } from './modules/company/company.module';
import { BranchModule } from './modules/branch/branch.module';
import { DepartmentModule } from './modules/department/department.module';
import { JobModule } from './modules/job/job.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { TenantModuleModule } from './modules/tenant-module/tenant-module.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    CompanyModule,
    BranchModule,
    DepartmentModule,
    JobModule,
    EmployeeModule,
    TenantModuleModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {} 