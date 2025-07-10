import { Company } from "../../domain/entities/company.entity";
import { CompanyFilterOptions, CompanyFilterResult } from "../filters/company-filters";

export interface PaginationOptions {
  page?: number;
  size?: number;
  skip?: number;
  take?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
}

export abstract class ICompanyRepository {
  abstract create(company: Company): Promise<Company>;
  abstract findById(id: string): Promise<Company | null>;
  abstract findByTaxId(taxId: string): Promise<Company | null>;
  abstract findByEmail(email: string): Promise<Company | null>;
  abstract findByTradingName(tradingName: string): Promise<Company[]>;
  abstract update(company: Company): Promise<Company>;
  abstract delete(id: string): Promise<void>;
  abstract findAll(): Promise<Company[]>;
  abstract findAllPaginated(options: PaginationOptions): Promise<PaginatedResult<Company>>;
  abstract count(): Promise<number>;
  abstract findBaseCompany(): Promise<Company | null>;
  abstract findWithFilters(options: CompanyFilterOptions): Promise<CompanyFilterResult<Company>>;
}