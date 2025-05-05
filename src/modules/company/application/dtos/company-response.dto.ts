import { IsString, IsEmail, IsEnum, IsDate } from 'class-validator';
import { CompanyStatus } from '../../domain/value-objects/company-status.enum';
import { Industry } from '../../domain/value-objects/industry.enum';
import { Segment } from '../../domain/value-objects/segment.enum';

export class CompanyResponseDto {
  @IsString()
  id: string;

  @IsString()
  tradingName: string;

  @IsString()
  legalName: string;

  @IsString()
  taxId: string;

  @IsString()
  taxCountry: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsString()
  phone: string;

  @IsEnum(Industry, { message: 'Invalid industry' })
  industry: Industry;

  @IsEnum(Segment, { message: 'Invalid segment' })
  segment: Segment;

  @IsEnum(CompanyStatus, { message: 'Invalid company status' })
  status: CompanyStatus;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
} 