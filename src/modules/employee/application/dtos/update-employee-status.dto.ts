import { IsEnum } from 'class-validator'
import { EmployeeStatus } from '../../domain/enums/employee-status.enum'

export class UpdateEmployeeStatusDto {
  @IsEnum(EmployeeStatus)
  status: EmployeeStatus
} 