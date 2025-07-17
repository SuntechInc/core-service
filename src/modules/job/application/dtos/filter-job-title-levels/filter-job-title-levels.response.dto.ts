import { JobTitleLevel } from "@/modules/job/domain/entities/job-title-level.entity";

export class FilterJobTitleLevelsResponseDto {
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

  constructor(jobTitleLevels: JobTitleLevel[], page: number, size: number, total: number, filter?: any) {
    this.data = jobTitleLevels.map(jobTitleLevel => ({
      id: jobTitleLevel.id.toString(),
      jobTitleVersionId: jobTitleLevel.jobTitleVersionId,
      label: jobTitleLevel.label,
      rank: jobTitleLevel.rank,
      salaryMin: jobTitleLevel.salaryMin,
      salaryMax: jobTitleLevel.salaryMax,
      createdAt: jobTitleLevel.createdAt,
      updatedAt: jobTitleLevel.updatedAt,
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