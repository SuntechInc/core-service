import { Injectable } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleVersionRepository } from '@/modules/job/domain/repositories/job-title-version.repository'
import { JobTitleVersion } from '@/modules/job/domain/entities/job-title-version.entity'
import { CreateJobTitleVersionDto } from '@/modules/job/application/dtos/create-job-title-version.dto'

type CreateJobTitleVersionUseCaseResponse = Either<
  Error,
  {
    jobTitleVersion: JobTitleVersion
  }
>

@Injectable()
export class CreateJobTitleVersionUseCase {
  constructor(private readonly jobTitleVersionRepository: IJobTitleVersionRepository) {}

  async execute(
    data: CreateJobTitleVersionDto,
  ): Promise<CreateJobTitleVersionUseCaseResponse> {
    try {
      const jobTitleVersionExists = await this.jobTitleVersionRepository.findByJobTitleIdAndVersion(
        data.jobTitleId,
        data.version,
      )

      if (jobTitleVersionExists) {
        return left(new Error('Job title version already exists'))
      }

      const jobTitleVersion = JobTitleVersion.create({
        jobTitleId: data.jobTitleId,
        version: data.version,
        description: data.description,
        responsibilities: data.responsibilities,
        requirements: data.requirements,
        createdAt: new Date(),
        updatedAt: new Date(),
      })

      await this.jobTitleVersionRepository.create(jobTitleVersion)

      return right({
        jobTitleVersion,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 