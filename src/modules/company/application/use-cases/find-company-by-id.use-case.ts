import { Injectable, NotFoundException } from '@nestjs/common';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import { Company } from '../../domain/entities/company.entity';

@Injectable()
export class FindCompanyByIdUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(id: string): Promise<Company> {
    const company = await this.companyRepository.findById(id);

    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }

    return company;
  }
}
