import { Injectable } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleVersionRepository } from '@/modules/job/domain/repositories/job-title-version.repository'
import { JobTitleVersion } from '@/modules/job/domain/entities/job-title-version.entity'

type DeleteJobTitleVersionUseCaseResponse = Either<
  Error,
  {
    jobTitleVersion: JobTitleVersion
  }
>

@Injectable()
export class DeleteJobTitleVersionUseCase {
  constructor(private readonly jobTitleVersionRepository: IJobTitleVersionRepository) {}

  async execute(id: string): Promise<DeleteJobTitleVersionUseCaseResponse> {
    try {
      const jobTitleVersion = await this.jobTitleVersionRepository.findById(id)

      if (!jobTitleVersion) {
        return left(new Error('Job title version not found'))
      }

      await this.jobTitleVersionRepository.delete(id)

      return right({
        jobTitleVersion,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 