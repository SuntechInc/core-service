import { Injectable } from '@nestjs/common';
import { ICompanyRepository } from '../../application/ports/company.repository';
import { Company } from '../../domain/entities/company.entity';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';

@Injectable()
export class FindCompanyByTaxIdUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute(taxId: string): Promise<Result<Company>> {
    try {
      const company = await this.companyRepository.findByTaxId(taxId);
      if (!company) {
        return Result.fail<Company>(
          new AppError.NotFound(`Company with taxId ${taxId} not found`),
        );
      }
      return Result.ok<Company>(company);
    } catch (error) {
      return Result.fail<Company>(
        new AppError.UnexpectedError(error),
      );
    }
  }
} 