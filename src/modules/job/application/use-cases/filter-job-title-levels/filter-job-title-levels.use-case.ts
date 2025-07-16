import { Injectable, Inject } from '@nestjs/common';
import { IJobTitleLevelRepository } from '../../../domain/repositories/job-title-level.repository';
import { JobTitleLevel } from '@/modules/job/domain/entities/job-title-level.entity';
import { FilterJobTitleLevelsRequestDto } from '../../dtos/filter-job-title-levels/filter-job-title-levels.request.dto';
import { JobTitleLevelFilters, JobTitleLevelFilterOptions, JobTitleLevelFilterResult } from '../../filters/job-title-level-filters';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';
import { JOB_TITLE_LEVEL_REPOSITORY } from '@/modules/job/job.tokens';

@Injectable()
export class FilterJobTitleLevelsUseCase {
  constructor(
    @Inject(JOB_TITLE_LEVEL_REPOSITORY)
    private readonly jobTitleLevelRepository: IJobTitleLevelRepository,
  ) {}

  async execute(request: FilterJobTitleLevelsRequestDto): Promise<JobTitleLevelFilterResult<JobTitleLevel>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, filter, jobTitleVersionId } = request;
    
    const normalizedPage = Math.max(PAGINATION_CONSTANTS.MIN_PAGE, page);
    const normalizedSize = Math.min(Math.max(PAGINATION_CONSTANTS.MIN_SIZE, size), PAGINATION_CONSTANTS.MAX_SIZE);
    
    const skip = (normalizedPage - 1) * normalizedSize;
    const take = normalizedSize;
    
    const parsedFilter = filter ? JSON.parse(filter) : undefined;
    
    const options: JobTitleLevelFilterOptions = {
      filter: parsedFilter,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      jobTitleVersionId,
    };

    const result = await this.jobTitleLevelRepository.findWithFilters(options);

    return result;
  }
} 