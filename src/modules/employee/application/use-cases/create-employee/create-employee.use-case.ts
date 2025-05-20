import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { Employee } from '@/modules/employee/domain/entities/employee.entity'
import { IEmployeeRepository } from '@/modules/employee/application/repositories/employee.repository'
import { CreateEmployeeDto } from '@/modules/employee/application/dtos/create-employee.dto'
import { EmployeeAlreadyExistsError } from './errors/employee-already-exists.error'
import { EMPLOYEE_REPOSITORY } from '@/modules/employee/employee.tokens'

type CreateEmployeeUseCaseResponse = Either<
  EmployeeAlreadyExistsError | Error,
  {
    employee: Employee
  }
>

@Injectable()
export class CreateEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(data: CreateEmployeeDto): Promise<CreateEmployeeUseCaseResponse> {
    try {
      const employeeExists = await this.employeeRepository.findByEmail(data.email)

      if (employeeExists) {
        return left(new EmployeeAlreadyExistsError(data.email))
      }

      const employee = Employee.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        departmentId: data.departmentId,
        currentJobTitleVersionId: data.currentJobTitleVersionId,
        employmentType: data.employmentType,
        status: data.status,
        hiredAt: data.hiredAt,
        leftAt: data.leftAt,
        branchId: data.branchId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })

      await this.employeeRepository.create(employee)

      return right({
        employee,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 