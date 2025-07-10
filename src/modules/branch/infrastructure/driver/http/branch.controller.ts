import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateBranchDto } from '@/modules/branch/application/dtos/create-branch.dto';
import { CreateBranchUseCase } from '@/modules/branch/application/use-cases/create-branch/create-branch.use-case';
import { ListBranchesUseCase } from '@/modules/branch/application/use-cases/list-branches/list-branches.use-case';
import { FindBranchByNameUseCase } from '@/modules/branch/application/use-cases/find-branch-by-name/find-branch-by-name.use-case';
import { SoftDeleteBranchUseCase } from '@/modules/branch/application/use-cases/soft-delete-branch/soft-delete-branch.use-case';
import { FilterBranchesUseCase } from '@/modules/branch/application/use-cases/filter-branches/filter-branches.use-case';
import { BranchMapper } from '@/modules/branch/application/mappers/branch.mapper';
import { ListBranchesRequestDto } from '@/modules/branch/application/dtos/list-branches/list-branches.request.dto';
import { ListBranchesResponseDto } from '@/modules/branch/application/dtos/list-branches/list-branches.response.dto';
import { FilterBranchesRequestDto } from '@/modules/branch/application/dtos/filter-branches/filter-branches.request.dto';
import { FilterBranchesResponseDto } from '@/modules/branch/application/dtos/filter-branches/filter-branches.response.dto';
import { ParseFilterPipe } from './parse-filter.pipe';

@Controller('branches')
export class BranchController {
  constructor(
    private readonly createUC: CreateBranchUseCase,
    private readonly findByNameUC: FindBranchByNameUseCase,
    private readonly findAllUC: ListBranchesUseCase,
    private readonly softDeleteUC: SoftDeleteBranchUseCase,
    private readonly filterUC: FilterBranchesUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateBranchDto, @Res() response: Response) {
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
        .json(BranchMapper.toResponseDto(result.getValue()))
    };
  }

  @Get('search/name/:name')
  @HttpCode(HttpStatus.OK)
  async findByName(
    @Param('name') name: string, 
    @Query('companyId') companyId: string,
    @Res() response: Response
  ) {
    const branches = await this.findByNameUC.execute(name, companyId);
    
    return {
      response: response
        .status(HttpStatus.OK)
        .json(branches.map(branch => BranchMapper.toResponseDto(branch)))
    };
  }

  @Get()
  async findAll(@Query() query: ListBranchesRequestDto, @Res() response: Response) {
    const result = await this.findAllUC.executePaginated(query);
    
    const responseDto = new ListBranchesResponseDto(
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

  @Get('filter')
  async filterBranches(@Query(ParseFilterPipe) query: FilterBranchesRequestDto, @Res() response: Response) {
    console.log('query.filter', query.filter);
    
    const result = await this.filterUC.execute(query);

    
    const responseDto = new FilterBranchesResponseDto(
      result.data,
      result.page,
      result.size,
      result.total,
      query.filter
    );
    
    return {
      response: response
        .status(HttpStatus.OK)
        .json(responseDto)
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async softDelete(
    @Param('id') id: string,
    @Res() response: Response
  ) {
    const result = await this.softDeleteUC.execute(id);
    
    if (result.isFailure) {
      return {
        response: response
          .status((result.errorValue() as any).statusCode || 400)
          .json({ message: result.errorValue().message })
      };
    }

    return {
      response: response
        .status(HttpStatus.OK)
        .json(BranchMapper.toResponseDto(result.getValue()))
    };
  }
} 