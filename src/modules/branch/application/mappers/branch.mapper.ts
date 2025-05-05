import { Branch } from '../../domain/entities/branch.entity';

export class BranchMapper {
  static toResponseDto(branch: Branch) {
    return {
      id: branch.id.toString(),
      name: branch.name,
      officialId: branch.officialId,
      sigla: branch.sigla,
      email: branch.email,
      phone: branch.phone,
      responsible: branch.responsible,
      isHeadquarter: branch.isHeadquarter,
      status: branch.status,
      companyId: branch.companyId,
      addressId: branch.addressId,
      createdAt: branch.createdAt,
      updatedAt: branch.updatedAt,
    };
  }
} 