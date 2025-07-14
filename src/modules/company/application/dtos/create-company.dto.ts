import { IsEmail, IsEnum, IsOptional, IsString, MinLength, Matches, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';
import { CompanyStatus } from '../../domain/enums/company-status.enum';
import { Industry } from '../../domain/enums/industry.enum';
import { Segment } from '../../domain/enums/segment.enum';

export class CreateCompanyDto {
  @IsString()
  @MinLength(3, { message: 'Trading name must be at least 3 characters long' })
  @Transform(({ value }) => value?.trim())
  tradingName: string;

  @IsString()
  @MinLength(3, { message: 'Legal name must be at least 3 characters long' })
  @IsNotEmpty({ message: 'Legal name is required' })
  @Transform(({ value }) => value?.trim())
  legalName: string;

  @IsString()
  @MinLength(11, { message: 'Tax ID must be at least 11 characters long' })
  @IsNotEmpty({ message: 'Tax ID is required' })
  @Transform(({ value }) => value?.replace(/[^\d]/g, '')) // Remove caracteres não numéricos
  taxId: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.toUpperCase())
  taxCountry?: string = 'BR';

  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  @Transform(({ value }) => value?.toLowerCase().trim())
  email: string;

  @IsString()
  @MinLength(10, { message: 'Phone number must be at least 10 characters long' })
  @Matches(/^[0-9+\-() ]+$/, { message: 'Phone number can only contain numbers, +, -, () and spaces' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  phone?: string;

  @IsEnum(Industry, { message: 'Invalid industry' })
  industry: Industry;

  @IsEnum(Segment, { message: 'Invalid segment' })
  segment: Segment;

  @IsEnum(CompanyStatus, { message: 'Invalid company status' })
  status: CompanyStatus = CompanyStatus.ACTIVE;

  @IsString({ message: 'Address ID must be a string' })
  @IsOptional()
  addressId?: string;

  @IsOptional()
  isBaseCompany?: boolean = false;
}
