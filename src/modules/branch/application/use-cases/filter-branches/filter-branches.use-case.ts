import { Injectable } from '@nestjs/common';
import { IBranchRepository } from '../../ports/branch.repository';
import { Branch } from '@/modules/branch/domain/entities/branch.entity';
import { FilterBranchesRequestDto } from '../../dtos/filter-branches/filter-branches.request.dto';
import { BranchFilters, BranchFilterOptions, BranchFilterResult } from '../../filters/branch-filters';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';

@Injectable()
export class FilterBranchesUseCase {
  constructor(private readonly branchRepository: IBranchRepository) {}

  async execute(request: FilterBranchesRequestDto): Promise<BranchFilterResult<Branch>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, filter, companyId } = request;
    
    const normalizedPage = Math.max(PAGINATION_CONSTANTS.MIN_PAGE, page);
    const normalizedSize = Math.min(Math.max(PAGINATION_CONSTANTS.MIN_SIZE, size), PAGINATION_CONSTANTS.MAX_SIZE);
    
    const skip = (normalizedPage - 1) * normalizedSize;
    const take = normalizedSize;
    
    const parsedFilter = filter ? JSON.parse(filter) : undefined;
    
    const options: BranchFilterOptions = {
      filter: parsedFilter,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      companyId,
    };

    const result = await this.branchRepository.findWithFilters(options);

    return result;
  }
} 