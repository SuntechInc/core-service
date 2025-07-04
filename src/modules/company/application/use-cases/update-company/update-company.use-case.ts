import { Injectable } from '@nestjs/common';
import { ICompanyRepository } from '../../ports/company.repository';
import { Company } from '@/modules/company/domain/entities/company.entity';
import { UpdateCompanyDto } from '@/modules/company/application/dtos/update-company.dto';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';

@Injectable()
export class UpdateCompanyUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute(id: string, dto: UpdateCompanyDto): Promise<Result<Company>> {
    try {
      // Verificar se a empresa existe
      const existingCompany = await this.companyRepository.findById(id);
      if (!existingCompany) {
        return Result.fail<Company>(
          AppError.NotFound(`Company with id ${id} not found`),
        );
      }

      // Validações de negócio antes da atualização
      const validationResult = await this.validateBusinessRules(id, dto);
      if (validationResult.isFailure) {
        return Result.fail<Company>(validationResult.errorValue());
      }

      // Aplicar as mudanças
      const updatedCompany = this.applyUpdates(existingCompany, dto);

      // Salvar no banco
      const savedCompany = await this.companyRepository.update(updatedCompany);
      return Result.ok<Company>(savedCompany);
    } catch (error) {
      return Result.fail<Company>(
        AppError.UnexpectedError(error),
      );
    }
  }

  private async validateBusinessRules(id: string, dto: UpdateCompanyDto): Promise<Result<void>> {
    // Verificar se já existe empresa com mesmo CNPJ (se estiver sendo alterado)
    if (dto.taxId) {
      const existingByTaxId = await this.companyRepository.findByTaxId(dto.taxId);
      if (existingByTaxId && existingByTaxId.id !== id) {
        return Result.fail<void>(
          AppError.Conflict(`Company with tax ID ${dto.taxId} already exists`),
        );
      }
    }

    // Verificar se já existe empresa com mesmo email (se estiver sendo alterado)
    if (dto.email) {
      const existingByEmail = await this.companyRepository.findByEmail(dto.email);
      if (existingByEmail && existingByEmail.id !== id) {
        return Result.fail<void>(
          AppError.Conflict(`Company with email ${dto.email} already exists`),
        );
      }
    }

    // Verificar se já existe empresa com mesmo trading name (se estiver sendo alterado)
    if (dto.tradingName) {
      const existingByTradingName = await this.companyRepository.findByTradingName(dto.tradingName);
      const exactMatch = existingByTradingName.find(company => 
        company.tradingName.toLowerCase() === dto.tradingName!.toLowerCase() && 
        company.id !== id
      );
      if (exactMatch) {
        return Result.fail<void>(
          AppError.Conflict(`Company with trading name "${dto.tradingName}" already exists`),
        );
      }
    }

    return Result.ok<void>();
  }

  private applyUpdates(company: Company, dto: UpdateCompanyDto): Company {
    // Criar nova instância com as mudanças aplicadas
    const updatedProps = {
      tradingName: dto.tradingName ?? company.tradingName,
      legalName: dto.legalName ?? company.legalName,
      taxId: dto.taxId ?? company.taxId,
      taxCountry: dto.taxCountry ?? company.taxCountry,
      email: dto.email ?? company.email,
      phone: dto.phone ?? company.phone,
      industry: dto.industry ?? company.industry,
      segment: dto.segment ?? company.segment,
      status: dto.status ?? company.status,
      addressId: company.addressId, // Não permitir alteração via update
      isBaseCompany: company.isBaseCompany, // Não permitir alteração via update
      createdAt: company.createdAt,
      updatedAt: new Date(),
    };

    return Company.create(updatedProps, new UniqueEntityID(company.id));
  }
} 