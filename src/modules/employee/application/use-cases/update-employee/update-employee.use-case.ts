import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { Employee } from '@/modules/employee/domain/entities/employee.entity'
import { IEmployeeRepository } from '@/modules/employee/application/repositories/employee.repository'
import { UpdateEmployeeDto } from '@/modules/employee/application/dtos/update-employee.dto'
import { EMPLOYEE_REPOSITORY } from '@/modules/employee/employee.tokens'

type UpdateEmployeeUseCaseResponse = Either<Error, { employee: Employee }>

@Injectable()
export class UpdateEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(
    id: string,
    data: UpdateEmployeeDto,
  ): Promise<UpdateEmployeeUseCaseResponse> {
    try {
      const employee = await this.employeeRepository.findById(id)

      if (!employee) {
        return left(new Error('Employee not found'))
      }

      const updatedEmployee = Employee.create(
        {
          name: data.name ?? employee.name,
          email: data.email ?? employee.email,
          phone: data.phone ?? employee.phone,
          departmentId: data.departmentId ?? employee.departmentId,
          currentJobTitleVersionId:
            data.currentJobTitleVersionId ?? employee.currentJobTitleVersionId,
          employmentType: data.employmentType ?? employee.employmentType,
          status: data.status ?? employee.status,
          hiredAt: data.hiredAt ?? employee.hiredAt,
          leftAt: data.leftAt ?? employee.leftAt,
          branchId: data.branchId ?? employee.branchId,
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