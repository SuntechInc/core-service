import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from '@/modules/department/application/ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';
import { CreateDepartmentDto } from '@/modules/department/application/dtos/create-department.dto';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';

@Injectable()
export class CreateDepartmentUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(dto: CreateDepartmentDto): Promise<Result<Department>> {
    try {
      const department = Department.create({
        name: dto.name,
        description: dto.description,
        status: dto.status,
        branchId: dto.branchId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, new UniqueEntityID());

      const createdDepartment = await this.departmentRepository.create(department);
      return Result.ok<Department>(createdDepartment);
    } catch (error) {
      return Result.fail<Department>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 