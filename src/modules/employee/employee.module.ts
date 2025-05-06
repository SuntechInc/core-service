import { Module } from '@nestjs/common'
import { EmployeeController } from './infrastructure/controllers/employee.controller'
import { CreateEmployeeUseCase } from './application/use-cases/create-employee/create-employee.use-case'
import { FindEmployeeUseCase } from './application/use-cases/find-employee/find-employee.use-case'
import { FindAllEmployeesUseCase } from './application/use-cases/find-all-employees/find-all-employees.use-case'
import { UpdateEmployeeUseCase } from './application/use-cases/update-employee/update-employee.use-case'
import { DeleteEmployeeUseCase } from './application/use-cases/delete-employee/delete-employee.use-case'
import { UpdateEmployeeStatusUseCase } from './application/use-cases/update-employee-status/update-employee-status.use-case'
import { EmployeePrismaRepository } from './infrastructure/driven/prisma/employee.prisma.repository'
import { IEmployeeRepository } from './application/repositories/employee.repository'

@Module({
  controllers: [EmployeeController],
  providers: [
    // Adapter
    EmployeePrismaRepository,
    { provide: IEmployeeRepository, useExisting: EmployeePrismaRepository },

    // Use cases
    CreateEmployeeUseCase,
    FindEmployeeUseCase,
    FindAllEmployeesUseCase,
    UpdateEmployeeUseCase,
    DeleteEmployeeUseCase,
    UpdateEmployeeStatusUseCase,
  ],
})
export class EmployeeModule {} 