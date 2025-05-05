import { Company } from '@/modules/company/domain/entities/company.entity';
import { CompanyResponseDto } from '@/modules/company/application/dtos/company-response.dto';

export class CompanyMapper {
  static toResponseDto(c: Company): CompanyResponseDto {
    return {
      id: c.id,
      tradingName: c.tradingName,
      legalName: c.legalName,
      taxId: c.taxId,
      taxCountry: c.taxCountry,
      email: c.email,
      phone: c.phone,
      industry: c.industry,
      segment: c.segment,
      status: c.status,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
    };
  }
} 