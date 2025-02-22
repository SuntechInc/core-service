import { Body, Controller, Post } from '@nestjs/common';
import { CreateCompanyDto } from '../../application/dtos/create-company.dto';
import { CreateCompanyUseCase } from '../../application/use-cases/create-company.use-case';
import { CompanyMapper } from '../../application/mappers/company.mapper';

@Controller('company')
export class CompanyController {
  constructor(private readonly createCompanyUseCase: CreateCompanyUseCase) {}

  @Post()
  async create(@Body() dto: CreateCompanyDto): Promise<any> {
    const company = CompanyMapper.fromDto(dto);
    return await this.createCompanyUseCase.create(company);
  }
}
