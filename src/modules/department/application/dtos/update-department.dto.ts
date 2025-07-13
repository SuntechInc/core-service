import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
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

  @IsUUID()
  @IsOptional()
  branchId?: string;
} 