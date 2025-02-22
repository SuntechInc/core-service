import { Injectable } from '@nestjs/common';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import { Company } from '../../domain/entities/company.entity';

@Injectable()
export class CreateCompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async create(company: Company): Promise<Company> {
    return this.companyRepository.create(company);
  }
}
