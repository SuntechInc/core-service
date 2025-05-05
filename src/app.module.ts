import { Module } from '@nestjs/common';
import { PrismaModule } from './shared/infrastructure/database/prisma.module';
import { CompanyModule } from './modules/company/company.module';

@Module({
  imports: [
    PrismaModule,
    CompanyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 