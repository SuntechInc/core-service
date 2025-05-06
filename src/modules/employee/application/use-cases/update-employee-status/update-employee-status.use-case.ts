import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IEmployeeRepository } from '@/modules/employee/domain/repositories/employee.repository'
import { Employee } from '@/modules/employee/domain/entities/employee.entity'
import { UpdateEmployeeStatusDto } from '@/modules/employee/application/dtos/update-employee-status.dto'
import { EMPLOYEE_REPOSITORY } from '@/modules/employee/employee.tokens'

type UpdateEmployeeStatusUseCaseResponse = Either<
  Error,
  {
    employee: Employee
  }
>

@Injectable()
export class UpdateEmployeeStatusUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(id: string, data: UpdateEmployeeStatusDto): Promise<UpdateEmployeeStatusUseCaseResponse> {
    try {
      const employee = await this.employeeRepository.findById(id)

      if (!employee) {
        return left(new Error('Employee not found'))
      }

      employee.updateStatus(data.status)

      const updatedEmployee = await this.employeeRepository.update(employee)

      return right({
        employee: updatedEmployee,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 