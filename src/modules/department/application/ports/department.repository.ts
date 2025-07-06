import { Department } from '../../domain/entities/department.entity';

export interface PaginationOptions {
  page?: number;
  size?: number;
  skip?: number;
  take?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
}

export abstract class IDepartmentRepository {
  abstract create(department: Department): Promise<Department>;
  abstract findById(id: string): Promise<Department | null>;
  abstract findByBranchId(branchId: string): Promise<Department[]>;
  abstract update(department: Department): Promise<Department>;
  abstract delete(id: string): Promise<void>;
  abstract findAll(): Promise<Department[]>;
  abstract findAllPaginated(options: PaginationOptions): Promise<PaginatedResult<Department>>;
  abstract findByName(name: string): Promise<Department[]>;
  abstract count(): Promise<number>;
} 