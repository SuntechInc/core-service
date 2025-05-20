import { IsString, IsEmail, IsEnum, IsOptional, IsDate } from 'class-validator'
import { EmploymentType } from '../../domain/enums/employment-type.enum'
import { EmployeeStatus } from '../../domain/enums/employee-status.enum'

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  name?: string

  @IsEmail()
  @IsOptional()
  email?: string

  @IsString()
  @IsOptional()
  phone?: string

  @IsString()
  @IsOptional()
  departmentId?: string

  @IsString()
  @IsOptional()
  currentJobTitleVersionId?: string

  @IsEnum(EmploymentType)
  @IsOptional()
  employmentType?: EmploymentType

  @IsEnum(EmployeeStatus)
  @IsOptional()
  status?: EmployeeStatus

  @IsDate()
  @IsOptional()
  hiredAt?: Date

  @IsDate()
  @IsOptional()
  leftAt?: Date

  @IsString()
  @IsOptional()
  branchId?: string
} 