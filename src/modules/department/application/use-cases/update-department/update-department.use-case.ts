import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from '@/modules/department/application/ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';
import { UpdateDepartmentDto } from '@/modules/department/application/dtos/update-department.dto';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';

@Injectable()
export class UpdateDepartmentUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(id: string, dto: UpdateDepartmentDto): Promise<Result<Department>> {
    try {
      const existingDepartment = await this.departmentRepository.findById(id);

      if (!existingDepartment) {
        return Result.fail<Department>(
          new AppError('Department not found', 404),
        );
      }

      const updatedDepartment = Department.create({
        name: dto.name ?? existingDepartment.name,
        description: dto.description ?? existingDepartment.description,
        status: dto.status ?? existingDepartment.status,
        branchId: dto.branchId ?? existingDepartment.branchId,
        createdAt: existingDepartment.createdAt,
        updatedAt: new Date(),
      }, id);

      const result = await this.departmentRepository.update(updatedDepartment);
      return Result.ok<Department>(result);
    } catch (error) {
      return Result.fail<Department>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 