import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleLevelRepository } from '@/modules/job/domain/repositories/job-title-level.repository'
import { JobTitleLevel } from '@/modules/job/domain/entities/job-title-level.entity'
import { JOB_TITLE_LEVEL_REPOSITORY } from '@/modules/job/job.tokens'

type FindJobTitleLevelUseCaseResponse = Either<
  Error,
  {
    jobTitleLevel: JobTitleLevel
  }
>

@Injectable()
export class FindJobTitleLevelUseCase {
  constructor(
    @Inject(JOB_TITLE_LEVEL_REPOSITORY)
    private readonly jobTitleLevelRepository: IJobTitleLevelRepository,
  ) {}

  async execute(id: string): Promise<FindJobTitleLevelUseCaseResponse> {
    try {
      const jobTitleLevel = await this.jobTitleLevelRepository.findById(id)

      if (!jobTitleLevel) {
        return left(new Error('Job title level not found'))
      }

      return right({
        jobTitleLevel,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 