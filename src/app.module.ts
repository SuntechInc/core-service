import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './shared/infrastructure/database/prisma.module';
import { CompanyModule } from './modules/company/company.module';
import { BranchModule } from './modules/branch/branch.module';
import { JobModule } from './modules/job/job.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    CompanyModule,
    BranchModule,
    JobModule,
    EmployeeModule,
  ],
  controllers: [],
  providers: [],

})
export class AppModule {} 