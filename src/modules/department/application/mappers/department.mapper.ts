import { Department } from '../../domain/entities/department.entity';

export class DepartmentMapper {
  static toResponseDto(department: Department) {
    return {
      id: department.id.toString(),
      name: department.name,
      description: department.description,
      status: department.status,
      branchId: department.branchId,
      createdAt: department.createdAt,
      updatedAt: department.updatedAt,
    };
  }
} 