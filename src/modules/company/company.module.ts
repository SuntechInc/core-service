import { Module } from '@nestjs/common';
import { CompanyPrismaRepository } from './infrastructure/repositories/prisma/company.prisma-repository';
import { CreateCompanyUseCase } from './application/use-cases/create-company.use-case';
import { CompanyController } from './infrastructure/controllers/company.controller';
import { CompanyRepository } from './domain/repositories/company.repository';

@Module({
  controllers: [CompanyController],
  providers: [
    {
      provide: CompanyRepository,
      useClass: CompanyPrismaRepository,
    },
    CreateCompanyUseCase,
  ],
})
export class CompanyModule {}
