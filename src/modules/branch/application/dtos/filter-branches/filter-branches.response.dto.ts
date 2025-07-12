import { Branch } from "@/modules/branch/domain/entities/branch.entity";
import { BranchMapper } from "../../mappers/branch.mapper";

export class FilterBranchesResponseDto {
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

  constructor(branches: Branch[], page: number, size: number, total: number, filter?: any) {
    this.data = branches.map(branch => BranchMapper.toResponseDto(branch));
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