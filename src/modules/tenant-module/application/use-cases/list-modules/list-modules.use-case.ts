import { Injectable } from '@nestjs/common';
import { IModuleRepository } from '@/modules/tenant-module/application/ports/module.repository';
import { Module } from '@/modules/tenant-module/domain/entities/module.entity';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';

@Injectable()
export class ListModulesUseCase {
  constructor(
    private readonly moduleRepository: IModuleRepository,
  ) {}

  async execute(): Promise<Result<Module[]>> {
    try {
      console.log('[ListModulesUseCase] Buscando módulos disponíveis...');
      
      const modules = await this.moduleRepository.findAll();
      console.log('[ListModulesUseCase] Módulos encontrados:', modules.length);

      return Result.ok<Module[]>(modules);
    } catch (error) {
      console.error('[ListModulesUseCase] Erro inesperado:', error);
      return Result.fail<Module[]>(
        AppError.UnexpectedError(error),
      );
    }
  }
} 