import { IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { DepartmentStatus } from '../../domain/enums/department-status.enum';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty({ message: 'the name is required' })
  @MinLength(3, { message: 'the name must be at least 3 characters long' })
  name: string;

  @IsString({ message: 'the description must be a string' })
  @IsOptional()
  description?: string;

  @IsString({ message: 'the description must be a string' })
  @IsOptional()
  @MinLength(3, { message: 'the code must be at least 3 characters long' })
  code?: string;

  @IsString({ message: 'the code must be a string' })
  @IsOptional()
  responsibleName?: string;

  @IsString({ message: 'the responsibleEmail must be a string' })
  @IsOptional()
  responsibleEmail?: string;

  @IsEnum(DepartmentStatus)
  status: DepartmentStatus;

  @IsString({ message: 'Branch ID must be a string' })
  @IsNotEmpty({ message: 'the branchId is required' })
  branchId: string;
} 