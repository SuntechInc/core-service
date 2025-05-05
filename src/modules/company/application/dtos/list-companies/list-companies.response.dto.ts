import { Company } from '../../domain/entities/company.entity';

export class ListCompaniesResponseDto {
  id: string;
  tradingName: string;
  legalName: string;
  taxId: string;
  taxCountry: string;
  email: string;
  phone: string;
  industry: string;
  segment: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(company: Company) {
    this.id = company.id;
    this.tradingName = company.tradingName;
    this.legalName = company.legalName;
    this.taxId = company.taxId;
    this.taxCountry = company.taxCountry;
    this.email = company.email;
    this.phone = company.phone;
    this.industry = company.industry;
    this.segment = company.segment;
    this.status = company.status;
    this.createdAt = company.createdAt;
    this.updatedAt = company.updatedAt;
  }
} 