import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { Employee } from '@/modules/employee/domain/entities/employee.entity'
import { IEmployeeRepository } from '@/modules/employee/application/repositories/employee.repository'
import { UpdateEmployeeStatusDto } from '@/modules/employee/application/dtos/update-employee-status.dto'
import { EMPLOYEE_REPOSITORY } from '@/modules/employee/employee.tokens'

type UpdateEmployeeStatusUseCaseResponse = Either<Error, { employee: Employee }>

@Injectable()
export class UpdateEmployeeStatusUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(
    id: string,
    data: UpdateEmployeeStatusDto,
  ): Promise<UpdateEmployeeStatusUseCaseResponse> {
    try {
      const employee = await this.employeeRepository.findById(id)

      if (!employee) {
        return left(new Error('Employee not found'))
      }

      const updatedEmployee = Employee.create(
        {
          name: employee.name,
          email: employee.email,
          phone: employee.phone,
          departmentId: employee.departmentId,
          currentJobTitleVersionId: employee.currentJobTitleVersionId,
          employmentType: employee.employmentType,
          status: data.status,
          hiredAt: employee.hiredAt,
          leftAt: employee.leftAt,
          branchId: employee.branchId,
          createdAt: employee.createdAt,
          updatedAt: new Date(),
        },
        employee.id,
      )

      await this.employeeRepository.update(id, updatedEmployee)

      return right({
        employee: updatedEmployee,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 