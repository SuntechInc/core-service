import { Injectable } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleVersionRepository } from '@/modules/job/domain/repositories/job-title-version.repository'
import { JobTitleVersion } from '@/modules/job/domain/entities/job-title-version.entity'
import { CreateJobTitleVersionDto } from '@/modules/job/application/dtos/create-job-title-version.dto'

type UpdateJobTitleVersionUseCaseResponse = Either<
  Error,
  {
    jobTitleVersion: JobTitleVersion
  }
>

@Injectable()
export class UpdateJobTitleVersionUseCase {
  constructor(private readonly jobTitleVersionRepository: IJobTitleVersionRepository) {}

  async execute(
    id: string,
    data: Partial<CreateJobTitleVersionDto>,
  ): Promise<UpdateJobTitleVersionUseCaseResponse> {
    try {
      const jobTitleVersion = await this.jobTitleVersionRepository.findById(id)

      if (!jobTitleVersion) {
        return left(new Error('Job title version not found'))
      }

      if (data.description) {
        jobTitleVersion.updateDescription(data.description)
      }

      if (data.responsibilities) {
        jobTitleVersion.updateResponsibilities(data.responsibilities)
      }

      if (data.requirements) {
        jobTitleVersion.updateRequirements(data.requirements)
      }

      await this.jobTitleVersionRepository.update(jobTitleVersion)

      return right({
        jobTitleVersion,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 