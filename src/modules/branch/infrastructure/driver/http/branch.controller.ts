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
import { CreateBranchDto } from '@/modules/branch/application/dtos/create-branch.dto';
import { CreateBranchUseCase } from '@/modules/branch/application/use-cases/create-branch/create-branch.use-case';
import { BranchMapper } from '@/modules/branch/application/mappers/branch.mapper';

@Controller('branches')
export class BranchController {
  constructor(
    private readonly createUC: CreateBranchUseCase,
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
} 