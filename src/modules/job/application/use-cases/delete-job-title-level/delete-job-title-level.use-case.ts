import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleLevelRepository } from '@/modules/job/domain/repositories/job-title-level.repository'
import { JOB_TITLE_LEVEL_REPOSITORY } from '@/modules/job/job.tokens'

type DeleteJobTitleLevelUseCaseResponse = Either<Error, void>

@Injectable()
export class DeleteJobTitleLevelUseCase {
  constructor(
    @Inject(JOB_TITLE_LEVEL_REPOSITORY)
    private readonly jobTitleLevelRepository: IJobTitleLevelRepository,
  ) {}

  async execute(id: string): Promise<DeleteJobTitleLevelUseCaseResponse> {
    try {
      await this.jobTitleLevelRepository.delete(id)
      return right(undefined)
    } catch (error) {
      return left(error as Error)
    }
  }
} 