import { Department } from "@/modules/department/domain/entities/department.entity";
import { DepartmentMapper } from "../../mappers/department.mapper";

export class FilterDepartmentsResponseDto {
  data: any[];
  pagination: {
    page: number;
    size: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
  filter: {
    applied: string | null;
    parsed: any | null;
  };

  constructor(departments: Department[], page: number, size: number, total: number, filter?: any) {
    this.data = departments.map(department => DepartmentMapper.toResponseDto(department));
    this.pagination = {
      page,
      size,
      total,
      totalPages: Math.ceil(total / size),
      hasNext: page < Math.ceil(total / size),
      hasPrevious: page > 1,
    };
    let applied: string | null = null;
    let parsed: any | null = null;
    if (filter) {
      if (typeof filter === 'string') {
        applied = filter;
        try {
          parsed = JSON.parse(filter);
        } catch {
          parsed = null;
        }
      } else if (typeof filter === 'object') {
        applied = JSON.stringify(filter);
        parsed = filter;
      }
    }
    this.filter = {
      applied,
      parsed,
    };
  }
} 