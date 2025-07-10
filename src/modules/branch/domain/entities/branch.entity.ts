import { Entity } from '../../../../shared/core/entity';
import { BranchStatus } from '../enums/branch-status.enum';

interface BranchProps {
  taxId: string;
  name: string;
  code?: string;
  email?: string;
  phone?: string;
  responsible?: string;
  isHeadquarter?: boolean;
  status: BranchStatus;
  companyId: string;
  addressId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Branch extends Entity<BranchProps> {
  private constructor(props: BranchProps, id?: string) {
    super(props, id);
  }

  static create(props: BranchProps, id?: string): Branch {
    return new Branch(props, id);
  }

  get taxId(): string {
    return this.props.taxId;
  }

  get name(): string {
    return this.props.name;
  }

  get code(): string | undefined {
    return this.props.code;
  }

  get email(): string | undefined {
    return this.props.email;
  }

  get phone(): string | undefined {
    return this.props.phone;
  }

  get responsible(): string | undefined {
    return this.props.responsible;
  }

  get isHeadquarter(): boolean {
    return this.props.isHeadquarter ?? false;
  }

  get status(): BranchStatus {
    return this.props.status;
  }

  get companyId(): string {
    return this.props.companyId;
  }

  get addressId(): string | undefined {
    return this.props.addressId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
} 