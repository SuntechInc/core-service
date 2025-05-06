import { Injectable } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleLevelRepository } from '@/modules/job/domain/repositories/job-title-level.repository'
import { JobTitleLevel } from '@/modules/job/domain/entities/job-title-level.entity'
import { CreateJobTitleLevelDto } from '@/modules/job/application/dtos/create-job-title-level.dto'

type CreateJobTitleLevelUseCaseResponse = Either<
  Error,
  {
    jobTitleLevel: JobTitleLevel
  }
>

@Injectable()
export class CreateJobTitleLevelUseCase {
  constructor(private readonly jobTitleLevelRepository: IJobTitleLevelRepository) {}

  async execute(
    data: CreateJobTitleLevelDto,
  ): Promise<CreateJobTitleLevelUseCaseResponse> {
    try {
      const jobTitleLevelExists = await this.jobTitleLevelRepository.findByJobTitleVersionIdAndLabel(
        data.jobTitleVersionId,
        data.label,
      )

      if (jobTitleLevelExists) {
        return left(new Error('Job title level already exists'))
      }

      const jobTitleLevel = JobTitleLevel.create({
        jobTitleVersionId: data.jobTitleVersionId,
        label: data.label,
        rank: data.rank,
        salaryMin: data.salaryMin,
        salaryMax: data.salaryMax,
        createdAt: new Date(),
        updatedAt: new Date(),
      })

      await this.jobTitleLevelRepository.create(jobTitleLevel)

      return right({
        jobTitleLevel,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 