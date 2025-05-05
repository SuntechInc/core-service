import { Entity } from '../../../../shared/core/entity';
import { UniqueEntityID } from '../../../../shared/core/unique-entity-id';
import { BranchStatus } from '../enums/branch-status.enum';

interface BranchProps {
  name: string;
  officialId?: string;
  sigla?: string;
  email?: string;
  phone?: string;
  responsible?: string;
  isHeadquarter: boolean;
  status: BranchStatus;
  companyId: string;
  addressId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Branch extends Entity<BranchProps> {
  private constructor(props: BranchProps, id?: UniqueEntityID) {
    super(props, id?.toString());
  }

  static create(props: BranchProps, id?: UniqueEntityID): Branch {
    return new Branch(props, id);
  }

  get name(): string {
    return this.props.name;
  }

  get officialId(): string | undefined {
    return this.props.officialId;
  }

  get sigla(): string | undefined {
    return this.props.sigla;
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
    return this.props.isHeadquarter;
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