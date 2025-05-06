import { Injectable } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { Employee } from '@/modules/employee/domain/entities/employee.entity'
import { IEmployeeRepository } from '@/modules/employee/application/repositories/employee.repository'
import { CreateEmployeeDto } from '@/modules/employee/application/dtos/create-employee.dto'
import { EmployeeAlreadyExistsError } from './errors/employee-already-exists.error'

@Injectable()
export class CreateEmployeeUseCase {
  constructor(private readonly employeeRepository: IEmployeeRepository) {}

  async execute(data: CreateEmployeeDto): Promise<Either<Error, Employee>> {
    try {
      const employee = Employee.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        departmentId: data.departmentId,
        currentJobTitleVersionId: data.currentJobTitleVersionId,
        employmentType: data.employmentType,
        status: data.status,
        hiredAt: data.hiredAt,
        branchId: data.branchId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })

      const createdEmployee = await this.employeeRepository.create(employee)

      return right(createdEmployee)
    } catch (error) {
      if (error instanceof Error) {
        return left(error)
      }
      return left(new Error('Unexpected error'))
    }
  }
} 