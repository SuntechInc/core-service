import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from '@/modules/department/application/ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';
import { DepartmentStatus } from '@/modules/department/domain/enums/department-status.enum';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';

@Injectable()
export class SoftDeleteDepartmentUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(id: string): Promise<Result<Department>> {
    try {
      const department = await this.departmentRepository.findById(id);

      if (!department) {
        return Result.fail<Department>(
          new AppError('Department not found', 404),
        );
      }

      const updatedDepartment = Department.create({
        name: department.name,
        description: department.description,
        status: DepartmentStatus.INACTIVE,
        branchId: department.branchId,
        createdAt: department.createdAt,
        updatedAt: new Date(),
      }, new UniqueEntityID(department.id.toString()));

      const result = await this.departmentRepository.update(updatedDepartment);
      return Result.ok<Department>(result);
    } catch (error) {
      return Result.fail<Department>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 