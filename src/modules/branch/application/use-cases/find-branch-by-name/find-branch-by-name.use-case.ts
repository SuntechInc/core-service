import { Injectable } from '@nestjs/common';
import { IBranchRepository } from '@/modules/branch/application/ports/branch.repository';
import { Branch } from '@/modules/branch/domain/entities/branch.entity';

@Injectable()
export class FindBranchByNameUseCase {
  constructor(private readonly branchRepository: IBranchRepository) {}

  async execute(name: string, companyId: string): Promise<Branch[]> {
    return this.branchRepository.findByName(name, companyId);
  }
} 