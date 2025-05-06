import { Injectable } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleLevelRepository } from '@/modules/job/domain/repositories/job-title-level.repository'
import { JobTitleLevel } from '@/modules/job/domain/entities/job-title-level.entity'

type FindJobTitleLevelUseCaseResponse = Either<
  Error,
  {
    jobTitleLevel: JobTitleLevel
  }
>

@Injectable()
export class FindJobTitleLevelUseCase {
  constructor(private readonly jobTitleLevelRepository: IJobTitleLevelRepository) {}

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