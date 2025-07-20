import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/infrastructure/database/prisma.service';
import { IModuleRepository } from '@/modules/tenant-module/application/ports/module.repository';
import { Module } from '@/modules/tenant-module/domain/entities/module.entity';
import { Prisma, Module as PrismaModule } from '@prisma/client';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';

@Injectable()
export class PrismaModuleRepository extends IModuleRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // ---------- helpers ----------
  private toDomain(raw: PrismaModule): Module {
    return Module.create({
      code: raw.code,
      name: raw.name,
      description: raw.description ?? undefined,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    }, new UniqueEntityID(raw.id));
  }

  // ---------- CRUD ----------
  async findByCode(code: string): Promise<Module | null> {
    const raw = await this.prisma.module.findUnique({
      where: { code },
    });
    return raw ? this.toDomain(raw) : null;
  }

  async findById(id: string): Promise<Module | null> {
    const raw = await this.prisma.module.findUnique({
      where: { id },
    });
    return raw ? this.toDomain(raw) : null;
  }

  async findAll(): Promise<Module[]> {
    const modules = await this.prisma.module.findMany({
      orderBy: { name: 'asc' },
    });
    return modules.map(module => this.toDomain(module));
  }
} 