import { Injectable, Inject } from '@nestjs/common';
import { IJobTitleVersionRepository } from '../../../domain/repositories/job-title-version.repository';
import { JobTitleVersion } from '@/modules/job/domain/entities/job-title-version.entity';
import { FilterJobTitleVersionsRequestDto } from '../../dtos/filter-job-title-versions/filter-job-title-versions.request.dto';
import { JobTitleVersionFilters, JobTitleVersionFilterOptions, JobTitleVersionFilterResult } from '../../filters/job-title-version-filters';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';
import { JOB_TITLE_VERSION_REPOSITORY } from '@/modules/job/job.tokens';

@Injectable()
export class FilterJobTitleVersionsUseCase {
  constructor(
    @Inject(JOB_TITLE_VERSION_REPOSITORY)
    private readonly jobTitleVersionRepository: IJobTitleVersionRepository,
  ) {}

  async execute(request: FilterJobTitleVersionsRequestDto): Promise<JobTitleVersionFilterResult<JobTitleVersion>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, filter, jobTitleId } = request;
    
    const normalizedPage = Math.max(PAGINATION_CONSTANTS.MIN_PAGE, page);
    const normalizedSize = Math.min(Math.max(PAGINATION_CONSTANTS.MIN_SIZE, size), PAGINATION_CONSTANTS.MAX_SIZE);
    
    const skip = (normalizedPage - 1) * normalizedSize;
    const take = normalizedSize;
    
    const parsedFilter = filter ? JSON.parse(filter) : undefined;
    
    const options: JobTitleVersionFilterOptions = {
      filter: parsedFilter,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      jobTitleId,
    };

    const result = await this.jobTitleVersionRepository.findWithFilters(options);

    return result;
  }
} 