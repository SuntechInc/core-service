import { Injectable, Inject } from '@nestjs/common';
import { IEmployeeRepository } from '../../../application/repositories/employee.repository';
import { Employee } from '@/modules/employee/domain/entities/employee.entity';
import { FilterEmployeesRequestDto } from '../../dtos/filter-employees/filter-employees.request.dto';
import { EmployeeFilters, EmployeeFilterOptions, EmployeeFilterResult } from '../../filters/employee-filters';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';
import { EMPLOYEE_REPOSITORY } from '@/modules/employee/employee.tokens';

@Injectable()
export class FilterEmployeesUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(request: FilterEmployeesRequestDto): Promise<EmployeeFilterResult<Employee>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, filter, branchId, departmentId } = request;
    
    const normalizedPage = Math.max(PAGINATION_CONSTANTS.MIN_PAGE, page);
    const normalizedSize = Math.min(Math.max(PAGINATION_CONSTANTS.MIN_SIZE, size), PAGINATION_CONSTANTS.MAX_SIZE);
    
    const skip = (normalizedPage - 1) * normalizedSize;
    const take = normalizedSize;
    
    const parsedFilter = filter ? JSON.parse(filter) : undefined;
    
    const options: EmployeeFilterOptions = {
      filter: parsedFilter,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      branchId,
      departmentId,
    };

    const result = await this.employeeRepository.findWithFilters(options);

    return result;
  }
} 