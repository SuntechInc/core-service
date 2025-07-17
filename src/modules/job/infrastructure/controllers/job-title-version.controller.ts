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
  Query,
  Res,
} from '@nestjs/common'
import { Response } from 'express'
import { CreateJobTitleVersionDto } from '@/modules/job/application/dtos/create-job-title-version.dto'
import { CreateJobTitleVersionUseCase } from '@/modules/job/application/use-cases/create-job-title-version/create-job-title-version.use-case'
import { UpdateJobTitleVersionUseCase } from '@/modules/job/application/use-cases/update-job-title-version/update-job-title-version.use-case'
import { DeleteJobTitleVersionUseCase } from '@/modules/job/application/use-cases/delete-job-title-version/delete-job-title-version.use-case'
import { FilterJobTitleVersionsUseCase } from '@/modules/job/application/use-cases/filter-job-title-versions/filter-job-title-versions.use-case'
import { FilterJobTitleVersionsRequestDto } from '@/modules/job/application/dtos/filter-job-title-versions/filter-job-title-versions.request.dto'
import { FilterJobTitleVersionsResponseDto } from '@/modules/job/application/dtos/filter-job-title-versions/filter-job-title-versions.response.dto'
import { FilterPipeFactory } from '@/shared/infrastructure/filters/filter-pipe.factory'

@Controller('job-title-versions')
export class JobTitleVersionController {
  constructor(
    private readonly createJobTitleVersionUseCase: CreateJobTitleVersionUseCase,
    private readonly updateJobTitleVersionUseCase: UpdateJobTitleVersionUseCase,
    private readonly deleteJobTitleVersionUseCase: DeleteJobTitleVersionUseCase,
    private readonly filterJobTitleVersionsUseCase: FilterJobTitleVersionsUseCase,
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

  @Get('filter')
  async filterJobTitleVersions(@Query(FilterPipeFactory.createJobTitleVersionFilterPipe()) query: FilterJobTitleVersionsRequestDto, @Res() response: Response) {
    const result = await this.filterJobTitleVersionsUseCase.execute(query);

    const responseDto = new FilterJobTitleVersionsResponseDto(
      result.data,
      result.page,
      result.size,
      result.total,
      query.filter
    );
    
    return response
      .status(HttpStatus.OK)
      .json(responseDto);
  }
} 