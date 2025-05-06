import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleRepository } from '@/modules/job/domain/repositories/job-title.repository'
import { JOB_TITLE_REPOSITORY } from '@/modules/job/job.tokens'

type DeleteJobTitleUseCaseResponse = Either<Error, void>

@Injectable()
export class DeleteJobTitleUseCase {
  constructor(
    @Inject(JOB_TITLE_REPOSITORY)
    private readonly jobTitleRepository: IJobTitleRepository,
  ) {}

  async execute(id: string): Promise<DeleteJobTitleUseCaseResponse> {
    try {
      const jobTitle = await this.jobTitleRepository.findById(id)

      if (!jobTitle) {
        return left(new Error('Job title not found'))
      }

      await this.jobTitleRepository.delete(id)

      return right(undefined)
    } catch (error) {
      return left(error as Error)
    }
  }
} 