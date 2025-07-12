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
import { CreateBranchDto } from '@/modules/branch/application/dtos/create-branch.dto';
import { UpdateBranchDto } from '@/modules/branch/application/dtos/update-branch.dto';
import { CreateBranchUseCase } from '@/modules/branch/application/use-cases/create-branch/create-branch.use-case';
import { UpdateBranchUseCase } from '@/modules/branch/application/use-cases/update-branch/update-branch.use-case';
import { SoftDeleteBranchUseCase } from '@/modules/branch/application/use-cases/soft-delete-branch/soft-delete-branch.use-case';
import { FilterBranchesUseCase } from '@/modules/branch/application/use-cases/filter-branches/filter-branches.use-case';
import { BranchMapper } from '@/modules/branch/application/mappers/branch.mapper';
import { FilterBranchesRequestDto } from '@/modules/branch/application/dtos/filter-branches/filter-branches.request.dto';
import { FilterBranchesResponseDto } from '@/modules/branch/application/dtos/filter-branches/filter-branches.response.dto';
import { FilterPipeFactory } from '@/shared/infrastructure/filters/filter-pipe.factory';

@Controller('branches')
export class BranchController {
  constructor(
    private readonly createUC: CreateBranchUseCase,
    private readonly updateUC: UpdateBranchUseCase,
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

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() body: UpdateBranchDto,
    @Res() response: Response
  ) {
    const result = await this.updateUC.execute(id, body);
    
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





  @Get('filter')
  async filterBranches(@Query(FilterPipeFactory.createBranchFilterPipe()) query: FilterBranchesRequestDto, @Res() response: Response) {
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