import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString, IsUUID, MinLength, Matches, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';
import { BranchStatus } from '../../domain/enums/branch-status.enum';

export class CreateBranchDto {
  @IsString()
  @MinLength(3, { message: 'Tax ID must be at least 11 characters long' })
  @IsNotEmpty({ message: 'Tax ID is required' })
  @Transform(({ value }) => value?.replace(/[^\d]/g, '')) // Remove caracteres não numéricos
  taxId: string;

  @IsString()
  @MinLength(3, { message: 'Trading name must be at least 3 characters long' })
  @IsNotEmpty({ message: 'Trading name is required' })
  @Transform(({ value }) => value?.trim())
  tradingName: string;

  @IsString()
  @MinLength(3, { message: 'Legal name must be at least 3 characters long' })
  @IsNotEmpty({ message: 'Legal name is required' })
  @Transform(({ value }) => value?.trim())
  legalName: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  code?: string;

  @IsEmail()
  @IsOptional()
  @Transform(({ value }) => value?.toLowerCase().trim())
  email?: string;

  @IsString()
  @MinLength(10, { message: 'Phone number must be at least 10 characters long' })
  @Matches(/^[0-9+\-() ]+$/, { message: 'Phone number can only contain numbers, +, -, () and spaces' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  phone?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  responsible?: string;

  @IsBoolean()
  @IsOptional()
  isHeadquarter?: boolean;

  @IsEnum(BranchStatus)
  status: BranchStatus;

  @IsUUID()
  companyId: string;

  @IsUUID()
  @IsOptional()
  addressId?: string;
} 