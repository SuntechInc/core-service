import { AppError } from '@/shared/core/app-error';
import { Result } from '@/shared/core/result';
import { Injectable } from '@nestjs/common';
import { ICompanyRepository } from '../../ports/company.repository';


@Injectable()
export class SoftDeleteCompanyUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute(id: string): Promise<Result<void>> {
    try {
      await this.companyRepository.delete(id);
      return Result.ok<void>();
    } catch (error) {
      return Result.fail<void>(AppError.UnexpectedError(error));
    }
  }
} 