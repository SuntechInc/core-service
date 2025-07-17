import { Injectable, Inject } from '@nestjs/common'
import { IJobTitleRepository } from '@/modules/job/domain/repositories/job-title.repository'
import { JobTitle } from '@/modules/job/domain/entities/job-title.entity'
import { JobTitleStatus } from '@/modules/job/domain/enums/job-title-status.enum'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'
import { PrismaService } from '@/shared/infrastructure/database/prisma.service'
import { JobTitleFilters, JobTitleFilterOptions, JobTitleFilterResult } from '@/modules/job/application/filters/job-title-filters'
import { PAGINATION_CONSTANTS } from '@/modules/job/application/constants/pagination.constants'

@Injectable()
export class JobTitlePrismaRepository implements IJobTitleRepository {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async create(jobTitle: JobTitle): Promise<JobTitle> {
    const raw = await this.prisma.jobTitle.create({
      data: {
        name: jobTitle.name,
        companyId: jobTitle.companyId,
        code: jobTitle.code,
        branchId: jobTitle.branchId,
      },
    })

    return this.toDomain(raw)
  }

  async findById(id: string): Promise<JobTitle | null> {
    const result = await this.findWithFilters({
      filter: { id: { $eq: id } },
      take: 1,
    })

    return result.data.length > 0? result.data[0] : null
  }

  async findByName(name: string): Promise<JobTitle | null> {
    const result = await this.findWithFilters({
      filter: { name: { $eq: name } },
      take: 1,
    })

    return result.data.length > 0? result.data[0] : null
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

  async findWithFilters(options: JobTitleFilterOptions): Promise<JobTitleFilterResult<JobTitle>> {
    const { filter, skip = 0, take = PAGINATION_CONSTANTS.DEFAULT_SIZE, orderBy, include, companyId, branchId } = options;
    
    const baseWhere = JobTitleFilters.buildWhere(filter);
    const where = {
      ...baseWhere,
      ...(companyId && { companyId }),
      ...(branchId && { branchId }),
    };
    
    const finalTake = Math.min(take, PAGINATION_CONSTANTS.MAX_SIZE);
    
    const [jobTitles, total] = await Promise.all([
      this.prisma.jobTitle.findMany({
        where,
        skip,
        take: finalTake,
        orderBy: orderBy || { createdAt: 'desc' },
        include,
      }),
      this.prisma.jobTitle.count({ where }),
    ]);

    const page = Math.floor(skip / finalTake) + 1;
    const totalPages = Math.ceil(total / finalTake);

    return {
      data: jobTitles.map(jobTitle => this.toDomain(jobTitle)),
      total,
      page,
      size: finalTake,
      totalPages,
      hasNext: page < totalPages,
      hasPrevious: page > 1,
    };
  }

  private toDomain(raw: any): JobTitle {
    return JobTitle.create(
      {
        name: raw.name,
        companyId: raw.companyId,
        code: raw.code,
        branchId: raw.branchId,
        createdAt: raw.created_at,
        updatedAt: raw.created_at, // JobTitle não tem updatedAt no schema
        isActive: true,
      },
      new UniqueEntityID(raw.id_job_title),
    )
  }
} 