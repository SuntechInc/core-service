import { Injectable } from '@nestjs/common';
import { ICompanyRepository } from '@/modules/company/application/ports/company.repository';
import { Company } from '@/modules/company/domain/entities/company.entity';
import { CreateCompanyDto } from '@/modules/company/application/dtos/create-company.dto';
import { Result } from '@/shared/core/result';
import { AppError } from '@/shared/core/app-error';
import { UniqueEntityID } from '@/shared/core/unique-entity-id';
import { CompanyStatus } from '@/modules/company/domain/enums/company-status.enum';

@Injectable()
export class CreateCompanyUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute(dto: CreateCompanyDto): Promise<Result<Company>> {
    try {
      console.log('[CreateCompanyUseCase] Iniciando execução com DTO:', dto);
      // Validações de negócio antes da criação
      const validationResult = await this.validateBusinessRules(dto);
      if (validationResult.isFailure) {
        console.log('[CreateCompanyUseCase] Falha na validação de regras de negócio:', validationResult.errorValue());
        return Result.fail<Company>(validationResult.errorValue());
      }

      console.log('[CreateCompanyUseCase] Validação de negócio passou, criando entidade Company...');
      const company = Company.create({
        tradingName: dto.tradingName,
        legalName: dto.legalName,
        taxId: dto.taxId,
        taxCountry: dto.taxCountry,
        email: dto.email,
        phone: dto.phone,
        industry: dto.industry,
        segment: dto.segment,
        status: dto.status,
        addressId: dto.addressId,
        isBaseCompany: dto.isBaseCompany,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, new UniqueEntityID());
      console.log('[CreateCompanyUseCase] Entidade Company criada:', company);

      const createdCompany = await this.companyRepository.create(company);
      console.log('[CreateCompanyUseCase] Empresa persistida no repositório:', createdCompany);
      return Result.ok<Company>(createdCompany);
    } catch (error) {
      console.error('[CreateCompanyUseCase] Erro inesperado:', error);
      return Result.fail<Company>(
        AppError.UnexpectedError(error),
      );
    }
  }

  private async validateBusinessRules(dto: CreateCompanyDto): Promise<Result<void>> {
    try {
      // Verificar se já existe empresa com mesmo CNPJ
      if (dto.taxId) {
        const existingByTaxId = await this.companyRepository.findByTaxId(dto.taxId);
        if (existingByTaxId) {
          console.log('[CreateCompanyUseCase] Já existe empresa com taxId:', dto.taxId);
          return Result.fail<void>(
            AppError.Conflict(`Company with tax ID ${dto.taxId} already exists`),
          );
        }
      }

      // Verificar se já existe empresa com mesmo email
      if (dto.email) {
        const existingByEmail = await this.companyRepository.findByEmail(dto.email);
        if (existingByEmail) {
          console.log('[CreateCompanyUseCase] Já existe empresa com email:', dto.email);
          return Result.fail<void>(
            AppError.Conflict(`Company with email ${dto.email} already exists`),
          );
        }
      }

      // Verificar se já existe empresa com mesmo trading name (busca exata)
      const existingByTradingName = await this.companyRepository.findByTradingName(dto.tradingName);
      const exactMatch = existingByTradingName.find(company => 
        company.tradingName.toLowerCase() === dto.tradingName.toLowerCase()
      );
      if (exactMatch) {
        console.log('[CreateCompanyUseCase] Já existe empresa com tradingName:', dto.tradingName);
        return Result.fail<void>(
          AppError.Conflict(`Company with trading name "${dto.tradingName}" already exists`),
        );
      }

      // Verificar se já existe uma base company quando tentando criar outra
      if (dto.isBaseCompany) {
        const existingBaseCompany = await this.companyRepository.findBaseCompany();
        if (existingBaseCompany) {
          console.log('[CreateCompanyUseCase] Já existe uma base company.');
          return Result.fail<void>(
            AppError.Conflict('A base company already exists. Only one base company is allowed.'),
          );
        }
      }

      return Result.ok<void>();
    } catch (err) {
      console.error('[CreateCompanyUseCase] Erro ao validar regras de negócio:', err);
      return Result.fail<void>(AppError.UnexpectedError(err));
    }
  }
}
