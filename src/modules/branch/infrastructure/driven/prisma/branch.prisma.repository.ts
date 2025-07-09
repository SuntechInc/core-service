import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/infrastructure/database/prisma.service';
import { IBranchRepository, PaginationOptions, PaginatedResult } from '@/modules/branch/application/ports/branch.repository';
import { Branch } from '@/modules/branch/domain/entities/branch.entity';
import { Prisma, Branch as PrismaBranch } from '@prisma/client';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';
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
      name: raw.name,
      officialId: raw.officialId ?? undefined,
      sigla: raw.sigla ?? undefined,
      email: raw.email ?? undefined,
      phone: raw.phone ?? undefined,
      responsible: raw.responsible ?? undefined,
      isHeadquarter: raw.isHeadquarter,
      status: raw.status as any,
      companyId: raw.companyId,
      addressId: raw.addressId ?? undefined,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    }, new UniqueEntityID(raw.id));
  }

  // ---------- CRUD ----------
  async create(entity: Branch): Promise<Branch> {
    const raw = await this.prisma.branch.create({
      data: {
        id: entity.id.toString(),
        name: entity.name,
        officialId: entity.officialId,
        sigla: entity.sigla,
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
        name: entity.name,
        officialId: entity.officialId,
        sigla: entity.sigla,
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

  async findAll(): Promise<Branch[]> {
    const branches = await this.prisma.branch.findMany();
    return branches.map(branch => this.toDomain(branch));
  }

  async findByName(name: string): Promise<Branch[]> {
    const branches = await this.prisma.branch.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive', // Case insensitive search
        },
      },
      orderBy: { name: 'asc' },
    });
    return branches.map(branch => this.toDomain(branch));
  }

  async findAllPaginated(options: PaginationOptions): Promise<PaginatedResult<Branch>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, skip, take } = options;
    
    // Calcular skip e take baseado em page e size se não fornecidos
    const finalSkip = skip ?? (page - 1) * size;
    const finalTake = take ?? size;
    
    // Limitar o tamanho máximo da página
    const limitedTake = Math.min(finalTake, PAGINATION_CONSTANTS.MAX_SIZE);
    
    const [branches, total] = await Promise.all([
      this.prisma.branch.findMany({
        skip: finalSkip,
        take: limitedTake,
        orderBy: { createdAt: 'desc' }, // Ordenar por data de criação (mais recentes primeiro)
      }),
      this.prisma.branch.count(),
    ]);

    return {
      data: branches.map(branch => this.toDomain(branch)),
      total,
      page,
      size: limitedTake,
    };
  }

  async count(): Promise<number> {
    return this.prisma.branch.count();
  }

  async findWithFilters(options: BranchFilterOptions): Promise<BranchFilterResult<Branch>> {
    const { filter, skip = 0, take = PAGINATION_CONSTANTS.DEFAULT_SIZE, orderBy, include } = options;
    
    // Construir where clause usando BranchFilters
    const where = BranchFilters.buildWhere(filter);
    
    // Limitar o tamanho máximo
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

    // Calcular informações de paginação para a resposta
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