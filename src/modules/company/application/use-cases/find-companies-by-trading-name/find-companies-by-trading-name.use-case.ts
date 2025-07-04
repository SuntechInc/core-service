import { Injectable } from '@nestjs/common';
import { ICompanyRepository } from '../../ports/company.repository';
import { Company } from '@/modules/company/domain/entities/company.entity';

@Injectable()
export class FindCompaniesByTradingNameUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute(tradingName: string): Promise<Company[]> {
    return this.companyRepository.findByTradingName(tradingName);
  }
} 