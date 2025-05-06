import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator'

export class CreateJobTitleLevelDto {
  @IsString()
  @IsNotEmpty()
  jobTitleVersionId: string

  @IsString()
  @IsNotEmpty()
  label: string

  @IsNumber()
  @Min(1)
  rank: number

  @IsNumber()
  @Min(0)
  salaryMin: number

  @IsNumber()
  @Min(0)
  salaryMax: number
} 