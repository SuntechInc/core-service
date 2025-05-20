import { IsEmail, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { CompanyStatus } from '../../domain/enums/company-status.enum';
import { Industry } from '../../domain/enums/industry.enum';
import { Segment } from '../../domain/enums/segment.enum';

export class CreateCompanyDto {
  @IsString()
  tradingName: string;

  @IsString()
  @IsOptional()
  legalName?: string;

  @IsString()
  @IsOptional()
  taxId?: string;

  @IsString()
  @IsOptional()
  taxCountry?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsEnum(Industry)
  industry: Industry;

  @IsEnum(Segment)
  segment: Segment;

  @IsEnum(CompanyStatus)
  status: CompanyStatus;

  @IsUUID()
  @IsOptional()
  addressId?: string;
}
