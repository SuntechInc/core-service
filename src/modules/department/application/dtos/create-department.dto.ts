import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { DepartmentStatus } from '../../domain/enums/department-status.enum';

export class CreateDepartmentDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(DepartmentStatus)
  status: DepartmentStatus;

  @IsUUID()
  branchId: string;
} 