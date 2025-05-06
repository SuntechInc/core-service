import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleVersionRepository } from '@/modules/job/domain/repositories/job-title-version.repository'
import { JOB_TITLE_VERSION_REPOSITORY } from '@/modules/job/job.tokens'

type DeleteJobTitleVersionUseCaseResponse = Either<Error, void>

@Injectable()
export class DeleteJobTitleVersionUseCase {
  constructor(
    @Inject(JOB_TITLE_VERSION_REPOSITORY)
    private readonly jobTitleVersionRepository: IJobTitleVersionRepository,
  ) {}

  async execute(id: string): Promise<DeleteJobTitleVersionUseCaseResponse> {
    try {
      await this.jobTitleVersionRepository.delete(id)

      return right(undefined)
    } catch (error) {
      return left(error as Error)
    }
  }
} 