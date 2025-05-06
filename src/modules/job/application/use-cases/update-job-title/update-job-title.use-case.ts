import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleRepository } from '@/modules/job/domain/repositories/job-title.repository'
import { JobTitle } from '@/modules/job/domain/entities/job-title.entity'
import { CreateJobTitleDto } from '@/modules/job/application/dtos/create-job-title.dto'
import { JOB_TITLE_REPOSITORY } from '@/modules/job/job.tokens'

type UpdateJobTitleUseCaseResponse = Either<
  Error,
  {
    jobTitle: JobTitle
  }
>

@Injectable()
export class UpdateJobTitleUseCase {
  constructor(
    @Inject(JOB_TITLE_REPOSITORY)
    private readonly jobTitleRepository: IJobTitleRepository,
  ) {}

  async execute(
    id: string,
    data: Partial<CreateJobTitleDto>,
  ): Promise<UpdateJobTitleUseCaseResponse> {
    try {
      const jobTitle = await this.jobTitleRepository.findById(id)

      if (!jobTitle) {
        return left(new Error('Job title not found'))
      }

      if (data.name) {
        const jobTitleExists = await this.jobTitleRepository.findByName(data.name)

        if (jobTitleExists && jobTitleExists.id.toString() !== id) {
          return left(new Error('Job title with this name already exists'))
        }

        jobTitle.updateName(data.name)
      }

      if (data.description) {
        jobTitle.updateDescription(data.description)
      }

      await this.jobTitleRepository.update(jobTitle)

      return right({
        jobTitle,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 