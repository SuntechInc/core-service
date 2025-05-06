import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { Employee } from '@/modules/employee/domain/entities/employee.entity'
import { IEmployeeRepository } from '@/modules/employee/application/repositories/employee.repository'
import { EMPLOYEE_REPOSITORY } from '@/modules/employee/employee.tokens'

type FindEmployeeUseCaseResponse = Either<Error, { employee: Employee | null }>

@Injectable()
export class FindEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(id: string): Promise<FindEmployeeUseCaseResponse> {
    try {
      const employee = await this.employeeRepository.findById(id)

      return right({
        employee,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
} 