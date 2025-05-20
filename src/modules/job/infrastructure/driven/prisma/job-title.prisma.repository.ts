import { Injectable, Inject } from '@nestjs/common'
import { IJobTitleRepository } from '@/modules/job/domain/repositories/job-title.repository'
import { JobTitle } from '@/modules/job/domain/entities/job-title.entity'
import { JobTitleStatus } from '@/modules/job/domain/enums/job-title-status.enum'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'
import { PrismaService } from '@/shared/infrastructure/database/prisma.service'

@Injectable()
export class JobTitlePrismaRepository implements IJobTitleRepository {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async create(jobTitle: JobTitle): Promise<JobTitle> {
    // TODO: Get companyId and branchId from request context
    const companyId = '' // Get from context
    const branchId = '' // Get from context

    const raw = await this.prisma.jobTitle.create({
      data: {
        name: jobTitle.name,
        companyId,
        branch: {
          connect: {
            id: branchId,
          },
        },
      },
    })

    return this.toDomain(raw)
  }

  async findById(id: string): Promise<JobTitle | null> {
    const raw = await this.prisma.jobTitle.findUnique({
      where: { id },
    })

    if (!raw) {
      return null
    }

    return this.toDomain(raw)
  }

  async findByName(name: string): Promise<JobTitle | null> {
    const raw = await this.prisma.jobTitle.findFirst({
      where: { name },
    })

    if (!raw) {
      return null
    }

    return this.toDomain(raw)
  }

  async findAll(): Promise<JobTitle[]> {
    const raws = await this.prisma.jobTitle.findMany()

    return raws.map((raw) => this.toDomain(raw))
  }

  async update(jobTitle: JobTitle): Promise<JobTitle> {
    const raw = await this.prisma.jobTitle.update({
      where: { id: jobTitle.id.toString() },
      data: {
        name: jobTitle.name,
      },
    })

    return this.toDomain(raw)
  }

  async delete(id: string): Promise<void> {
    await this.prisma.jobTitle.delete({
      where: { id },
    })
  }

  private toDomain(raw: any): JobTitle {
    return JobTitle.create(
      {
        name: raw.name,
        createdAt: raw.created_at,
        updatedAt: raw.created_at,
        isActive: true,
      },
      new UniqueEntityID(raw.id_job_title),
    )
  }
} 