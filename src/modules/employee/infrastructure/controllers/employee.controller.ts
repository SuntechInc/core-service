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
  Patch,
  Query,
  Res,
} from '@nestjs/common'
import { Response } from 'express'
import { CreateEmployeeDto } from '@/modules/employee/application/dtos/create-employee.dto'
import { UpdateEmployeeDto } from '@/modules/employee/application/dtos/update-employee.dto'
import { UpdateEmployeeStatusDto } from '@/modules/employee/application/dtos/update-employee-status.dto'
import { CreateEmployeeUseCase } from '@/modules/employee/application/use-cases/create-employee/create-employee.use-case'
import { UpdateEmployeeUseCase } from '@/modules/employee/application/use-cases/update-employee/update-employee.use-case'
import { DeleteEmployeeUseCase } from '@/modules/employee/application/use-cases/delete-employee/delete-employee.use-case'
import { UpdateEmployeeStatusUseCase } from '@/modules/employee/application/use-cases/update-employee-status/update-employee-status.use-case'
import { FilterEmployeesUseCase } from '@/modules/employee/application/use-cases/filter-employees/filter-employees.use-case'
import { FilterEmployeesRequestDto } from '@/modules/employee/application/dtos/filter-employees/filter-employees.request.dto'
import { FilterEmployeesResponseDto } from '@/modules/employee/application/dtos/filter-employees/filter-employees.response.dto'
import { FilterPipeFactory } from '@/shared/infrastructure/filters/filter-pipe.factory'

@Controller('employees')
export class EmployeeController {
  constructor(
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,
    private readonly updateEmployeeUseCase: UpdateEmployeeUseCase,
    private readonly deleteEmployeeUseCase: DeleteEmployeeUseCase,
    private readonly updateEmployeeStatusUseCase: UpdateEmployeeStatusUseCase,
    private readonly filterEmployeesUseCase: FilterEmployeesUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateEmployeeDto) {
    const result = await this.createEmployeeUseCase.execute(data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateEmployeeDto) {
    const result = await this.updateEmployeeUseCase.execute(id, data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body() data: UpdateEmployeeStatusDto,
  ) {
    const result = await this.updateEmployeeStatusUseCase.execute(id, data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    const result = await this.deleteEmployeeUseCase.execute(id)

    if (result.isLeft()) {
      throw result.value
    }
  }

  @Get('filter')
  async filterEmployees(@Query(FilterPipeFactory.createEmployeeFilterPipe()) query: FilterEmployeesRequestDto, @Res() response: Response) {
    const result = await this.filterEmployeesUseCase.execute(query);

    const responseDto = new FilterEmployeesResponseDto(
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