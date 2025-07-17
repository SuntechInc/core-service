import {
  Controller,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  Query,
  Res,
  Get,
} from '@nestjs/common'
import { Response } from 'express'
import { CreateJobTitleDto } from '@/modules/job/application/dtos/create-job-title.dto'
import { CreateJobTitleUseCase } from '@/modules/job/application/use-cases/create-job-title/create-job-title.use-case'
import { UpdateJobTitleUseCase } from '@/modules/job/application/use-cases/update-job-title/update-job-title.use-case'
import { DeleteJobTitleUseCase } from '@/modules/job/application/use-cases/delete-job-title/delete-job-title.use-case'
import { FilterJobTitlesUseCase } from '@/modules/job/application/use-cases/filter-job-titles/filter-job-titles.use-case'
import { FilterJobTitlesRequestDto } from '@/modules/job/application/dtos/filter-job-titles/filter-job-titles.request.dto'
import { FilterJobTitlesResponseDto } from '@/modules/job/application/dtos/filter-job-titles/filter-job-titles.response.dto'
import { FilterPipeFactory } from '@/shared/infrastructure/filters/filter-pipe.factory'

@Controller('job-titles')
export class JobTitleController {
  constructor(
    private readonly createJobTitleUseCase: CreateJobTitleUseCase,
    private readonly updateJobTitleUseCase: UpdateJobTitleUseCase,
    private readonly deleteJobTitleUseCase: DeleteJobTitleUseCase,
    private readonly filterJobTitlesUseCase: FilterJobTitlesUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: CreateJobTitleDto) {
    const result = await this.createJobTitleUseCase.execute(data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value.jobTitle
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<CreateJobTitleDto>,
  ) {
    const result = await this.updateJobTitleUseCase.execute(id, data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value.jobTitle
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    const result = await this.deleteJobTitleUseCase.execute(id)

    if (result.isLeft()) {
      throw result.value
    }
  }

  @Get('filter')
  async filterJobTitles(@Query(FilterPipeFactory.createJobTitleFilterPipe()) query: FilterJobTitlesRequestDto, @Res() response: Response) {
    console.log('query.filter', query.filter);
    
    const result = await this.filterJobTitlesUseCase.execute(query);

    const responseDto = new FilterJobTitlesResponseDto(
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