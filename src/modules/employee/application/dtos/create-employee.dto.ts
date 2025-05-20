import { IsString, IsNotEmpty, IsOptional, IsEnum, IsDate } from 'class-validator'
import { EmploymentType } from '@/modules/employee/domain/enums/employment-type.enum'
import { EmployeeStatus } from '@/modules/employee/domain/enums/employee-status.enum'

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  phone: string

  @IsString()
  @IsNotEmpty()
  departmentId: string

  @IsString()
  @IsNotEmpty()
  currentJobTitleVersionId: string

  @IsEnum(EmploymentType)
  @IsNotEmpty()
  employmentType: EmploymentType

  @IsEnum(EmployeeStatus)
  @IsNotEmpty()
  status: EmployeeStatus

  @IsDate()
  @IsNotEmpty()
  hiredAt: Date

  @IsDate()
  @IsOptional()
  leftAt?: Date

  @IsString()
  @IsNotEmpty()
  branchId: string
} 