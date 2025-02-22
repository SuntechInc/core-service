import { $Enums, Prisma } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Industry } from '../../domain/value-objects/industry.enum';

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
  @IsEnum(Industry)
  industry: $Enums.Industry;

  @IsNotEmpty()
  @IsEnum(Industry)
  segment: $Enums.Segment;
  
  @IsBoolean()
  isActive?: boolean;
}
