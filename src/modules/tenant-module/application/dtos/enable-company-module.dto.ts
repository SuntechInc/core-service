import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { Segment } from '@/modules/tenant-module/domain/enums/segment.enum';

export class EnableCompanyModuleDto {
  @IsString()
  @IsNotEmpty({ message: 'Module code is required' })
  @Transform(({ value }) => value?.trim())
  moduleCode: string;

  @IsEnum(Segment, { message: 'Invalid segment' })
  segment: Segment;
} 