import { Module } from '@nestjs/common';
import { PrismaModule } from '@/shared/infrastructure/database/prisma.module';
import { PrismaCompanyRepository } from './infrastructure/driven/prisma/company.prisma.repository';
import { ICompanyRepository } from './application/ports/company.repository';
import { CreateCompanyUseCase } from './application/use-cases/create-company.use-case';
import { ListCompaniesUseCase } from './application/use-cases/list-companies/list-companies.use-case';
import { FindCompanyByTaxIdUseCase } from './application/use-cases/find-company-by-tax-id/find-company-by-tax-id.use-case';
import { FindCompaniesByTradingNameUseCase } from './application/use-cases/find-companies-by-trading-name/find-companies-by-trading-name.use-case';
import { UpdateCompanyUseCase } from './application/use-cases/update-company/update-company.use-case';
import { SoftDeleteCompanyUseCase } from './application/use-cases/soft-delete-company/soft-delete-company.use-case';
// import { FindCompanyByIdUseCase } from './application/use-cases/find-company-by-id.use-case';
import { CompanyController } from './infrastructure/driver/http/company.controller';
import { SeedService } from '../../seed/seed.service';

@Module({
  imports: [PrismaModule],
  controllers: [CompanyController],
  providers: [
    // Adapter
    PrismaCompanyRepository,
    { provide: ICompanyRepository, useExisting: PrismaCompanyRepository },

    // Use cases
    CreateCompanyUseCase,
    ListCompaniesUseCase,
    FindCompanyByTaxIdUseCase,
    FindCompaniesByTradingNameUseCase,
    UpdateCompanyUseCase,
    SoftDeleteCompanyUseCase,
    // FindCompanyByIdUseCase,
    SeedService,
  ],
})
export class CompanyModule {}
