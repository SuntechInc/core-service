import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateDepartmentDto } from '@/modules/department/application/dtos/create-department.dto';
import { UpdateDepartmentDto } from '@/modules/department/application/dtos/update-department.dto';
import { CreateDepartmentUseCase } from '@/modules/department/application/use-cases/create-department/create-department.use-case';
import { UpdateDepartmentUseCase } from '@/modules/department/application/use-cases/update-department/update-department.use-case';
import { SoftDeleteDepartmentUseCase } from '@/modules/department/application/use-cases/soft-delete-department/soft-delete-department.use-case';
import { FilterDepartmentsUseCase } from '@/modules/department/application/use-cases/filter-departments/filter-departments.use-case';
import { DepartmentMapper } from '@/modules/department/application/mappers/department.mapper';
import { FilterDepartmentsRequestDto } from '@/modules/department/application/dtos/filter-departments/filter-departments.request.dto';
import { FilterDepartmentsResponseDto } from '@/modules/department/application/dtos/filter-departments/filter-departments.response.dto';
import { FilterPipeFactory } from '@/shared/infrastructure/filters/filter-pipe.factory';

@Controller('departments')
export class DepartmentController {
  constructor(
    private readonly createUC: CreateDepartmentUseCase,
    private readonly updateUC: UpdateDepartmentUseCase,
    private readonly softDeleteUC: SoftDeleteDepartmentUseCase,
    private readonly filterUC: FilterDepartmentsUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateDepartmentDto, @Res() response: Response) {
    const result = await this.createUC.execute(body);
    
    if (result.isFailure) {
      return {
        response: response
          .status((result.errorValue() as any).statusCode || 400)
          .json({ message: result.errorValue().message })
      };
    }

    return {
      response: response
        .status(HttpStatus.CREATED)
        .json(DepartmentMapper.toResponseDto(result.getValue()))
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() body: UpdateDepartmentDto,
    @Res() response: Response
  ) {
    const result = await this.updateUC.execute(id, body);
    
    if (result.isFailure) {
      return {
        response: response
          .status((result.errorValue() as any).statusCode || 400)
          .json({ message: result.errorValue().message })
      };
    }

    return {
      response: response
        .status(HttpStatus.OK)
        .json(DepartmentMapper.toResponseDto(result.getValue()))
    };
  }

  @Get('filter')
  async filterDepartments(@Query(FilterPipeFactory.createDepartmentFilterPipe()) query: FilterDepartmentsRequestDto, @Res() response: Response) {
    console.log('query.filter', query.filter);
    
    const result = await this.filterUC.execute(query);

    const responseDto = new FilterDepartmentsResponseDto(
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

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async softDelete(@Param('id') id: string, @Res() response: Response) {
    const result = await this.softDeleteUC.execute(id);
    
    if (result.isFailure) {
      return {
        response: response
          .status((result.errorValue() as any).statusCode || 400)
          .json({ message: result.errorValue().message })
      };
    }

    return {
      response: response
        .status(HttpStatus.OK)
        .json(DepartmentMapper.toResponseDto(result.getValue()))
    };
  }
} 