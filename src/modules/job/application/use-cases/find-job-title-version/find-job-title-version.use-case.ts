import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleVersionRepository } from '@/modules/job/domain/repositories/job-title-version.repository'
import { JobTitleVersion } from '@/modules/job/domain/entities/job-title-version.entity'
import { JOB_TITLE_VERSION_REPOSITORY } from '@/modules/job/job.tokens'

type FindJobTitleVersionUseCaseResponse = Either<
  Error,
  {
    jobTitleVersion: JobTitleVersion
  }
>

@Injectable()
export class FindJobTitleVersionUseCase {
  constructor(
    @Inject(JOB_TITLE_VERSION_REPOSITORY)
    private readonly jobTitleVersionRepository: IJobTitleVersionRepository,
  ) {}

  async execute(id: string): Promise<FindJobTitleVersionUseCaseResponse> {
    try {
      const jobTitleVersion = await this.jobTitleVersionRepository.findById(id)

      if (!jobTitleVersion) {
        return left(new Error('Job title version not found'))
      }

      return right({
        jobTitleVersion,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 