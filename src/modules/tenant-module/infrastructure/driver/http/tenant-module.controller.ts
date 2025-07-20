import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { EnableCompanyModuleDto } from '@/modules/tenant-module/application/dtos/enable-company-module.dto';
import { EnableCompanyModuleUseCase } from '@/modules/tenant-module/application/use-cases/enable-company-module/enable-company-module.use-case';
import { ListModulesUseCase } from '@/modules/tenant-module/application/use-cases/list-modules/list-modules.use-case';
import { ListCompanyModulesUseCase } from '@/modules/tenant-module/application/use-cases/list-company-modules/list-company-modules.use-case';
import { TenantModuleMapper } from '@/modules/tenant-module/application/mappers/tenant-module.mapper';
import { IModuleRepository } from '@/modules/tenant-module/application/ports/module.repository';

@Controller('companies')
export class TenantModuleController {
  constructor(
    private readonly enableModuleUC: EnableCompanyModuleUseCase,
    private readonly listModulesUC: ListModulesUseCase,
    private readonly listCompanyModulesUC: ListCompanyModulesUseCase,
    private readonly moduleRepository: IModuleRepository,
  ) {}

  @Get('modules')
  async listModules(@Res() response: Response) {
    console.log('Listando módulos disponíveis...');
    
    try {
      const result = await this.listModulesUC.execute();
      console.log('Resultado do use case:', result);

      if (result.isFailure) {
        console.log('Erro no use case:', result.errorValue());
        return {
          response: response
            .status((result.errorValue() as any).statusCode || 400)
            .json({ message: result.errorValue().message })
        };
      }

      const modules = result.getValue();
      const dtos = modules.map(module => TenantModuleMapper.toModuleResponseDto(module));
      console.log('DTOs de resposta:', dtos);

      return {
        response: response
          .status(HttpStatus.OK)
          .json(dtos)
      };
    } catch (err) {
      console.error('Erro inesperado:', err);
      return {
        response: response
          .status(500)
          .json({ message: 'Erro inesperado', error: err.message })
      };
    }
  }

  @Get(':companyId/modules')
  async listCompanyModules(
    @Param('companyId') companyId: string,
    @Res() response: Response,
  ) {
    console.log('Listando módulos da empresa:', companyId);
    
    try {
      const result = await this.listCompanyModulesUC.execute(companyId);
      console.log('Resultado do use case:', result);

      if (result.isFailure) {
        console.log('Erro no use case:', result.errorValue());
        return {
          response: response
            .status((result.errorValue() as any).statusCode || 400)
            .json({ message: result.errorValue().message })
        };
      }

      const companyModules = result.getValue();
      const dtos = companyModules.map(({ tenantModule, module }) => 
        TenantModuleMapper.toResponseDto(tenantModule, module)
      );
      console.log('DTOs de resposta:', dtos);

      return {
        response: response
          .status(HttpStatus.OK)
          .json(dtos)
      };
    } catch (err) {
      console.error('Erro inesperado:', err);
      return {
        response: response
          .status(500)
          .json({ message: 'Erro inesperado', error: err.message })
      };
    }
  }

  @Post(':companyId/modules')
  @HttpCode(HttpStatus.OK)
  async enableModule(
    @Param('companyId') companyId: string,
    @Body() body: EnableCompanyModuleDto,
    @Res() response: Response,
  ) {
    console.log('Recebido body:', body);
    console.log('Company ID:', companyId);
    
    try {
      const result = await this.enableModuleUC.execute(companyId, body);
      console.log('Resultado do use case:', result);

      if (result.isFailure) {
        console.log('Erro no use case:', result.errorValue());
        return {
          response: response
            .status((result.errorValue() as any).statusCode || 400)
            .json({ message: result.errorValue().message })
        };
      }

      const tenantModule = result.getValue();
      
      // Buscar informações do módulo para a resposta
      const module = await this.moduleRepository.findById(tenantModule.moduleId);
      if (!module) {
        return {
          response: response
            .status(500)
            .json({ message: 'Erro interno: módulo não encontrado após criação' })
        };
      }

      const dto = TenantModuleMapper.toResponseDto(tenantModule, module);
      console.log('DTO de resposta:', dto);

      return {
        response: response
          .status(HttpStatus.OK)
          .json(dto)
      };
    } catch (err) {
      console.error('Erro inesperado:', err);
      return {
        response: response
          .status(500)
          .json({ message: 'Erro inesperado', error: err.message })
      };
    }
  }
} 