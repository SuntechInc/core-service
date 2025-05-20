import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from '@/modules/department/application/ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';

@Injectable()
export class FindDepartmentByNameUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(name: string): Promise<Result<Department[]>> {
    try {
      const departments = await this.departmentRepository.findByName(name);
      return Result.ok<Department[]>(departments);
    } catch (error) {
      return Result.fail<Department[]>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 