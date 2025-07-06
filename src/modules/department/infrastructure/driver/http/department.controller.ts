import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateDepartmentDto } from '@/modules/department/application/dtos/create-department.dto';
import { CreateDepartmentUseCase } from '@/modules/department/application/use-cases/create-department/create-department.use-case';
import { ListDepartmentsUseCase } from '@/modules/department/application/use-cases/list-departments/list-departments.use-case';
import { FindDepartmentByNameUseCase } from '@/modules/department/application/use-cases/find-department-by-name/find-department-by-name.use-case';
import { SoftDeleteDepartmentUseCase } from '@/modules/department/application/use-cases/soft-delete-department/soft-delete-department.use-case';
import { DepartmentMapper } from '@/modules/department/application/mappers/department.mapper';
import { ListDepartmentsRequestDto } from '@/modules/department/application/dtos/list-departments/list-departments.request.dto';
import { ListDepartmentsResponseDto } from '@/modules/department/application/dtos/list-departments/list-departments.response.dto';

@Controller('departments')
export class DepartmentController {
  constructor(
    private readonly createUC: CreateDepartmentUseCase,
    private readonly findByNameUC: FindDepartmentByNameUseCase,
    private readonly findAllUC: ListDepartmentsUseCase,
    private readonly softDeleteUC: SoftDeleteDepartmentUseCase,
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

  @Get('search/name/:name')
  @HttpCode(HttpStatus.OK)
  async findByName(@Param('name') name: string, @Res() response: Response) {
    const departments = await this.findByNameUC.execute(name);
    
    return {
      response: response
        .status(HttpStatus.OK)
        .json(departments.map(department => DepartmentMapper.toResponseDto(department)))
    };
  }

  @Get()
  async findAll(@Query() query: ListDepartmentsRequestDto, @Res() response: Response) {
    const result = await this.findAllUC.executePaginated(query);
    
    const responseDto = new ListDepartmentsResponseDto(
      result.data,
      result.page,
      result.size,
      result.total
    );
    
    return {
      response: response
        .status(HttpStatus.OK)
        .json(responseDto)
    };
  }

  // Endpoint alternativo para compatibilidade (mantido por enquanto)
  @Get('all')
  async findAllWithoutPagination(@Res() response: Response) {
    const departments = await this.findAllUC.execute();
    
    return {
      response: response
        .status(HttpStatus.OK)
        .json(departments.map(department => DepartmentMapper.toResponseDto(department)))
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