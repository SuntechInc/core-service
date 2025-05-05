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
import { FindBranchByNameUseCase } from '@/modules/branch/application/use-cases/find-branch-by-name/find-branch-by-name.use-case';
import { FindAllBranchesUseCase } from '@/modules/branch/application/use-cases/find-all-branches/find-all-branches.use-case';
import { SoftDeleteBranchUseCase } from '@/modules/branch/application/use-cases/soft-delete-branch/soft-delete-branch.use-case';
import { BranchMapper } from '@/modules/branch/application/mappers/branch.mapper';

@Controller('branches')
export class BranchController {
  constructor(
    private readonly createUC: CreateBranchUseCase,
    private readonly findByNameUC: FindBranchByNameUseCase,
    private readonly findAllUC: FindAllBranchesUseCase,
    private readonly softDeleteUC: SoftDeleteBranchUseCase,
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

  @Get('search')
  @HttpCode(HttpStatus.OK)
  async findByName(@Query('name') name: string, @Res() response: Response) {
    const result = await this.findByNameUC.execute(name);
    
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
        .json(result.getValue().map(branch => BranchMapper.toResponseDto(branch)))
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Res() response: Response) {
    const result = await this.findAllUC.execute();
    
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
        .json(result.getValue().map(branch => BranchMapper.toResponseDto(branch)))
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async softDelete(@Param('id') id: string, @Res() response: Response) {
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