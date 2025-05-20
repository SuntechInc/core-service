import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleRepository } from '@/modules/job/domain/repositories/job-title.repository'
import { JobTitle } from '@/modules/job/domain/entities/job-title.entity'
import { JOB_TITLE_REPOSITORY } from '@/modules/job/job.tokens'

type FindJobTitleUseCaseResponse = Either<
  Error,
  {
    jobTitle: JobTitle
  }
>

@Injectable()
export class FindJobTitleUseCase {
  constructor(
    @Inject(JOB_TITLE_REPOSITORY)
    private readonly jobTitleRepository: IJobTitleRepository,
  ) {}

  async execute(id: string): Promise<FindJobTitleUseCaseResponse> {
    try {
      const jobTitle = await this.jobTitleRepository.findById(id)

      if (!jobTitle) {
        return left(new Error('Job title not found'))
      }

      return right({
        jobTitle,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 