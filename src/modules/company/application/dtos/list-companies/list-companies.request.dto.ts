import { IsOptional, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';

export class ListCompaniesRequestDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Page must be an integer' })
  @Min(PAGINATION_CONSTANTS.MIN_PAGE, { message: 'Page must be at least 1' })
  page?: number = PAGINATION_CONSTANTS.DEFAULT_PAGE;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Size must be an integer' })
  @Min(PAGINATION_CONSTANTS.MIN_SIZE, { message: 'Size must be at least 1' })
  @Max(PAGINATION_CONSTANTS.MAX_SIZE, { message: 'Size cannot exceed 100' })
  size?: number = PAGINATION_CONSTANTS.DEFAULT_SIZE;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Skip must be an integer' })
  @Min(0, { message: 'Skip must be at least 0' })
  skip?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Take must be an integer' })
  @Min(PAGINATION_CONSTANTS.MIN_SIZE, { message: 'Take must be at least 1' })
  @Max(PAGINATION_CONSTANTS.MAX_SIZE, { message: 'Take cannot exceed 100' })
  take?: number;
} 