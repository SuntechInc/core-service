import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IEmployeeRepository } from '@/modules/employee/domain/repositories/employee.repository'
import { Employee } from '@/modules/employee/domain/entities/employee.entity'
import { UpdateEmployeeDto } from '@/modules/employee/application/dtos/update-employee.dto'
import { EMPLOYEE_REPOSITORY } from '@/modules/employee/employee.tokens'

type UpdateEmployeeUseCaseResponse = Either<
  Error,
  {
    employee: Employee
  }
>

@Injectable()
export class UpdateEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(id: string, data: UpdateEmployeeDto): Promise<UpdateEmployeeUseCaseResponse> {
    try {
      const employee = await this.employeeRepository.findById(id)

      if (!employee) {
        return left(new Error('Employee not found'))
      }

      if (data.email) {
        const employeeWithEmail = await this.employeeRepository.findByEmail(data.email)

        if (employeeWithEmail && employeeWithEmail.id.toString() !== id) {
          return left(new Error('Employee with this email already exists'))
        }
      }

      if (data.name) {
        employee.updateName(data.name)
      }

      if (data.email) {
        employee.updateEmail(data.email)
      }

      if (data.phone) {
        employee.updatePhone(data.phone)
      }

      if (data.departmentId) {
        employee.updateDepartment(data.departmentId)
      }

      if (data.currentJobTitleVersionId) {
        employee.updateJobTitleVersion(data.currentJobTitleVersionId)
      }

      if (data.employmentType) {
        employee.updateEmploymentType(data.employmentType)
      }

      if (data.status) {
        employee.updateStatus(data.status)
      }

      if (data.hiredAt) {
        employee.updateHiredAt(data.hiredAt)
      }

      if (data.leftAt) {
        employee.updateLeftAt(data.leftAt)
      }

      const updatedEmployee = await this.employeeRepository.update(employee)

      return right({
        employee: updatedEmployee,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 