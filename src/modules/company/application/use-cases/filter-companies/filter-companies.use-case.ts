import { Injectable } from '@nestjs/common';
import { ICompanyRepository } from '../../ports/company.repository';
import { Company } from '@/modules/company/domain/entities/company.entity';
import { FilterCompaniesRequestDto } from '../../dtos/filter-companies/filter-companies.request.dto';
import { CompanyFilters, CompanyFilterOptions, CompanyFilterResult } from '../../filters/company-filters';

@Injectable()
export class FilterCompaniesUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute(request: FilterCompaniesRequestDto): Promise<CompanyFilterResult<Company>> {
    const { page = 1, size = 20, filter } = request;
    const normalizedPage = Math.max(1, page);
    const normalizedSize = Math.max(1, size);
    const skip = (normalizedPage - 1) * normalizedSize;
    const take = normalizedSize;
    const parsedFilter = filter ? JSON.parse(filter) : undefined;
    const options: CompanyFilterOptions = {
      filter: parsedFilter,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    };
    const result = await this.companyRepository.findWithFilters(options);
    return result;
  }
} 