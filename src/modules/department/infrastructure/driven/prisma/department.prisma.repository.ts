import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/infrastructure/database/prisma.service';
import { IDepartmentRepository, PaginationOptions, PaginatedResult } from '@/modules/department/application/ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';
import { Prisma, Department as PrismaDepartment } from '@prisma/client';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';
import { PAGINATION_CONSTANTS } from '@/modules/department/application/constants/pagination.constants';

@Injectable()
export class PrismaDepartmentRepository extends IDepartmentRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // ---------- helpers ----------
  private toDomain(raw: PrismaDepartment): Department {
    return Department.create({
      name: raw.name,
      description: raw.description ?? undefined,
      status: raw.status as any,
      branchId: raw.branchId,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    }, new UniqueEntityID(raw.id));
  }

  // ---------- CRUD ----------
  async create(entity: Department): Promise<Department> {
    const raw = await this.prisma.department.create({
      data: {
        id: entity.id.toString(),
        name: entity.name,
        description: entity.description,
        status: entity.status,
        branchId: entity.branchId,
      },
    });
    return this.toDomain(raw);
  }

  async findById(id: string): Promise<Department | null> {
    const raw = await this.prisma.department.findUnique({
      where: { id },
    });
    return raw ? this.toDomain(raw) : null;
  }

  async findByBranchId(branchId: string): Promise<Department[]> {
    const departments = await this.prisma.department.findMany({
      where: { branchId },
    });
    return departments.map(department => this.toDomain(department));
  }

  async update(entity: Department): Promise<Department> {
    const raw = await this.prisma.department.update({
      where: { id: entity.id.toString() },
      data: {
        name: entity.name,
        description: entity.description,
        status: entity.status,
        branchId: entity.branchId,
      },
    });
    return this.toDomain(raw);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.department.delete({
      where: { id },
    });
  }

  async findAll(): Promise<Department[]> {
    const departments = await this.prisma.department.findMany();
    return departments.map(department => this.toDomain(department));
  }

  async findByName(name: string): Promise<Department[]> {
    const departments = await this.prisma.department.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive', // Case insensitive search
        },
      },
      orderBy: { name: 'asc' },
    });
    return departments.map(department => this.toDomain(department));
  }

  async findAllPaginated(options: PaginationOptions): Promise<PaginatedResult<Department>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, skip, take } = options;
    
    // Calcular skip e take baseado em page e size se não fornecidos
    const finalSkip = skip ?? (page - 1) * size;
    const finalTake = take ?? size;
    
    // Limitar o tamanho máximo da página
    const limitedTake = Math.min(finalTake, PAGINATION_CONSTANTS.MAX_SIZE);
    
    const [departments, total] = await Promise.all([
      this.prisma.department.findMany({
        skip: finalSkip,
        take: limitedTake,
        orderBy: { createdAt: 'desc' }, // Ordenar por data de criação (mais recentes primeiro)
      }),
      this.prisma.department.count(),
    ]);

    return {
      data: departments.map(department => this.toDomain(department)),
      total,
      page,
      size: limitedTake,
    };
  }

  async count(): Promise<number> {
    return this.prisma.department.count();
  }
} 