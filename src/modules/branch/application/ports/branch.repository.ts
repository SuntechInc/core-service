import { Branch } from '../../domain/entities/branch.entity';
import { BranchFilterOptions, BranchFilterResult } from '../filters/branch-filters';

export interface PaginationOptions {
  page?: number;
  size?: number;
  skip?: number;
  take?: number;
  companyId: string;
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
  abstract update(entity: Branch): Promise<Branch>;
  abstract delete(id: string): Promise<void>; 
  abstract findAllPaginated(options: PaginationOptions): Promise<PaginatedResult<Branch>>;
  abstract count(companyId: string): Promise<number>;
  abstract findWithFilters(options: BranchFilterOptions): Promise<BranchFilterResult<Branch>>;
} 