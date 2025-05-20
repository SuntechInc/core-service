import { Injectable, Inject } from '@nestjs/common'
import { IJobTitleLevelRepository } from '@/modules/job/domain/repositories/job-title-level.repository'
import { JobTitleLevel } from '@/modules/job/domain/entities/job-title-level.entity'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'
import { PrismaService } from '@/shared/infrastructure/database/prisma.service'

@Injectable()
export class JobTitleLevelPrismaRepository implements IJobTitleLevelRepository {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async create(jobTitleLevel: JobTitleLevel): Promise<JobTitleLevel> {
    const raw = await this.prisma.jobTitleLevel.create({
      data: {
        jobTitleVersion: {
          connect: {
            id: jobTitleLevel.jobTitleVersionId.toString(),
          },
        },
        label: jobTitleLevel.label,
        rank: jobTitleLevel.rank,
        salaryMin: jobTitleLevel.salaryMin,
        salaryMax: jobTitleLevel.salaryMax,
      },
    })

    return this.toDomain(raw)
  }

  async findById(id: string): Promise<JobTitleLevel | null> {
    const raw = await this.prisma.jobTitleLevel.findUnique({
      where: { id },
    })

    if (!raw) {
      return null
    }

    return this.toDomain(raw)
  }

  async findByJobTitleVersionIdAndLabel(
    jobTitleVersionId: string,
    label: string,
  ): Promise<JobTitleLevel | null> {
    const raw = await this.prisma.jobTitleLevel.findFirst({
      where: {
        jobTitleVersionId,
        label,
      },
    })

    if (!raw) {
      return null
    }

    return this.toDomain(raw)
  }

  async findAllByJobTitleVersionId(
    jobTitleVersionId: string,
  ): Promise<JobTitleLevel[]> {
    const raws = await this.prisma.jobTitleLevel.findMany({
      where: { jobTitleVersionId },
    })

    return raws.map((raw) => this.toDomain(raw))
  }

  async update(jobTitleLevel: JobTitleLevel): Promise<JobTitleLevel> {
    const raw = await this.prisma.jobTitleLevel.update({
      where: { id: jobTitleLevel.id.toString() },
      data: {
        label: jobTitleLevel.label,
        rank: jobTitleLevel.rank,
        salaryMin: jobTitleLevel.salaryMin,
        salaryMax: jobTitleLevel.salaryMax,
      },
    })

    return this.toDomain(raw)
  }

  async delete(id: string): Promise<void> {
    await this.prisma.jobTitleLevel.delete({
      where: { id },
    })
  }

  private toDomain(raw: any): JobTitleLevel {
    return JobTitleLevel.create(
      {
        jobTitleVersionId: raw.jobTitleVersionId,
        label: raw.label,
        rank: raw.rank,
        salaryMin: raw.salaryMin,
        salaryMax: raw.salaryMax,
        createdAt: raw.created_at,
        updatedAt: raw.updated_at,
      },
      new UniqueEntityID(raw.id_job_title_level),
    )
  }
} 