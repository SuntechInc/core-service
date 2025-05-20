import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from '@/modules/department/application/ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';

@Injectable()
export class FindAllDepartmentsUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(): Promise<Result<Department[]>> {
    try {
      const departments = await this.departmentRepository.findAll();
      return Result.ok<Department[]>(departments);
    } catch (error) {
      return Result.fail<Department[]>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 