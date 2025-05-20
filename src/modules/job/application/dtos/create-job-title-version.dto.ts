import { IsString, IsNotEmpty, IsOptional, IsArray, IsNumber } from 'class-validator'

export class CreateJobTitleVersionDto {
  @IsString()
  @IsNotEmpty()
  jobTitleId: string

  @IsNumber()
  @IsNotEmpty()
  version: number

  @IsString()
  @IsOptional()
  description?: string

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  responsibilities?: string[]

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  requirements?: string[]
} 