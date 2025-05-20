import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { CreateJobTitleVersionDto } from '@/modules/job/application/dtos/create-job-title-version.dto'
import { CreateJobTitleVersionUseCase } from '@/modules/job/application/use-cases/create-job-title-version/create-job-title-version.use-case'
import { FindJobTitleVersionUseCase } from '@/modules/job/application/use-cases/find-job-title-version/find-job-title-version.use-case'
import { FindAllJobTitleVersionsUseCase } from '@/modules/job/application/use-cases/find-all-job-title-versions/find-all-job-title-versions.use-case'
import { UpdateJobTitleVersionUseCase } from '@/modules/job/application/use-cases/update-job-title-version/update-job-title-version.use-case'
import { DeleteJobTitleVersionUseCase } from '@/modules/job/application/use-cases/delete-job-title-version/delete-job-title-version.use-case'

@Controller('job-title-versions')
export class JobTitleVersionController {
  constructor(
    private readonly createJobTitleVersionUseCase: CreateJobTitleVersionUseCase,
    private readonly findJobTitleVersionUseCase: FindJobTitleVersionUseCase,
    private readonly findAllJobTitleVersionsUseCase: FindAllJobTitleVersionsUseCase,
    private readonly updateJobTitleVersionUseCase: UpdateJobTitleVersionUseCase,
    private readonly deleteJobTitleVersionUseCase: DeleteJobTitleVersionUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: CreateJobTitleVersionDto) {
    const result = await this.createJobTitleVersionUseCase.execute(data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value.jobTitleVersion
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const result = await this.findJobTitleVersionUseCase.execute(id)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value.jobTitleVersion
  }

  @Get('job-title/:jobTitleId')
  async findAllByJobTitleId(@Param('jobTitleId') jobTitleId: string) {
    const result = await this.findAllJobTitleVersionsUseCase.execute(jobTitleId)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value.jobTitleVersions
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<CreateJobTitleVersionDto>,
  ) {
    const result = await this.updateJobTitleVersionUseCase.execute(id, data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value.jobTitleVersion
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    const result = await this.deleteJobTitleVersionUseCase.execute(id)

    if (result.isLeft()) {
      throw result.value
    }
  }
} 