import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/infrastructure/database/prisma.service';
import { IDepartmentRepository } from '@/modules/department/application/ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';
import { Prisma, Department as PrismaDepartment } from '@prisma/client';
import { PAGINATION_CONSTANTS } from '@/modules/department/application/constants/pagination.constants';
import { DepartmentFilters, DepartmentFilterOptions, DepartmentFilterResult } from '@/modules/department/application/filters/department-filters';

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
    }, raw.id);
  }

  // ---------- CRUD ----------
  async create(entity: Department): Promise<Department> {
    const raw = await this.prisma.department.create({
      data: {
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
      where: { id: entity.id },
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



  async count(companyId: string): Promise<number> {
    return this.prisma.department.count({
      where: {
        branch: {
          companyId,
        },
      },
    });
  }

  async findWithFilters(options: DepartmentFilterOptions): Promise<DepartmentFilterResult<Department>> {
    const { filter, skip = 0, take = PAGINATION_CONSTANTS.DEFAULT_SIZE, orderBy, include, companyId } = options;
    
    const baseWhere = DepartmentFilters.buildWhere(filter);
    const where = {
      ...baseWhere,
      branch: {
        companyId,
      },
    };
    
    const finalTake = Math.min(take, PAGINATION_CONSTANTS.MAX_SIZE);
    
    const [departments, total] = await Promise.all([
      this.prisma.department.findMany({
        where,
        skip,
        take: finalTake,
        orderBy: orderBy || { createdAt: 'desc' },
        include,
      }),
      this.prisma.department.count({ where }),
    ]);

    const page = Math.floor(skip / finalTake) + 1;
    const totalPages = Math.ceil(total / finalTake);

    return {
      data: departments.map(department => this.toDomain(department)),
      total,
      page,
      size: finalTake,
      totalPages,
      hasNext: page < totalPages,
      hasPrevious: page > 1,
    };
  }
} 