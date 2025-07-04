import { Company } from "../../domain/entities/company.entity";

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
  abstract update(company: Company): Promise<Company>;
  abstract delete(id: string): Promise<void>;
  abstract findAll(): Promise<Company[]>;
  abstract findAllPaginated(options: PaginationOptions): Promise<PaginatedResult<Company>>;
  abstract count(): Promise<number>;
}