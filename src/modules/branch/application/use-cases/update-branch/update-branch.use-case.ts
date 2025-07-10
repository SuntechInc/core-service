import { Injectable } from '@nestjs/common';
import { IBranchRepository } from '@/modules/branch/application/ports/branch.repository';
import { Branch } from '@/modules/branch/domain/entities/branch.entity';
import { UpdateBranchDto } from '@/modules/branch/application/dtos/update-branch.dto';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';

@Injectable()
export class UpdateBranchUseCase {
  constructor(private readonly branchRepository: IBranchRepository) {}

  async execute(id: string, dto: UpdateBranchDto): Promise<Result<Branch>> {
    try {
      const existingBranch = await this.branchRepository.findById(id);

      if (!existingBranch) {
        return Result.fail<Branch>(
          new AppError('Branch not found', 404),
        );
      }

      const updatedBranch = Branch.create({
        taxId: dto.taxId ?? existingBranch.taxId,
        name: dto.name ?? existingBranch.name,
        code: dto.code ?? existingBranch.code,
        email: dto.email ?? existingBranch.email,
        phone: dto.phone ?? existingBranch.phone,
        responsible: dto.responsible ?? existingBranch.responsible,
        isHeadquarter: dto.isHeadquarter ?? existingBranch.isHeadquarter,
        status: dto.status ?? existingBranch.status,
        companyId: existingBranch.companyId,
        addressId: dto.addressId ?? existingBranch.addressId,
        createdAt: existingBranch.createdAt,
        updatedAt: new Date(),
      }, id);

      const result = await this.branchRepository.update(updatedBranch);
      return Result.ok<Branch>(result);
    } catch (error) {
      return Result.fail<Branch>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 