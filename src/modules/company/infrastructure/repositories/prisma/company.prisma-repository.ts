import { PrismaService } from 'src/shared/infrastructure/database/prisma.service';
import { CreateCompanyDto } from '../../../application/dtos/create-company.dto';
import { CompanyRepository } from '../../../domain/repositories/company.repository';
import { Injectable } from '@nestjs/common';
import { Company } from 'src/modules/company/domain/entities/company.entity';
import { CompanyMapper } from 'src/modules/company/application/mappers/company.mapper';
@Injectable()
export class CompanyPrismaRepository implements CompanyRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(entity: Company): Promise<Company> {
    const record = await this.prisma.company.create({
      data: {
        tradingName: entity.tradingName, // Agora os getters permitem acessar
        legalName: entity.legalName,
        email: entity.email,
        taxId: entity.taxId,
        phone: entity.phone,
        industry: entity.industry,
        segment: entity.segment,
        isActive: entity.isActive ?? true,
      },
    });

    return CompanyMapper.toDomain(record);
  }
  // findById(id: string): Promise<Company | null> {
  //   throw new Error('Method not implemented.');
  // }
  // findByTaxId(taxId: string): Promise<Company | null> {
  //   throw new Error('Method not implemented.');
  // }
  // findAll(): Promise<Company[]> {
  //   throw new Error('Method not implemented.');
  // }
  // update(id: string, company: Partial<Company>): Promise<Company> {
  //   throw new Error('Method not implemented.');
  // }
  // delete(id: string): Promise<void> {
  //   throw new Error('Method not implemented.');
  // }
}
