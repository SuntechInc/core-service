import { Injectable } from '@nestjs/common';
import { IDepartmentRepository, PaginationOptions, PaginatedResult } from '../../ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';
import { ListDepartmentsRequestDto } from '../../dtos/list-departments/list-departments.request.dto';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';

@Injectable()
export class ListDepartmentsUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(): Promise<Department[]> {
    return this.departmentRepository.findAll();
  }

  async executePaginated(options: ListDepartmentsRequestDto): Promise<PaginatedResult<Department>> {
    const { page = PAGINATION_CONSTANTS.DEFAULT_PAGE, size = PAGINATION_CONSTANTS.DEFAULT_SIZE, skip, take } = options;
    
    // Normalizar parâmetros
    const normalizedOptions: PaginationOptions = {
      page: Math.max(PAGINATION_CONSTANTS.MIN_PAGE, page),
      size: Math.min(Math.max(PAGINATION_CONSTANTS.MIN_SIZE, size), PAGINATION_CONSTANTS.MAX_SIZE),
      skip,
      take,
    };

    return this.departmentRepository.findAllPaginated(normalizedOptions);
  }
} 