import { Department } from '../../domain/entities/department.entity';

export abstract class IDepartmentRepository {
  abstract create(department: Department): Promise<Department>;
  abstract findById(id: string): Promise<Department | null>;
  abstract findByBranchId(branchId: string): Promise<Department[]>;
  abstract update(department: Department): Promise<Department>;
  abstract delete(id: string): Promise<void>;
  abstract findAll(): Promise<Department[]>;
  abstract findByName(name: string): Promise<Department[]>;
} 