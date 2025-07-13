import { Department } from '../../domain/entities/department.entity';
import { DepartmentFilterOptions, DepartmentFilterResult } from '../filters/department-filters';

export abstract class IDepartmentRepository {
  abstract create(department: Department): Promise<Department>;
  abstract findById(id: string): Promise<Department | null>;
  abstract findByBranchId(branchId: string): Promise<Department[]>;
  abstract update(department: Department): Promise<Department>;
  abstract delete(id: string): Promise<void>;
  abstract count(companyId: string): Promise<number>;
  abstract findWithFilters(options: DepartmentFilterOptions): Promise<DepartmentFilterResult<Department>>;
} 