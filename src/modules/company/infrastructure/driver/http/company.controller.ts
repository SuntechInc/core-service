import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCompanyDto } from '@/modules/company/application/dtos/create-company.dto';
import { CreateCompanyUseCase } from '@/modules/company/application/use-cases/create-company.use-case';
import { CompanyMapper } from '@/modules/company/application/mappers/company.mapper';
// import { FindCompanyByIdUseCase } from '@/modules/company/application/use-cases/find-company-by-id.use-case';

@Controller('companies')
export class CompanyController {
  constructor(
    private readonly createUC: CreateCompanyUseCase,
    // private readonly findUC: FindCompanyByIdUseCase,
  ) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: CreateCompanyDto, @Res() res: Response) {
    const result = await this.createUC.execute(body);
    if (result.isErr()) {
      return res
        .status(result.unwrapErr().statusCode)
        .json({ message: result.unwrapErr().message });
    }
    return res.status(201).json(CompanyMapper.toResponseDto(result.unwrap()));
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