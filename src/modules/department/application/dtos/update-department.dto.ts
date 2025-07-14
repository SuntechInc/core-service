import { IsEnum, IsOptional, IsString } from 'class-validator';
import { DepartmentStatus } from '../../domain/enums/department-status.enum';

export class UpdateDepartmentDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(DepartmentStatus)
  @IsOptional()
  status?: DepartmentStatus;

  @IsString({ message: 'Branch ID must be a string' })
  @IsOptional()
  branchId?: string;
} 