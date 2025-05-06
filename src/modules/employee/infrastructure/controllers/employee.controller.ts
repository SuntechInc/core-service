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
} from '@nestjs/common'
import { CreateEmployeeDto } from '@/modules/employee/application/dtos/create-employee.dto'
import { UpdateEmployeeDto } from '@/modules/employee/application/dtos/update-employee.dto'
import { UpdateEmployeeStatusDto } from '@/modules/employee/application/dtos/update-employee-status.dto'
import { CreateEmployeeUseCase } from '@/modules/employee/application/use-cases/create-employee/create-employee.use-case'
import { FindEmployeeUseCase } from '@/modules/employee/application/use-cases/find-employee/find-employee.use-case'
import { FindAllEmployeesUseCase } from '@/modules/employee/application/use-cases/find-all-employees/find-all-employees.use-case'
import { UpdateEmployeeUseCase } from '@/modules/employee/application/use-cases/update-employee/update-employee.use-case'
import { DeleteEmployeeUseCase } from '@/modules/employee/application/use-cases/delete-employee/delete-employee.use-case'
import { UpdateEmployeeStatusUseCase } from '@/modules/employee/application/use-cases/update-employee-status/update-employee-status.use-case'

@Controller('employees')
export class EmployeeController {
  constructor(
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,
    private readonly findEmployeeUseCase: FindEmployeeUseCase,
    private readonly findAllEmployeesUseCase: FindAllEmployeesUseCase,
    private readonly updateEmployeeUseCase: UpdateEmployeeUseCase,
    private readonly deleteEmployeeUseCase: DeleteEmployeeUseCase,
    private readonly updateEmployeeStatusUseCase: UpdateEmployeeStatusUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateEmployeeDto) {
    const result = await this.createEmployeeUseCase.execute(data)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.findEmployeeUseCase.execute(id)

    if (result.isLeft()) {
      throw result.value
    }

    return result.value
  }

  @Get()
  async findAll() {
    const result = await this.findAllEmployeesUseCase.execute()

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
} 