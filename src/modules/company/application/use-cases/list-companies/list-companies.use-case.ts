import { Injectable } from '@nestjs/common';
import { ICompanyRepository } from '../../application/ports/company.repository';
import { Company } from '../../domain/entities/company.entity';

@Injectable()
export class ListCompaniesUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute(): Promise<Company[]> {
    return this.companyRepository.findAll();
  }
} 