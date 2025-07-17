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
import { CreateJobTitleLevelDto } from '@/modules/job/application/dtos/create-job-title-level.dto'
import { CreateJobTitleLevelUseCase } from '@/modules/job/application/use-cases/create-job-title-level/create-job-title-level.use-case'


import { UpdateJobTitleLevelUseCase } from '@/modules/job/application/use-cases/update-job-title-level/update-job-title-level.use-case'
import { DeleteJobTitleLevelUseCase } from '@/modules/job/application/use-cases/delete-job-title-level/delete-job-title-level.use-case'
import { FilterJobTitleLevelsUseCase } from '@/modules/job/application/use-cases/filter-job-title-levels/filter-job-title-levels.use-case'
import { FilterJobTitleLevelsRequestDto } from '@/modules/job/application/dtos/filter-job-title-levels/filter-job-title-levels.request.dto'
import { FilterJobTitleLevelsResponseDto } from '@/modules/job/application/dtos/filter-job-title-levels/filter-job-title-levels.response.dto'
import { FilterPipeFactory } from '@/shared/infrastructure/filters/filter-pipe.factory'

@Controller('job-title-levels')
export class JobTitleLevelController {
  constructor(
    private readonly createJobTitleLevelUseCase: CreateJobTitleLevelUseCase,
    private readonly updateJobTitleLevelUseCase: UpdateJobTitleLevelUseCase,
    private readonly deleteJobTitleLevelUseCase: DeleteJobTitleLevelUseCase,
    private readonly filterJobTitleLevelsUseCase: FilterJobTitleLevelsUseCase,
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

  @Get('filter')
  async filterJobTitleLevels(@Query(FilterPipeFactory.createJobTitleLevelFilterPipe()) query: FilterJobTitleLevelsRequestDto, @Res() response: Response) {
    console.log('query.filter', query.filter);
    
    const result = await this.filterJobTitleLevelsUseCase.execute(query);

    const responseDto = new FilterJobTitleLevelsResponseDto(
      result.data,
      result.page,
      result.size,
      result.total,
      query.filter
    );
    
    return {
      response: response
        .status(HttpStatus.OK)
        .json(responseDto)
    };
  }
} 