import { Branch } from "@/modules/branch/domain/entities/branch.entity";

export class BranchListItemDto {
  id: string;
  taxId: string;
  name: string;
  code?: string;
  email?: string;
  phone?: string;
  responsible?: string;
  isHeadquarter: boolean;
  status: string;
  companyId: string;
  addressId?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(branch: Branch) {
    this.id = branch.id;
    this.taxId = branch.taxId;
    this.name = branch.name;
    this.code = branch.code;
    this.email = branch.email;
    this.phone = branch.phone;
    this.responsible = branch.responsible;
    this.isHeadquarter = branch.isHeadquarter;
    this.status = branch.status;
    this.companyId = branch.companyId;
    this.addressId = branch.addressId;
    this.createdAt = branch.createdAt;
    this.updatedAt = branch.updatedAt;
  }
}

export class ListBranchesResponseDto {
  data: BranchListItemDto[];
  pagination: {
    page: number;
    size: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };

  constructor(branches: Branch[], page: number, size: number, total: number) {
    this.data = branches.map(branch => new BranchListItemDto(branch));
    this.pagination = {
      page,
      size,
      total,
      totalPages: Math.ceil(total / size),
      hasNext: page < Math.ceil(total / size),
      hasPrevious: page > 1,
    };
  }
} 