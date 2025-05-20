import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleVersionRepository } from '@/modules/job/domain/repositories/job-title-version.repository'
import { JobTitleVersion } from '@/modules/job/domain/entities/job-title-version.entity'
import { JOB_TITLE_VERSION_REPOSITORY } from '@/modules/job/job.tokens'

type FindAllJobTitleVersionsUseCaseResponse = Either<
  Error,
  {
    jobTitleVersions: JobTitleVersion[]
  }
>

@Injectable()
export class FindAllJobTitleVersionsUseCase {
  constructor(
    @Inject(JOB_TITLE_VERSION_REPOSITORY)
    private readonly jobTitleVersionRepository: IJobTitleVersionRepository,
  ) {}

  async execute(jobTitleId: string): Promise<FindAllJobTitleVersionsUseCaseResponse> {
    try {
      const jobTitleVersions = await this.jobTitleVersionRepository.findAllByJobTitleId(jobTitleId)

      return right({
        jobTitleVersions,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 