import { Branch } from '../../domain/entities/branch.entity';

export abstract class IBranchRepository {
  abstract create(branch: Branch): Promise<Branch>;
  abstract findById(id: string): Promise<Branch | null>;
  abstract findByCompanyId(companyId: string): Promise<Branch[]>;
  abstract update(branch: Branch): Promise<Branch>;
  abstract delete(id: string): Promise<void>;
  abstract findAll(): Promise<Branch[]>;
} 