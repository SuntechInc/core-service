import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCompanyDto } from '../../application/dtos/create-company.dto';
import { CreateCompanyUseCase } from '../../application/use-cases/create-company.use-case';
import { CompanyMapper } from '../../application/mappers/company.mapper';
import { FindCompanyByIdUseCase } from '../../application/use-cases/find-company-by-id.use-case';
import { UpdateCompanyUseCase } from '../../application/use-cases/update-company.use-case';
import { UpdateCompanyDto } from '../../application/dtos/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(
    private readonly createCompanyUseCase: CreateCompanyUseCase,
    private readonly findCompanyByIdUseCase: FindCompanyByIdUseCase,
    private readonly updateCompanyUseCase: UpdateCompanyUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateCompanyDto): Promise<any> {
    const company = CompanyMapper.fromDto(dto);
    return await this.createCompanyUseCase.create(company);
  }
  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.findCompanyByIdUseCase.execute(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateCompanyDto) {
    return await this.updateCompanyUseCase.execute(id, data);
  }
}
