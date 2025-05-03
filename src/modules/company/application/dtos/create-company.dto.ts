import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Industry } from '../../domain/value-objects/industry.enum';
import { Segment } from '../../domain/value-objects/segment.enum';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  tradingName: string;

  @IsString()
  @IsNotEmpty()
  legalName: string;

  @IsString()
  @IsNotEmpty()
  taxId: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsNotEmpty()
  @IsEnum(Industry, { message: 'segment must be a valid enum value' })
  industry: Industry;

  @IsNotEmpty()
  @IsEnum(Segment, { message: 'segment must be a valid enum value' })
  segment: Segment;
  
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
