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
import { CreateJobTitleLevelDto } from '@/modules/job/application/dtos/create-job-title-level.dto'
import { CreateJobTitleLevelUseCase } from '@/modules/job/application/use-cases/create-job-title-level/create-job-title-level.use-case'
import { FindJobTitleLevelUseCase } from '@/modules/job/application/use-cases/find-job-title-level/find-job-title-level.use-case'
import { FindAllJobTitleLevelsUseCase } from '@/modules/job/application/use-cases/find-all-job-title-levels/find-all-job-title-levels.use-case'
import { UpdateJobTitleLevelUseCase } from '@/modules/job/application/use-cases/update-job-title-level/update-job-title-level.use-case'
import { DeleteJobTitleLevelUseCase } from '@/modules/job/application/use-cases/delete-job-title-level/delete-job-title-level.use-case'

@Controller('job-title-levels')
export class JobTitleLevelController {
  constructor(
    private readonly createJobTitleLevelUseCase: CreateJobTitleLevelUseCase,
    private readonly findJobTitleLevelUseCase: FindJobTitleLevelUseCase,
    private readonly findAllJobTitleLevelsUseCase: FindAllJobTitleLevelsUseCase,
    private readonly updateJobTitleLevelUseCase: UpdateJobTitleLevelUseCase,
    private readonly deleteJobTitleLevelUseCase: DeleteJobTitleLevelUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: CreateJobTitleLevelDto) {
    const result = await this.createJobTitleLevelUseCase.execute(data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value.jobTitleLevel
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const result = await this.findJobTitleLevelUseCase.execute(id)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value.jobTitleLevel
  }

  @Get('job-title-version/:jobTitleVersionId')
  async findAllByJobTitleVersionId(
    @Param('jobTitleVersionId') jobTitleVersionId: string,
  ) {
    const result = await this.findAllJobTitleLevelsUseCase.execute(
      jobTitleVersionId,
    )

    if (result.isLeft()) {
      throw result.value
    }

    return result.value.jobTitleLevels
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<CreateJobTitleLevelDto>,
  ) {
    const result = await this.updateJobTitleLevelUseCase.execute(id, data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value.jobTitleLevel
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    const result = await this.deleteJobTitleLevelUseCase.execute(id)

    if (result.isLeft()) {
      throw result.value
    }
  }
} 