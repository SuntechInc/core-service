import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { Employee } from '@/modules/employee/domain/entities/employee.entity'
import { IEmployeeRepository } from '@/modules/employee/application/repositories/employee.repository'
import { EMPLOYEE_REPOSITORY } from '@/modules/employee/employee.tokens'

type FindAllEmployeesUseCaseResponse = Either<Error, { employees: Employee[] }>

@Injectable()
export class FindAllEmployeesUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(): Promise<FindAllEmployeesUseCaseResponse> {
    try {
      const employees = await this.employeeRepository.findAll()

      return right({
        employees,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 