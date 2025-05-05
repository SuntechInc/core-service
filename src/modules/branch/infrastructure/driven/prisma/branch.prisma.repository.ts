import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/infrastructure/database/prisma.service';
import { IBranchRepository } from '@/modules/branch/application/ports/branch.repository';
import { Branch } from '@/modules/branch/domain/entities/branch.entity';
import { Prisma, Branch as PrismaBranch } from '@prisma/client';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';

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
} 