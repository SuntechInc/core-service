import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleRepository } from '@/modules/job/domain/repositories/job-title.repository'
import { JobTitle } from '@/modules/job/domain/entities/job-title.entity'
import { JOB_TITLE_REPOSITORY } from '@/modules/job/job.tokens'

type FindAllJobTitlesUseCaseResponse = Either<
  Error,
  {
    jobTitles: JobTitle[]
  }
>

@Injectable()
export class FindAllJobTitlesUseCase {
  constructor(
    @Inject(JOB_TITLE_REPOSITORY)
    private readonly jobTitleRepository: IJobTitleRepository,
  ) {}

  async execute(): Promise<FindAllJobTitlesUseCaseResponse> {
    try {
      const result = await this.jobTitleRepository.findWithFilters({
        take: 10000, // Número grande para pegar todos
      })

      return right({
        jobTitles: result.data,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 