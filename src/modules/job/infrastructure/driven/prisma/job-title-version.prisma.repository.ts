import { Injectable, Inject } from '@nestjs/common'
import { IJobTitleVersionRepository } from '@/modules/job/domain/repositories/job-title-version.repository'
import { JobTitleVersion } from '@/modules/job/domain/entities/job-title-version.entity'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'
import { PrismaService } from '@/shared/infrastructure/database/prisma.service'
import { JobTitleVersionFilters, JobTitleVersionFilterOptions, JobTitleVersionFilterResult } from '@/modules/job/application/filters/job-title-version-filters'
import { PAGINATION_CONSTANTS } from '@/modules/job/application/constants/pagination.constants'

@Injectable()
export class JobTitleVersionPrismaRepository implements IJobTitleVersionRepository {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async create(jobTitleVersion: JobTitleVersion): Promise<JobTitleVersion> {
    const raw = await this.prisma.jobTitleVersion.create({
      data: {
        jobTitle: {
          connect: {
            id: jobTitleVersion.jobTitleId.toString(),
          },
        },
        version: jobTitleVersion.version,
        description: jobTitleVersion.description,
        responsibilities: jobTitleVersion.responsibilities?.join(','),
        requirements: jobTitleVersion.requirements?.join(','),
      },
    })

    return this.toDomain(raw)
  }

  async findById(id: string): Promise<JobTitleVersion | null> {
    const raw = await this.prisma.jobTitleVersion.findUnique({
      where: { id },
    })

    if (!raw) {
      return null
    }

    return this.toDomain(raw)
  }

  async findByJobTitleIdAndVersion(
    jobTitleId: string,
    version: number,
  ): Promise<JobTitleVersion | null> {
    const raw = await this.prisma.jobTitleVersion.findFirst({
      where: {
        jobTitleId,
        version,
      },
    })

    if (!raw) {
      return null
    }

    return this.toDomain(raw)
  }

  async findAllByJobTitleId(jobTitleId: string): Promise<JobTitleVersion[]> {
    const raws = await this.prisma.jobTitleVersion.findMany({
      where: { jobTitleId },
    })

    return raws.map((raw) => this.toDomain(raw))
  }

  async update(jobTitleVersion: JobTitleVersion): Promise<JobTitleVersion> {
    const raw = await this.prisma.jobTitleVersion.update({
      where: { id: jobTitleVersion.id.toString() },
      data: {
        version: jobTitleVersion.version,
        description: jobTitleVersion.description,
        responsibilities: jobTitleVersion.responsibilities?.join(','),
        requirements: jobTitleVersion.requirements?.join(','),
      },
    })

    return this.toDomain(raw)
  }

  async delete(id: string): Promise<void> {
    await this.prisma.jobTitleVersion.delete({
      where: { id },
    })
  }

  async findWithFilters(options: JobTitleVersionFilterOptions): Promise<JobTitleVersionFilterResult<JobTitleVersion>> {
    const { filter, skip = 0, take = PAGINATION_CONSTANTS.DEFAULT_SIZE, orderBy, include, jobTitleId } = options;
    
    const baseWhere = JobTitleVersionFilters.buildWhere(filter);
    const where = {
      ...baseWhere,
      ...(jobTitleId && { jobTitleId }),
    };
    
    const finalTake = Math.min(take, PAGINATION_CONSTANTS.MAX_SIZE);
    
    const [jobTitleVersions, total] = await Promise.all([
      this.prisma.jobTitleVersion.findMany({
        where,
        skip,
        take: finalTake,
        orderBy: orderBy || { createdAt: 'desc' },
        include,
      }),
      this.prisma.jobTitleVersion.count({ where }),
    ]);

    const page = Math.floor(skip / finalTake) + 1;
    const totalPages = Math.ceil(total / finalTake);

    return {
      data: jobTitleVersions.map(jobTitleVersion => this.toDomain(jobTitleVersion)),
      total,
      page,
      size: finalTake,
      totalPages,
      hasNext: page < totalPages,
      hasPrevious: page > 1,
    };
  }

  private toDomain(raw: any): JobTitleVersion {
    return JobTitleVersion.create(
      {
        jobTitleId: raw.jobTitleId,
        version: raw.version,
        description: raw.description,
        responsibilities: raw.responsibilities ? raw.responsibilities.split(',') : [],
        requirements: raw.requirements ? raw.requirements.split(',') : [],
        createdAt: raw.created_at,
        updatedAt: raw.updated_at,
      },
      new UniqueEntityID(raw.id_job_title_version),
    )
  }
} 