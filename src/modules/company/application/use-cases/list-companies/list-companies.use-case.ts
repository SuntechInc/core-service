import { Injectable } from '@nestjs/common';
import { ICompanyRepository, PaginationOptions, PaginatedResult } from '../../ports/company.repository';
import { Company } from '@/modules/company/domain/entities/company.entity';
import { ListCompaniesRequestDto } from '../../dtos/list-companies/list-companies.request.dto';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';

@Injectable()
export class ListCompaniesUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute(): Promise<Company[]> {
    return this.companyRepository.findAll();
  }

  async executePaginated(options: ListCompaniesRequestDto): Promise<PaginatedResult<Company>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, skip, take } = options;
    
    // Normalizar parâmetros
    const normalizedOptions: PaginationOptions = {
      page: Math.max(PAGINATION_CONSTANTS.MIN_PAGE, page),
      size: Math.min(Math.max(PAGINATION_CONSTANTS.MIN_SIZE, size), PAGINATION_CONSTANTS.MAX_SIZE),
      skip,
      take,
    };

    return this.companyRepository.findAllPaginated(normalizedOptions);
  }
} 