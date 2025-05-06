import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleLevelRepository } from '@/modules/job/domain/repositories/job-title-level.repository'
import { JobTitleLevel } from '@/modules/job/domain/entities/job-title-level.entity'
import { CreateJobTitleLevelDto } from '@/modules/job/application/dtos/create-job-title-level.dto'
import { JOB_TITLE_LEVEL_REPOSITORY } from '@/modules/job/job.tokens'

type UpdateJobTitleLevelUseCaseResponse = Either<
  Error,
  {
    jobTitleLevel: JobTitleLevel
  }
>

@Injectable()
export class UpdateJobTitleLevelUseCase {
  constructor(
    @Inject(JOB_TITLE_LEVEL_REPOSITORY)
    private readonly jobTitleLevelRepository: IJobTitleLevelRepository,
  ) {}

  async execute(
    id: string,
    data: Partial<CreateJobTitleLevelDto>,
  ): Promise<UpdateJobTitleLevelUseCaseResponse> {
    try {
      const jobTitleLevel = await this.jobTitleLevelRepository.findById(id)

      if (!jobTitleLevel) {
        return left(new Error('Job title level not found'))
      }

      if (data.label) {
        const jobTitleLevelExists = await this.jobTitleLevelRepository.findByJobTitleVersionIdAndLabel(
          jobTitleLevel.jobTitleVersionId,
          data.label,
        )

        if (jobTitleLevelExists && jobTitleLevelExists.id.toString() !== id) {
          return left(new Error('Job title level with this label already exists'))
        }

        jobTitleLevel.updateLabel(data.label)
      }

      if (data.rank) {
        jobTitleLevel.updateRank(data.rank)
      }

      if (data.salaryMin) {
        jobTitleLevel.updateSalaryMin(data.salaryMin)
      }

      if (data.salaryMax) {
        jobTitleLevel.updateSalaryMax(data.salaryMax)
      }

      await this.jobTitleLevelRepository.update(jobTitleLevel)

      return right({
        jobTitleLevel,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 