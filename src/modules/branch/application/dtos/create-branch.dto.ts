import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { BranchStatus } from '../../domain/enums/branch-status.enum';

export class CreateBranchDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  officialId?: string;

  @IsString()
  @IsOptional()
  sigla?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  responsible?: string;

  @IsBoolean()
  isHeadquarter: boolean;

  @IsEnum(BranchStatus)
  status: BranchStatus;

  @IsUUID()
  companyId: string;

  @IsUUID()
  @IsOptional()
  addressId?: string;
} 