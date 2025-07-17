import { JobTitle } from "@/modules/job/domain/entities/job-title.entity";

export class FilterJobTitlesResponseDto {
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

  constructor(jobTitles: JobTitle[], page: number, size: number, total: number, filter?: any) {
    this.data = jobTitles.map(jobTitle => ({
      id: jobTitle.id.toString(),
      companyId: jobTitle.companyId,
      name: jobTitle.name,
      code: jobTitle.code,
      branchId: jobTitle.branchId,
      createdAt: jobTitle.createdAt,
      updatedAt: jobTitle.updatedAt,
    }));
    
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