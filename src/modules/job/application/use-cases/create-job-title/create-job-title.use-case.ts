import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IJobTitleRepository } from '@/modules/job/domain/repositories/job-title.repository'
import { JobTitle } from '@/modules/job/domain/entities/job-title.entity'
import { CreateJobTitleDto } from '@/modules/job/application/dtos/create-job-title.dto'
import { JOB_TITLE_REPOSITORY } from '@/modules/job/job.module'

type CreateJobTitleUseCaseResponse = Either<
  Error,
  {
    jobTitle: JobTitle
  }
>

@Injectable()
export class CreateJobTitleUseCase {
  constructor(
    @Inject(JOB_TITLE_REPOSITORY)
    private readonly jobTitleRepository: IJobTitleRepository,
  ) {}

  async execute(data: CreateJobTitleDto): Promise<CreateJobTitleUseCaseResponse> {
    try {
      const jobTitleExists = await this.jobTitleRepository.findByName(data.name)

      if (jobTitleExists) {
        return left(new Error('Job title with this name already exists'))
      }

      const jobTitle = JobTitle.create({
        name: data.name,
        description: data.description,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
      })

      await this.jobTitleRepository.create(jobTitle)

      return right({
        jobTitle,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 