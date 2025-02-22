import { Injectable, NotFoundException } from '@nestjs/common';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import { Company } from '../../domain/entities/company.entity';

@Injectable()
export class UpdateCompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(id: string, data: Partial<Company>): Promise<Company> {
    const updatedCompany = await this.companyRepository.update(id, data);

    if (!updatedCompany) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }

    return updatedCompany;
  }
}
