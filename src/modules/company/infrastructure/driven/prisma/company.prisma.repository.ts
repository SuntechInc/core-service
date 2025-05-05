import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/infrastructure/database/prisma.service';
import { ICompanyRepository } from '@/modules/company/application/ports/company.repository';
import { Company } from '@/modules/company/domain/entities/company.entity';
import { Prisma, Company as PrismaCompany } from '@prisma/client';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';

@Injectable()
export class PrismaCompanyRepository extends ICompanyRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // ---------- helpers ----------
  private toDomain(raw: PrismaCompany): Company {
    return Company.create({
      tradingName: raw.tradingName,
      legalName: raw.legalName ?? undefined,
      taxId: raw.taxId ?? undefined,
      taxCountry: raw.taxCountry ?? undefined,
      email: raw.email ?? undefined,
      phone: raw.phone ?? undefined,
      industry: raw.industry as any,
      segment: raw.segment as any,
      status: raw.status as any,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    }, new UniqueEntityID(raw.id));
  }

  // ---------- CRUD ----------
  async create(entity: Company): Promise<Company> {
    const raw = await this.prisma.company.create({
      data: {
        id: entity.id,
        tradingName: entity.tradingName,
        legalName: entity.legalName,
        taxId: entity.taxId,
        taxCountry: entity.taxCountry,
        email: entity.email,
        phone: entity.phone,
        industry: entity.industry,
        segment: entity.segment,
        status: entity.status,
      },
    });
    return this.toDomain(raw);
  }

  async findById(id: string): Promise<Company | null> {
    const raw = await this.prisma.company.findUnique({ where: { id } });
    return raw ? this.toDomain(raw) : null;
  }

  async findByTaxId(taxId: string): Promise<Company | null> {
    const raw = await this.prisma.company.findUnique({
      where: { taxId },
    });
    return raw ? this.toDomain(raw) : null;
  }

  async update(entity: Company): Promise<Company> {
    const raw = await this.prisma.company.update({
      where: { id: entity.id },
      data: {
        tradingName: entity.tradingName,
        legalName: entity.legalName,
        taxId: entity.taxId,
        taxCountry: entity.taxCountry,
        email: entity.email,
        phone: entity.phone,
        industry: entity.industry,
        segment: entity.segment,
        status: entity.status,
      },
    });
    return this.toDomain(raw);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.company.delete({
      where: { id },
    });
  }

  async findAll(): Promise<Company[]> {
    const companies = await this.prisma.company.findMany();
    return companies.map(company => this.toDomain(company));
  }
} 