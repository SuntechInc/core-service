import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/infrastructure/database/prisma.service';
import { IBranchRepository, PaginationOptions, PaginatedResult } from '@/modules/branch/application/ports/branch.repository';
import { Branch } from '@/modules/branch/domain/entities/branch.entity';
import { Prisma, Branch as PrismaBranch } from '@prisma/client';
import { PAGINATION_CONSTANTS } from '@/modules/branch/application/constants/pagination.constants';
import { BranchFilters, BranchFilterOptions, BranchFilterResult } from '@/modules/branch/application/filters/branch-filters';

@Injectable()
export class PrismaBranchRepository extends IBranchRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // ---------- helpers ----------
  private toDomain(raw: PrismaBranch): Branch {
    return Branch.create({
      taxId: raw.taxId,
      name: raw.name,
      code: raw.code ?? undefined,
      email: raw.email ?? undefined,
      phone: raw.phone ?? undefined,
      responsible: raw.responsible ?? undefined,
      isHeadquarter: raw.isHeadquarter,
      status: raw.status as any,
      companyId: raw.companyId,
      addressId: raw.addressId ?? undefined,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    }, raw.id);
  }

  // ---------- CRUD ----------
  async create(entity: Branch): Promise<Branch> {
    const raw = await this.prisma.branch.create({
      data: {
        taxId: entity.taxId,
        name: entity.name,
        code: entity.code,
        email: entity.email,
        phone: entity.phone,
        responsible: entity.responsible,
        isHeadquarter: entity.isHeadquarter,
        status: entity.status,
        companyId: entity.companyId,
        addressId: entity.addressId,
        // Não passamos o ID - deixamos o Prisma gerar com cuid()
      },
    });
    return this.toDomain(raw);
  }

  async findById(id: string): Promise<Branch | null> {
    const raw = await this.prisma.branch.findUnique({
      where: { id },
    });
    return raw ? this.toDomain(raw) : null;
  }

  async findByCompanyId(companyId: string): Promise<Branch[]> {
    const branches = await this.prisma.branch.findMany({
      where: { companyId },
    });
    return branches.map(branch => this.toDomain(branch));
  }

  async update(entity: Branch): Promise<Branch> {
    const raw = await this.prisma.branch.update({
      where: { id: entity.id.toString() },
      data: {
        taxId: entity.taxId,
        name: entity.name,
        code: entity.code,
        email: entity.email,
        phone: entity.phone,
        responsible: entity.responsible,
        isHeadquarter: entity.isHeadquarter,
        status: entity.status,
        companyId: entity.companyId,
        addressId: entity.addressId,
      },
    });
    return this.toDomain(raw);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.branch.delete({
      where: { id },
    });
  }



  async findAllPaginated(options: PaginationOptions): Promise<PaginatedResult<Branch>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, skip, take, companyId } = options;
    
    const finalSkip = skip ?? (page - 1) * size;
    const finalTake = take ?? size;
    
    const limitedTake = Math.min(finalTake, PAGINATION_CONSTANTS.MAX_SIZE);
    
    const [branches, total] = await Promise.all([
      this.prisma.branch.findMany({
        where: { companyId },
        skip: finalSkip,
        take: limitedTake,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.branch.count({
        where: { companyId },
      }),
    ]);

    return {
      data: branches.map(branch => this.toDomain(branch)),
      total,
      page,
      size: limitedTake,
    };
  }

  async count(companyId: string): Promise<number> {
    return this.prisma.branch.count({
      where: { companyId },
    });
  }

  async findWithFilters(options: BranchFilterOptions): Promise<BranchFilterResult<Branch>> {
    const { filter, skip = 0, take = PAGINATION_CONSTANTS.DEFAULT_SIZE, orderBy, include, companyId } = options;
    
    const baseWhere = BranchFilters.buildWhere(filter);
    const where = {
      ...baseWhere,
      companyId,
    };
    
    const finalTake = Math.min(take, PAGINATION_CONSTANTS.MAX_SIZE);
    
    const [branches, total] = await Promise.all([
      this.prisma.branch.findMany({
        where,
        skip,
        take: finalTake,
        orderBy: orderBy || { createdAt: 'desc' },
        include,
      }),
      this.prisma.branch.count({ where }),
    ]);

    const page = Math.floor(skip / finalTake) + 1;
    const totalPages = Math.ceil(total / finalTake);

    return {
      data: branches.map(branch => this.toDomain(branch)),
      total,
      page,
      size: finalTake,
      totalPages,
      hasNext: page < totalPages,
      hasPrevious: page > 1,
    };
  }
} 