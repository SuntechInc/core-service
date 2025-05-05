import { IsString, IsEmail, IsEnum, IsOptional, MinLength, Matches } from 'class-validator';
import { Industry } from '../../domain/value-objects/industry.enum';
import { Segment } from '../../domain/value-objects/segment.enum';

export class CreateCompanyDto {
  @IsString()
  @MinLength(3, { message: 'Trading name must be at least 3 characters long' })
  tradingName: string;

  @IsString()
  @MinLength(3, { message: 'Legal name must be at least 3 characters long' })
  legalName: string;

  @IsString()
  @MinLength(11, { message: 'Tax ID must be at least 11 characters long' })
  taxId: string;

  @IsString()
  @IsOptional()
  taxCountry?: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsString()
  @MinLength(10, { message: 'Phone number must be at least 10 characters long' })
  @Matches(/^[0-9+\-() ]+$/, { message: 'Phone number can only contain numbers, +, -, () and spaces' })
  phone: string;

  @IsEnum(Industry, { message: 'Invalid industry' })
  industry: Industry;

  @IsEnum(Segment, { message: 'Invalid segment' })
  segment: Segment;
}
