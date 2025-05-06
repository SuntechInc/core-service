import { Injectable } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleRepository } from '@/modules/job/domain/repositories/job-title.repository'
import { JobTitle } from '@/modules/job/domain/entities/job-title.entity'

type SoftDeleteJobTitleUseCaseResponse = Either<
  Error,
  {
    jobTitle: JobTitle
  }
>

@Injectable()
export class SoftDeleteJobTitleUseCase {
  constructor(private readonly jobTitleRepository: IJobTitleRepository) {}

  async execute(id: string): Promise<SoftDeleteJobTitleUseCaseResponse> {
    try {
      const jobTitle = await this.jobTitleRepository.findById(id)

      if (!jobTitle) {
        return left(new Error('Job title not found'))
      }

      jobTitle.deactivate()
      await this.jobTitleRepository.update(jobTitle)

      return right({
        jobTitle,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 