import { Company } from "../../domain/entities/company.entity";


export abstract class ICompanyRepository {
  abstract create(company: Company): Promise<Company>;
  abstract findById(id: string): Promise<Company | null>;
  abstract findByTaxId(taxId: string): Promise<Company | null>;
  abstract update(company: Company): Promise<Company>;
  abstract delete(id: string): Promise<void>;
  abstract findAll(): Promise<Company[]>;
}