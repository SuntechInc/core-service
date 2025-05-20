import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/infrastructure/database/prisma.service';
import { IDepartmentRepository } from '@/modules/department/application/ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';
import { Prisma, Department as PrismaDepartment } from '@prisma/client';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';

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
          mode: 'insensitive',
        },
      },
    });
    return departments.map(department => this.toDomain(department));
  }
} 