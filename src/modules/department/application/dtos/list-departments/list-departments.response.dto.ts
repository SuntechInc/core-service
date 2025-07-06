import { Department } from "@/modules/department/domain/entities/department.entity";

export class DepartmentListItemDto {
  id: string;
  name: string;
  description?: string;
  status: string;
  branchId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(department: Department) {
    this.id = department.id;
    this.name = department.name;
    this.description = department.description;
    this.status = department.status;
    this.branchId = department.branchId;
    this.createdAt = department.createdAt;
    this.updatedAt = department.updatedAt;
  }
}

export class ListDepartmentsResponseDto {
  data: DepartmentListItemDto[];
  pagination: {
    page: number;
    size: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };

  constructor(departments: Department[], page: number, size: number, total: number) {
    this.data = departments.map(department => new DepartmentListItemDto(department));
    this.pagination = {
      page,
      size,
      total,
      totalPages: Math.ceil(total / size),
      hasNext: page < Math.ceil(total / size),
      hasPrevious: page > 1,
    };
  }
} 