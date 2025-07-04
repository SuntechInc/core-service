import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/infrastructure/database/prisma.service';
import { ICompanyRepository, PaginationOptions, PaginatedResult } from '@/modules/company/application/ports/company.repository';
import { Company } from '@/modules/company/domain/entities/company.entity';
import { Prisma, Company as PrismaCompany } from '@prisma/client';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';
import { PAGINATION_CONSTANTS } from '@/modules/company/application/constants/pagination.constants';

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
      isBaseCompany: raw.isBaseCompany ?? false,
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
        isBaseCompany: entity.isBaseCompany,
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

  async findByEmail(email: string): Promise<Company | null> {
    const raw = await this.prisma.company.findUnique({
      where: { email },
    });
    return raw ? this.toDomain(raw) : null;
  }

  async findByTradingName(tradingName: string): Promise<Company[]> {
    const companies = await this.prisma.company.findMany({
      where: {
        tradingName: {
          contains: tradingName,
          mode: 'insensitive', // Case insensitive search
        },
      },
      orderBy: { tradingName: 'asc' },
    });
    return companies.map(company => this.toDomain(company));
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
        isBaseCompany: entity.isBaseCompany,
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

  async findAllPaginated(options: PaginationOptions): Promise<PaginatedResult<Company>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, skip, take } = options;
    
    // Calcular skip e take baseado em page e size se não fornecidos
    const finalSkip = skip ?? (page - 1) * size;
    const finalTake = take ?? size;
    
    // Limitar o tamanho máximo da página
    const limitedTake = Math.min(finalTake, PAGINATION_CONSTANTS.MAX_SIZE);
    
    const [companies, total] = await Promise.all([
      this.prisma.company.findMany({
        skip: finalSkip,
        take: limitedTake,
        orderBy: { createdAt: 'desc' }, // Ordenar por data de criação (mais recentes primeiro)
      }),
      this.prisma.company.count(),
    ]);

    return {
      data: companies.map(company => this.toDomain(company)),
      total,
      page,
      size: limitedTake,
    };
  }

  async count(): Promise<number> {
    return this.prisma.company.count();
  }

  async findBaseCompany(): Promise<Company | null> {
    const raw = await this.prisma.company.findFirst({ where: { isBaseCompany: true } });
    return raw ? this.toDomain(raw) : null;
  }
} 