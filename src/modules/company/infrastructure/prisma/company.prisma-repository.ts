import { CreateCompanyDto } from '../../application/dtos/create-company.dto';
import { Company } from '../../domain/entities/company.entity';
import { CompanyRepository } from '../../domain/repositories/company.repository';

export class CompanyPrismaRepository implements CompanyRepository {
  create(company: CreateCompanyDto): Promise<Company> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Company | null> {
    throw new Error('Method not implemented.');
  }
  findByTaxId(taxId: string): Promise<Company | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Company[]> {
    throw new Error('Method not implemented.');
  }
  update(id: string, company: Partial<Company>): Promise<Company> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
