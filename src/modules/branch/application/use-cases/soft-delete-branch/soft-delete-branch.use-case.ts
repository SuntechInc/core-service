import { Injectable } from '@nestjs/common';
import { IBranchRepository } from '@/modules/branch/application/ports/branch.repository';
import { Branch } from '@/modules/branch/domain/entities/branch.entity';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';
import { BranchStatus } from '@/modules/branch/domain/enums/branch-status.enum';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';

@Injectable()
export class SoftDeleteBranchUseCase {
  constructor(private readonly branchRepository: IBranchRepository) {}

  async execute(id: string): Promise<Result<Branch>> {
    try {
      const branch = await this.branchRepository.findById(id);

      if (!branch) {
        return Result.fail<Branch>(
          new AppError('Branch not found', 404),
        );
      }

      const updatedBranch = Branch.create({
        name: branch.name,
        officialId: branch.officialId,
        sigla: branch.sigla,
        email: branch.email,
        phone: branch.phone,
        responsible: branch.responsible,
        isHeadquarter: branch.isHeadquarter,
        status: BranchStatus.INACTIVE,
        companyId: branch.companyId,
        addressId: branch.addressId,
        createdAt: branch.createdAt,
        updatedAt: new Date(),
      }, new UniqueEntityID(branch.id.toString()));

      const result = await this.branchRepository.update(updatedBranch);
      return Result.ok<Branch>(result);
    } catch (error) {
      return Result.fail<Branch>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 