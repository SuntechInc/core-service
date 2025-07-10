import { Company } from "@/modules/company/domain/entities/company.entity";

export class CompanyListItemDto {
  id: string;
  tradingName: string;
  legalName?: string;
  taxId?: string;
  taxCountry?: string;
  email?: string;
  phone?: string;
  industry: string;
  segment: string;
  status: string;
  isBaseCompany: boolean;
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
    this.isBaseCompany = company.isBaseCompany;
    this.createdAt = company.createdAt;
    this.updatedAt = company.updatedAt;
  }
}

export class FilterCompaniesResponseDto {
  data: CompanyListItemDto[];
  pagination: {
    page: number;
    size: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
  filter: {
    applied: string | null;
    parsed: any | null;
  };

  constructor(companies: Company[], page: number, size: number, total: number, filter?: any) {
    this.data = companies.map(company => new CompanyListItemDto(company));
    this.pagination = {
      page,
      size,
      total,
      totalPages: Math.ceil(total / size),
      hasNext: page < Math.ceil(total / size),
      hasPrevious: page > 1,
    };
    let applied: string | null = null;
    let parsed: any | null = null;
    if (filter) {
      if (typeof filter === 'string') {
        applied = filter;
        try {
          parsed = JSON.parse(filter);
        } catch {
          parsed = null;
        }
      } else if (typeof filter === 'object') {
        applied = JSON.stringify(filter);
        parsed = filter;
      }
    }
    this.filter = {
      applied,
      parsed,
    };
  }
} 