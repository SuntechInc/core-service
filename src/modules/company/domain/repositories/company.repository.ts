import { CreateCompanyDto } from '../../application/dtos/create-company.dto';
import { Company } from '../entities/company.entity';

export abstract class CompanyRepository {
  abstract create(company: CreateCompanyDto): Promise<Company>;
  abstract findById(id: string): Promise<Company | null>;
  abstract findByTaxId(taxId: string): Promise<Company | null>;
  abstract findAll(): Promise<Company[]>;
  abstract update(id: string, company: Partial<Company>): Promise<Company>;
  abstract delete(id: string): Promise<void>;
}
