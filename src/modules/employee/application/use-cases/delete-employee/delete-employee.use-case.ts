import { Injectable, Inject } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { IEmployeeRepository } from '@/modules/employee/domain/repositories/employee.repository'
import { EMPLOYEE_REPOSITORY } from '@/modules/employee/employee.tokens'

type DeleteEmployeeUseCaseResponse = Either<Error, void>

@Injectable()
export class DeleteEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(id: string): Promise<DeleteEmployeeUseCaseResponse> {
    try {
      const employee = await this.employeeRepository.findById(id)

      if (!employee) {
        return left(new Error('Employee not found'))
      }

      await this.employeeRepository.delete(id)

      return right(undefined)
    } catch (error) {
      return left(error as Error)
    }
  }
} 