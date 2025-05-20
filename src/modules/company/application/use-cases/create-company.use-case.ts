import { Injectable } from '@nestjs/common';
import { ICompanyRepository } from '@/modules/company/application/ports/company.repository';
import { Company } from '@/modules/company/domain/entities/company.entity';
import { CreateCompanyDto } from '@/modules/company/application/dtos/create-company.dto';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';


@Injectable()
export class CreateCompanyUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute(dto: CreateCompanyDto): Promise<Result<Company>> {
    try {
      const company = Company.create({
        tradingName: dto.tradingName,
        legalName: dto.legalName,
        taxId: dto.taxId,
        taxCountry: dto.taxCountry,
        email: dto.email,
        phone: dto.phone,
        industry: dto.industry,
        segment: dto.segment,
        status: dto.status,
        addressId: dto.addressId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, new UniqueEntityID());

      const createdCompany = await this.companyRepository.create(company);
      return Result.ok<Company>(createdCompany);
    } catch (error) {
      return Result.fail<Company>(
        AppError.UnexpectedError(error),
      );
    }
  }
}
