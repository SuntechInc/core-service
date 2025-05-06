import { IsString, IsEmail, IsEnum, IsOptional, IsDate } from 'class-validator'
import { EmploymentType } from '../../domain/enums/employment-type.enum'
import { EmployeeStatus } from '../../domain/enums/employee-status.enum'

export class CreateEmployeeDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  @IsOptional()
  phone?: string

  @IsString()
  departmentId: string

  @IsString()
  currentJobTitleVersionId: string

  @IsEnum(EmploymentType)
  employmentType: EmploymentType

  @IsEnum(EmployeeStatus)
  status: EmployeeStatus

  @IsDate()
  @IsOptional()
  hiredAt?: Date

  @IsString()
  branchId: string
} 