import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from '../dtos/create-company.dto';
import { Company } from '../../domain/entities/company.entity';
import { ICompanyRepository } from '../ports/company.repository';
import { Result, ok, err } from '@/shared/result';
import { AppError } from '@/shared/errors/app.error';


@Injectable()
export class CreateCompanyUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute(dto: CreateCompanyDto): Promise<Result<AppError, Company>> {
    try {
      const company = new Company({
        tradingName: dto.tradingName,
        legalName: dto.legalName,
        taxId: dto.taxId,
        taxCountry: dto.taxCountry,
        email: dto.email,
        phone: dto.phone,
        industry: dto.industry,
        segment: dto.segment,
      });

      const savedCompany = await this.companyRepository.create(company);
      return ok(savedCompany);
    } catch (error: any) {
      if (error.code === 'P2002') {
        return err(new AppError('Company with this tax ID or email already exists', 409));
      }
      return err(new AppError('Unexpected error', 500));
    }
  }
}
