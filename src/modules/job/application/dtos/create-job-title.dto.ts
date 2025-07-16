import { IsString, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateJobTitleDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsNotEmpty()
  companyId: string

  @IsString()
  @IsOptional()
  code?: string

  @IsString()
  @IsNotEmpty()
  branchId: string
} 