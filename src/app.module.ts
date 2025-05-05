import { Module } from '@nestjs/common';
import { PrismaModule } from './shared/infrastructure/database/prisma.module';
import { CompanyModule } from './modules/company/company.module';
import { BranchModule } from '@/modules/branch/branch.module';

@Module({
  imports: [
    PrismaModule,
    CompanyModule,
    BranchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 