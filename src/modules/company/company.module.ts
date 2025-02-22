import { Module } from '@nestjs/common';
import { CompanyPrismaRepository } from './infrastructure/repositories/prisma/company.prisma-repository';
import { CreateCompanyUseCase } from './application/use-cases/create-company.use-case';
import { CompanyController } from './infrastructure/controllers/company.controller';
import { CompanyRepository } from './domain/repositories/company.repository';
import { FindCompanyByIdUseCase } from './application/use-cases/find-company-by-id.use-case';
import { UpdateCompanyUseCase } from './application/use-cases/update-company.use-case';

@Module({
  controllers: [CompanyController],
  providers: [
    {
      provide: CompanyRepository,
      useClass: CompanyPrismaRepository,
    },
    CreateCompanyUseCase,
    FindCompanyByIdUseCase,
    UpdateCompanyUseCase,
  ],
})
export class CompanyModule {}
