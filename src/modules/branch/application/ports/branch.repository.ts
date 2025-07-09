import { Branch } from '../../domain/entities/branch.entity';
import { BranchFilterOptions, BranchFilterResult } from '../filters/branch-filters';

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

export abstract class IBranchRepository {
  abstract create(branch: Branch): Promise<Branch>;
  abstract findById(id: string): Promise<Branch | null>;
  abstract findByCompanyId(companyId: string): Promise<Branch[]>;
  abstract update(branch: Branch): Promise<Branch>;
  abstract delete(id: string): Promise<void>;
  abstract findAll(): Promise<Branch[]>;
  abstract findAllPaginated(options: PaginationOptions): Promise<PaginatedResult<Branch>>;
  abstract findByName(name: string): Promise<Branch[]>;
  abstract count(): Promise<number>;
  abstract findWithFilters(options: BranchFilterOptions): Promise<BranchFilterResult<Branch>>;
} 