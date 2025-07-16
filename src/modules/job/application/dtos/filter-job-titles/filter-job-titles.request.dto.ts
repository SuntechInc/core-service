import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { PAGINATION_CONSTANTS } from '../../constants/pagination.constants';
import { JobTitleFilter } from '../../filters/job-title-filters';

export class FilterJobTitlesRequestDto {
  @IsOptional()
  @IsString()
  companyId?: string;

  @IsOptional()
  @IsString()
  branchId?: string;

  @IsOptional()
  @IsString()
  filter?: string;

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

  /**
   * Converte o filtro string em objeto JobTitleFilter
   */
  getParsedFilter(): JobTitleFilter | undefined {
    if (!this.filter) return undefined;
    
    try {
      return JSON.parse(this.filter);
    } catch (error) {
      console.error('Erro ao fazer parse do filtro:', error);
      return undefined;
    }
  }
} 