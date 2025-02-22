// src/modules/company/mappers/company.mapper.ts

import { Company } from '../../domain/entities/company.entity';
import { Industry } from '../../domain/value-objects/industry.enum';
import { Segment } from '../../domain/value-objects/segment.enum';
import { CreateCompanyDto } from '../dtos/create-company.dto';

export class CompanyMapper {
  static fromDto(dto: CreateCompanyDto): Company {
    return new Company(
      dto.tradingName,
      dto.legalName,
      dto.taxId,
      dto.email,
      dto.industry as Industry, // Garantindo que seja um valor válido de Industry
      dto.segment as Segment, // Garantindo que seja um valor válido de Segment
      dto.phone,
      true, // Por padrão, a empresa começa ativa
    );
  }

  static toDomain(record: any): Company {
    return new Company(
      record.tradingName,
      record.legalName,
      record.taxId,
      record.email,
      record.industry as Industry,
      record.segment as Segment,
      record.phone,
      record.isActive,
    );
  }
}
