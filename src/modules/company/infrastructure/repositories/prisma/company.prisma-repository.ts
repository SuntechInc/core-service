import { PrismaService } from 'src/shared/infrastructure/database/prisma.service';
import { CreateCompanyDto } from '../../../application/dtos/create-company.dto';
import { CompanyRepository } from '../../../domain/repositories/company.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Company } from 'src/modules/company/domain/entities/company.entity';
import { CompanyMapper } from 'src/modules/company/application/mappers/company.mapper';
@Injectable()
export class CompanyPrismaRepository implements CompanyRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(entity: Company): Promise<Company> {
    const record = await this.prisma.company.create({
      data: {
        tradingName: entity.tradingName,
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
  async findById(id: string): Promise<Company> {
    const record = await this.prisma.company.findUnique({
      where: { id },
    });

    return record ? CompanyMapper.toDomain(record) : null;
  }
  // findByTaxId(taxId: string): Promise<Company | null> {
  //   throw new Error('Method not implemented.');
  // }
  // findAll(): Promise<Company[]> {
  //   throw new Error('Method not implemented.');
  // }
  async update(id: string, company: Partial<Company>): Promise<Company> {
    const existingCompany = await this.findById(id);

    if (!existingCompany) return null;

    const updatedCompany = await this.prisma.company.update({
      where: { id },
      data: {
        ...company,
      },
    });

    return CompanyMapper.toDomain(updatedCompany);
  }
  // delete(id: string): Promise<void> {
  //   throw new Error('Method not implemented.');
  // }
}
