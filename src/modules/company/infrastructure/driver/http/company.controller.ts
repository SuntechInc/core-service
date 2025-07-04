import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCompanyDto } from '@/modules/company/application/dtos/create-company.dto';
import { CreateCompanyUseCase } from '@/modules/company/application/use-cases/create-company.use-case';
import { ListCompaniesUseCase } from '@/modules/company/application/use-cases/list-companies/list-companies.use-case';
import { FindCompanyByTaxIdUseCase } from '@/modules/company/application/use-cases/find-company-by-tax-id/find-company-by-tax-id.use-case';
import { FindCompaniesByTradingNameUseCase } from '@/modules/company/application/use-cases/find-companies-by-trading-name/find-companies-by-trading-name.use-case';
import { UpdateCompanyUseCase } from '@/modules/company/application/use-cases/update-company/update-company.use-case';
import { SoftDeleteCompanyUseCase } from '@/modules/company/application/use-cases/soft-delete-company/soft-delete-company.use-case';
import { CompanyMapper } from '@/modules/company/application/mappers/company.mapper';
import { ListCompaniesRequestDto } from '@/modules/company/application/dtos/list-companies/list-companies.request.dto';
import { ListCompaniesResponseDto } from '@/modules/company/application/dtos/list-companies/list-companies.response.dto';
import { UpdateCompanyDto } from '@/modules/company/application/dtos/update-company.dto';
// import { FindCompanyByIdUseCase } from '@/modules/company/application/use-cases/find-company-by-id.use-case';

@Controller('companies')
export class CompanyController {
  constructor(
    private readonly createUC: CreateCompanyUseCase,
    private readonly listUC: ListCompaniesUseCase,
    private readonly findTaxIdUC: FindCompanyByTaxIdUseCase,
    private readonly findByNameUC: FindCompaniesByTradingNameUseCase,
    private readonly updateUC: UpdateCompanyUseCase,
    private readonly softDeleteUC: SoftDeleteCompanyUseCase,
    // private readonly findUC: FindCompanyByIdUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateCompanyDto, @Res() response: Response) {
    const result = await this.createUC.execute(body);
    
    if (result.isFailure) {
      return {
        response: response
          .status((result.errorValue() as any).statusCode || 400)
          .json({ message: result.errorValue().message })
      };
    }

    return {
      response: response
        .status(HttpStatus.CREATED)
        .json(CompanyMapper.toResponseDto(result.getValue()))
    };
  }

  @Get()
  async findAll(@Query() query: ListCompaniesRequestDto, @Res() response: Response) {
    const result = await this.listUC.executePaginated(query);
    
    const responseDto = new ListCompaniesResponseDto(
      result.data,
      result.page,
      result.size,
      result.total
    );
    
    return {
      response: response
        .status(HttpStatus.OK)
        .json(responseDto)
    };
  }

  @Get('search/:taxId')
  async findByTaxId(@Param('taxId') taxId: string, @Res() response: Response) {
    const result = await this.findTaxIdUC.execute(taxId);
    
    if (result.isFailure) {
      return {
        response: response
          .status((result.errorValue() as any).statusCode || HttpStatus.BAD_REQUEST)
          .json({ message: result.errorValue().message })
      };
    }

    return {
      response: response
        .status(HttpStatus.OK)
        .json(CompanyMapper.toResponseDto(result.getValue()))
    };
  }

  @Get('search/name/:tradingName')
  async findByTradingName(@Param('tradingName') tradingName: string, @Res() response: Response) {
    const companies = await this.findByNameUC.execute(tradingName);
    
    return {
      response: response
        .status(HttpStatus.OK)
        .json(companies.map(company => CompanyMapper.toResponseDto(company)))
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() body: UpdateCompanyDto, @Res() response: Response) {
    const result = await this.updateUC.execute(id, body);
    
    if (result.isFailure) {
      return {
        response: response
          .status((result.errorValue() as any).statusCode || HttpStatus.BAD_REQUEST)
          .json({ message: result.errorValue().message })
      };
    }

    return {
      response: response
        .status(HttpStatus.OK)
        .json(CompanyMapper.toResponseDto(result.getValue()))
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

  // Endpoint alternativo para compatibilidade (mantido por enquanto)
  @Get('all')
  async findAllWithoutPagination(@Res() response: Response) {
    const companies = await this.listUC.execute();
    
    return {
      response: response
        .status(HttpStatus.OK)
        .json(companies.map(company => CompanyMapper.toResponseDto(company)))
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async softDelete(@Param('id') id: string, @Res() response: Response) {
    const result = await this.softDeleteUC.execute(id);
    if (result.isFailure) {
      return {
        response: response.status((result.errorValue() as any).statusCode || 400).json({ message: result.errorValue().message })
      };
    }
    return {
      response: response.status(HttpStatus.NO_CONTENT).json({ message: 'Company set to INACTIVE (soft deleted)' })
    };
  }
} 