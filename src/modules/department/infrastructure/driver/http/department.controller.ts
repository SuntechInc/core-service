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
import { FindDepartmentByNameUseCase } from '@/modules/department/application/use-cases/find-department-by-name/find-department-by-name.use-case';
import { FindAllDepartmentsUseCase } from '@/modules/department/application/use-cases/find-all-departments/find-all-departments.use-case';
import { SoftDeleteDepartmentUseCase } from '@/modules/department/application/use-cases/soft-delete-department/soft-delete-department.use-case';
import { DepartmentMapper } from '@/modules/department/application/mappers/department.mapper';

@Controller('departments')
export class DepartmentController {
  constructor(
    private readonly createUC: CreateDepartmentUseCase,
    private readonly findByNameUC: FindDepartmentByNameUseCase,
    private readonly findAllUC: FindAllDepartmentsUseCase,
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

  @Get('search')
  @HttpCode(HttpStatus.OK)
  async findByName(@Query('name') name: string, @Res() response: Response) {
    const result = await this.findByNameUC.execute(name);
    
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
        .json(result.getValue().map(department => DepartmentMapper.toResponseDto(department)))
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Res() response: Response) {
    const result = await this.findAllUC.execute();
    
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
        .json(result.getValue().map(department => DepartmentMapper.toResponseDto(department)))
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