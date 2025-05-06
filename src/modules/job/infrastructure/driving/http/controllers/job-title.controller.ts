import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common'
import { CreateJobTitleDto } from '@/modules/job/application/dtos/create-job-title.dto'
import { CreateJobTitleUseCase } from '@/modules/job/application/use-cases/create-job-title/create-job-title.use-case'
import { FindJobTitleUseCase } from '@/modules/job/application/use-cases/find-job-title/find-job-title.use-case'
import { FindAllJobTitlesUseCase } from '@/modules/job/application/use-cases/find-all-job-titles/find-all-job-titles.use-case'
import { UpdateJobTitleUseCase } from '@/modules/job/application/use-cases/update-job-title/update-job-title.use-case'
import { DeleteJobTitleUseCase } from '@/modules/job/application/use-cases/delete-job-title/delete-job-title.use-case'
import { SoftDeleteJobTitleUseCase } from '@/modules/job/application/use-cases/soft-delete-job-title/soft-delete-job-title.use-case'

@Controller('job-titles')
export class JobTitleController {
  constructor(
    private readonly createJobTitleUseCase: CreateJobTitleUseCase,
    private readonly findJobTitleUseCase: FindJobTitleUseCase,
    private readonly findAllJobTitlesUseCase: FindAllJobTitlesUseCase,
    private readonly updateJobTitleUseCase: UpdateJobTitleUseCase,
    private readonly deleteJobTitleUseCase: DeleteJobTitleUseCase,
    private readonly softDeleteJobTitleUseCase: SoftDeleteJobTitleUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateJobTitleDto) {
    const result = await this.createJobTitleUseCase.execute(data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const result = await this.findJobTitleUseCase.execute(id)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }

  @Get()
  async findAll() {
    const result = await this.findAllJobTitlesUseCase.execute()

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<CreateJobTitleDto>) {
    const result = await this.updateJobTitleUseCase.execute(id, data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const result = await this.deleteJobTitleUseCase.execute(id)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }

  @Delete(':id/soft')
  async softDelete(@Param('id') id: string) {
    const result = await this.softDeleteJobTitleUseCase.execute(id)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }
} 