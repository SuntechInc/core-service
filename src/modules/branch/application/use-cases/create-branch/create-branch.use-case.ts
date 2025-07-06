import { Injectable } from '@nestjs/common';
import { IBranchRepository } from '@/modules/branch/application/ports/branch.repository';
import { Branch } from '@/modules/branch/domain/entities/branch.entity';
import { CreateBranchDto } from '@/modules/branch/application/dtos/create-branch.dto';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';

@Injectable()
export class CreateBranchUseCase {
  constructor(private readonly branchRepository: IBranchRepository) {}

  async execute(dto: CreateBranchDto): Promise<Result<Branch>> {
    try {
      const branch = Branch.create({
        name: dto.name,
        officialId: dto.officialId,
        sigla: dto.sigla,
        email: dto.email,
        phone: dto.phone,
        responsible: dto.responsible,
        isHeadquarter: dto.isHeadquarter ?? false,
        status: dto.status,
        companyId: dto.companyId,
        addressId: dto.addressId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, new UniqueEntityID());

      const createdBranch = await this.branchRepository.create(branch);
      return Result.ok<Branch>(createdBranch);
    } catch (error) {
      return Result.fail<Branch>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 