import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from '../../ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';
import { FilterDepartmentsRequestDto } from '../../dtos/filter-departments/filter-departments.request.dto';
import { DepartmentFilters, DepartmentFilterOptions, DepartmentFilterResult } from '../../filters/department-filters';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';

@Injectable()
export class FilterDepartmentsUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(request: FilterDepartmentsRequestDto): Promise<DepartmentFilterResult<Department>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, filter, companyId } = request;
    
    const normalizedPage = Math.max(PAGINATION_CONSTANTS.MIN_PAGE, page);
    const normalizedSize = Math.min(Math.max(PAGINATION_CONSTANTS.MIN_SIZE, size), PAGINATION_CONSTANTS.MAX_SIZE);
    
    const skip = (normalizedPage - 1) * normalizedSize;
    const take = normalizedSize;
    
    const parsedFilter = filter ? JSON.parse(filter) : undefined;
    
    const options: DepartmentFilterOptions = {
      filter: parsedFilter,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      companyId,
    };

    const result = await this.departmentRepository.findWithFilters(options);

    return result;
  }
} 