import { Company } from '../entities/company.entity';

export abstract class CompanyRepository {
  abstract create(entity: Company): Promise<Company>;
  abstract findById(id: string): Promise<Company>;
  // abstract findByTaxId(taxId: string): Promise<Company | null>;
  // abstract findAll(): Promise<Company[]>;
  abstract update(id: string, company: Partial<Company>): Promise<Company>;
  // abstract delete(id: string): Promise<void>;
}
