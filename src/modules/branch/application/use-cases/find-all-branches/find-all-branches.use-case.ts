import { Injectable } from '@nestjs/common';
import { IBranchRepository } from '@/modules/branch/application/ports/branch.repository';
import { Branch } from '@/modules/branch/domain/entities/branch.entity';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';

@Injectable()
export class FindAllBranchesUseCase {
  constructor(private readonly branchRepository: IBranchRepository) {}

  async execute(): Promise<Result<Branch[]>> {
    try {
      const branches = await this.branchRepository.findAll();
      return Result.ok<Branch[]>(branches);
    } catch (error) {
      return Result.fail<Branch[]>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 