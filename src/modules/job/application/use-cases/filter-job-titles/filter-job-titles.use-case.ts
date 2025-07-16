import { Injectable, Inject } from '@nestjs/common';
import { IJobTitleRepository } from '../../../domain/repositories/job-title.repository';
import { JobTitle } from '@/modules/job/domain/entities/job-title.entity';
import { FilterJobTitlesRequestDto } from '../../dtos/filter-job-titles/filter-job-titles.request.dto';
import { JobTitleFilters, JobTitleFilterOptions, JobTitleFilterResult } from '../../filters/job-title-filters';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';
import { JOB_TITLE_REPOSITORY } from '@/modules/job/job.tokens';

@Injectable()
export class FilterJobTitlesUseCase {
  constructor(
    @Inject(JOB_TITLE_REPOSITORY)
    private readonly jobTitleRepository: IJobTitleRepository,
  ) {}

  async execute(request: FilterJobTitlesRequestDto): Promise<JobTitleFilterResult<JobTitle>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, filter, companyId, branchId } = request;
    
    const normalizedPage = Math.max(PAGINATION_CONSTANTS.MIN_PAGE, page);
    const normalizedSize = Math.min(Math.max(PAGINATION_CONSTANTS.MIN_SIZE, size), PAGINATION_CONSTANTS.MAX_SIZE);
    
    const skip = (normalizedPage - 1) * normalizedSize;
    const take = normalizedSize;
    
    const parsedFilter = filter ? JSON.parse(filter) : undefined;
    
    const options: JobTitleFilterOptions = {
      filter: parsedFilter,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      companyId,
      branchId,
    };

    const result = await this.jobTitleRepository.findWithFilters(options);

    return result;
  }
} 