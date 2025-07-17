import { JobTitleVersion } from '@/modules/job/domain/entities/job-title-version.entity';

export class FilterJobTitleVersionsResponseDto {
  constructor(
    public readonly data: JobTitleVersion[],
    public readonly page: number,
    public readonly size: number,
    public readonly total: number,
    public readonly filter?: any,
  ) {}
} 