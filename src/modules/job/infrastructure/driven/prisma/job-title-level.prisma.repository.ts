import { Injectable, Inject } from '@nestjs/common'
import { IJobTitleLevelRepository } from '@/modules/job/domain/repositories/job-title-level.repository'
import { JobTitleLevel } from '@/modules/job/domain/entities/job-title-level.entity'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'
import { PrismaService } from '@/shared/infrastructure/database/prisma.service'
import { JobTitleLevelFilters, JobTitleLevelFilterOptions, JobTitleLevelFilterResult } from '@/modules/job/application/filters/job-title-level-filters'
import { PAGINATION_CONSTANTS } from '@/modules/job/application/constants/pagination.constants'

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

  async findWithFilters(options: JobTitleLevelFilterOptions): Promise<JobTitleLevelFilterResult<JobTitleLevel>> {
    const { filter, skip = 0, take = PAGINATION_CONSTANTS.DEFAULT_SIZE, orderBy, include, jobTitleVersionId } = options;
    
    const baseWhere = JobTitleLevelFilters.buildWhere(filter);
    const where = {
      ...baseWhere,
      ...(jobTitleVersionId && { jobTitleVersionId }),
    };
    
    const finalTake = Math.min(take, PAGINATION_CONSTANTS.MAX_SIZE);
    
    const [jobTitleLevels, total] = await Promise.all([
      this.prisma.jobTitleLevel.findMany({
        where,
        skip,
        take: finalTake,
        orderBy: orderBy || { createdAt: 'desc' },
        include,
      }),
      this.prisma.jobTitleLevel.count({ where }),
    ]);

    const page = Math.floor(skip / finalTake) + 1;
    const totalPages = Math.ceil(total / finalTake);

    return {
      data: jobTitleLevels.map(jobTitleLevel => this.toDomain(jobTitleLevel)),
      total,
      page,
      size: finalTake,
      totalPages,
      hasNext: page < totalPages,
      hasPrevious: page > 1,
    };
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