import { Injectable } from '@nestjs/common';
import { ITenantModuleRepository } from '@/modules/tenant-module/application/ports/tenant-module.repository';
import { IModuleRepository } from '@/modules/tenant-module/application/ports/module.repository';
import { TenantModule } from '@/modules/tenant-module/domain/entities/tenant-module.entity';
import { Module } from '@/modules/tenant-module/domain/entities/module.entity';
import { EnableCompanyModuleDto } from '@/modules/tenant-module/application/dtos/enable-company-module.dto';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';
import { TenantModuleStatus } from '@/modules/tenant-module/domain/enums/tenant-module-status.enum';

@Injectable()
export class EnableCompanyModuleUseCase {
  constructor(
    private readonly tenantModuleRepository: ITenantModuleRepository,
    private readonly moduleRepository: IModuleRepository,
  ) {}

  async execute(companyId: string, dto: EnableCompanyModuleDto): Promise<Result<TenantModule>> {
    try {
      console.log('[EnableCompanyModuleUseCase] Iniciando validação de negócio...');
      
      const validationResult = await this.validateBusinessRules(companyId, dto);
      if (validationResult.isFailure) {
        return Result.fail<TenantModule>(validationResult.errorValue());
      }

      const module = validationResult.getValue();
      console.log('[EnableCompanyModuleUseCase] Módulo encontrado:', module.code);

      // Verificar se já existe um TenantModule para esta empresa e módulo
      const existingTenantModule = await this.tenantModuleRepository.findByCompanyAndModule(
        companyId,
        module.id,
      );

      let tenantModule: TenantModule;

      if (existingTenantModule) {
        console.log('[EnableCompanyModuleUseCase] TenantModule existente encontrado, atualizando...');
        // Atualizar o existente
        existingTenantModule.enable();
        existingTenantModule.updateSegment(dto.segment);
        tenantModule = existingTenantModule;
      } else {
        console.log('[EnableCompanyModuleUseCase] Criando novo TenantModule...');
        // Criar novo
        tenantModule = TenantModule.create({
          companyId,
          moduleId: module.id,
          segment: dto.segment,
          status: TenantModuleStatus.ENABLED,
          enabledAt: new Date(),
          disabledAt: undefined,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      const savedTenantModule = await this.tenantModuleRepository.upsert(tenantModule);
      console.log('[EnableCompanyModuleUseCase] TenantModule salvo com sucesso');

      // TODO: Publicar evento de mensageria
      await this.publishCompanyModuleEnabledEvent(companyId, module.code, dto.segment);

      return Result.ok<TenantModule>(savedTenantModule);
    } catch (error) {
      console.error('[EnableCompanyModuleUseCase] Erro inesperado:', error);
      return Result.fail<TenantModule>(
        AppError.UnexpectedError(error),
      );
    }
  }

  private async validateBusinessRules(
    companyId: string,
    dto: EnableCompanyModuleDto,
  ): Promise<Result<Module>> {
    try {
      // Validar se o módulo existe
      const module = await this.moduleRepository.findByCode(dto.moduleCode);
      if (!module) {
        console.log('[EnableCompanyModuleUseCase] Módulo não encontrado:', dto.moduleCode);
        return Result.fail<Module>(
          AppError.NotFound(`Module with code ${dto.moduleCode} not found`),
        );
      }

      // TODO: Validar se o segmento faz sentido (pode validar contra um allowedSegments)
      // Por enquanto, apenas validamos se é um segmento válido através do enum

      return Result.ok<Module>(module);
    } catch (err) {
      return Result.fail<Module>(AppError.UnexpectedError(err));
    }
  }

  private async publishCompanyModuleEnabledEvent(
    companyId: string,
    moduleCode: string,
    segment: string,
  ): Promise<void> {
    // TODO: Implementar publicação do evento
    // Por enquanto, apenas log
    console.log('[EnableCompanyModuleUseCase] Evento CompanyModuleEnabled publicado:', {
      companyId,
      moduleCode,
      segment,
      timestamp: new Date().toISOString(),
    });
  }
} 