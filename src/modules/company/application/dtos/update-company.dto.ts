import { IsOptional, IsString, IsEnum, IsBoolean } from 'class-validator';
import { Industry } from '../../domain/value-objects/industry.enum';
import { Segment } from '../../domain/value-objects/segment.enum';

export class UpdateCompanyDto {
  @IsOptional()
  @IsString()
  tradingName?: string;

  @IsOptional()
  @IsString()
  legalName?: string;

  @IsOptional()
  @IsString()
  taxId?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(Industry, { message: 'industry must be a valid enum value' })
  industry?: Industry;

  @IsOptional()
  @IsEnum(Segment, { message: 'segment must be a valid enum value' })
  segment?: Segment;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
