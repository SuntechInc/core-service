import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaCompanyRepository } from '../modules/company/infrastructure/driven/prisma/company.prisma.repository';
import { Company } from '../modules/company/domain/entities/company.entity';
import { Industry } from '../modules/company/domain/enums/industry.enum';
import { Segment } from '../modules/company/domain/enums/segment.enum';
import { CompanyStatus } from '../modules/company/domain/enums/company-status.enum';

@Injectable()
export class SeedService implements OnModuleInit {
  private readonly logger = new Logger(SeedService.name);

  constructor(private readonly companies: PrismaCompanyRepository) {}

  async onModuleInit() {
    const exists = await this.companies.findBaseCompany();
    if (!exists) {
      this.logger.log('Nenhuma company base encontrada. Criando seed...');
      await this.companies.create(
        Company.create({
          tradingName: 'Qualityflow',
          legalName: 'Suntech',
          taxId: '00000000000000',
          taxCountry: 'BR',
          email: 'financeiro@suntech.com.br',
          phone: '0000000000',
          industry: Industry.TECHNOLOGY,
          segment: Segment.HOSPITAL,
          status: CompanyStatus.ACTIVE,
          isBaseCompany: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      );
      this.logger.log('Company base criada com sucesso.');
    } else {
      this.logger.log('Company base já existe, nada a fazer.');
    }
  }
} 