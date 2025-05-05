import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCompanyDto } from '@/modules/company/application/dtos/create-company.dto';
import { CreateCompanyUseCase } from '@/modules/company/application/use-cases/create-company.use-case';
import { ListCompaniesUseCase } from '@/modules/company/application/use-cases/list-companies/list-companies.use-case';
import { FindCompanyByTaxIdUseCase } from '@/modules/company/application/use-cases/find-company-by-tax-id/find-company-by-tax-id.use-case';
import { CompanyMapper } from '@/modules/company/application/mappers/company.mapper';
// import { FindCompanyByIdUseCase } from '@/modules/company/application/use-cases/find-company-by-id.use-case';

@Controller('companies')
export class CompanyController {
  constructor(
    private readonly createUC: CreateCompanyUseCase,
    private readonly listUC: ListCompaniesUseCase,
    private readonly findTaxIdUC: FindCompanyByTaxIdUseCase,
    // private readonly findUC: FindCompanyByIdUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateCompanyDto, @Res() response: Response) {
    const result = await this.createUC.execute(body);
    
    if (result.isErr()) {
      return {
        response: response
          .status(result.unwrapErr().statusCode)
          .json({ message: result.unwrapErr().message })
      };
    }

    return {
      response: response
        .status(HttpStatus.CREATED)
        .json(CompanyMapper.toResponseDto(result.unwrap()))
    };
  }

  @Get()
  async findAll(@Res() response: Response) {
    const companies = await this.listUC.execute();
    
    return {
      response: response
        .status(HttpStatus.OK)
        .json(companies.map(company => CompanyMapper.toResponseDto(company)))
    };
  }

  @Get('tax-id/:taxId')
  async findByTaxId(@Param('taxId') taxId: string, @Res() response: Response) {
    const result = await this.findTaxIdUC.execute(taxId);
    
    if (result.isErr()) {
      return {
        response: response
          .status(result.unwrapErr().statusCode)
          .json({ message: result.unwrapErr().message })
      };
    }

    return {
      response: response
        .status(HttpStatus.OK)
        .json(CompanyMapper.toResponseDto(result.unwrap()))
    };
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string, @Res() res: Response) {
  //   const result = await this.findUC.execute(id);
  //   if (result.isErr()) {
  //     return res
  //       .status(result.unwrapErr().statusCode)
  //       .json({ message: result.unwrapErr().message });
  //   }
  //   return res.json(CompanyMapper.toResponseDto(result.unwrap()));
  // }

  // Exemplo de listagem paginada
  @Get()
  async list(
    @Query('skip') skip = 0,
    @Query('take') take = 20,
    @Res() res: Response,
  ) {
    // implementar ListCompaniesUseCase se/ quando precisar
    return res.status(501).json({ message: 'Not implemented' });
  }
} 