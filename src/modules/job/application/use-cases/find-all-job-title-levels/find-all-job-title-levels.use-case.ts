import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleLevelRepository } from '@/modules/job/domain/repositories/job-title-level.repository'
import { JobTitleLevel } from '@/modules/job/domain/entities/job-title-level.entity'
import { JOB_TITLE_LEVEL_REPOSITORY } from '@/modules/job/job.tokens'

type FindAllJobTitleLevelsUseCaseResponse = Either<
  Error,
  {
    jobTitleLevels: JobTitleLevel[]
  }
>

@Injectable()
export class FindAllJobTitleLevelsUseCase {
  constructor(
    @Inject(JOB_TITLE_LEVEL_REPOSITORY)
    private readonly jobTitleLevelRepository: IJobTitleLevelRepository,
  ) {}

  async execute(
    jobTitleVersionId: string,
  ): Promise<FindAllJobTitleLevelsUseCaseResponse> {
    try {
      const jobTitleLevels = await this.jobTitleLevelRepository.findAllByJobTitleVersionId(
        jobTitleVersionId,
      )

      return right({
        jobTitleLevels,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 