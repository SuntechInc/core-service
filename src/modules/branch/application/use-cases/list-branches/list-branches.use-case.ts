import { Injectable } from '@nestjs/common';
import { IBranchRepository, PaginationOptions, PaginatedResult } from '../../ports/branch.repository';
import { Branch } from '@/modules/branch/domain/entities/branch.entity';
import { ListBranchesRequestDto } from '../../dtos/list-branches/list-branches.request.dto';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';

@Injectable()
export class ListBranchesUseCase {
  constructor(private readonly branchRepository: IBranchRepository) {}

  async execute(): Promise<Branch[]> {
    return this.branchRepository.findAll();
  }

  async executePaginated(options: ListBranchesRequestDto): Promise<PaginatedResult<Branch>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, skip, take } = options;
    
    // Normalizar parâmetros
    const normalizedOptions: PaginationOptions = {
      page: Math.max(PAGINATION_CONSTANTS.MIN_PAGE, page),
      size: Math.min(Math.max(PAGINATION_CONSTANTS.MIN_SIZE, size), PAGINATION_CONSTANTS.MAX_SIZE),
      skip,
      take,
    };

    return this.branchRepository.findAllPaginated(normalizedOptions);
  }
} 