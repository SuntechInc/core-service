import { Entity } from '../../../../shared/core/entity';
import { UniqueEntityID } from '../../../../shared/core/unique-entity-id';
import { CompanyStatus } from '../enums/company-status.enum';
import { Industry } from '../enums/industry.enum';
import { Segment } from '../enums/segment.enum';

interface CompanyProps {
  tradingName: string;
  legalName?: string;
  taxId?: string;
  taxCountry?: string;
  email?: string;
  phone?: string;
  industry: Industry;
  segment: Segment;
  status: CompanyStatus;
  addressId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Company extends Entity<CompanyProps> {
  private constructor(props: CompanyProps, id?: UniqueEntityID) {
    super(props, id?.toString());
  }

  static create(props: CompanyProps, id?: UniqueEntityID): Company {
    return new Company(props, id);
  }

  get tradingName(): string {
    return this.props.tradingName;
  }

  get legalName(): string | undefined {
    return this.props.legalName;
  }

  get taxId(): string | undefined {
    return this.props.taxId;
  }

  get taxCountry(): string | undefined {
    return this.props.taxCountry;
  }

  get email(): string | undefined {
    return this.props.email;
  }

  get phone(): string | undefined {
    return this.props.phone;
  }

  get industry(): Industry {
    return this.props.industry;
  }

  get segment(): Segment {
    return this.props.segment;
  }

  get status(): CompanyStatus {
    return this.props.status;
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

  // -------- Domain logic --------
  activate() { this.props.status = CompanyStatus.ACTIVE; }
  deactivate() { this.props.status = CompanyStatus.INACTIVE; }
  suspend() { this.props.status = CompanyStatus.SUSPENDED; }
  close() { this.props.status = CompanyStatus.CLOSED; }
  cancel() { this.props.status = CompanyStatus.CANCELLED; }
  startTrial() { this.props.status = CompanyStatus.TRIAL; }

  private validate() {
    if (!this.props.tradingName || this.props.tradingName.trim().length < 3) {
      throw new Error('Company trading name must have at least 3 characters');
    }

    if (!this.props.legalName || this.props.legalName.trim().length < 3) {
      throw new Error('Company legal name must have at least 3 characters');
    }

    if (!this.props.taxId || this.props.taxId.trim().length < 11) {
      throw new Error('Tax ID must have at least 11 characters');
    }

    if (!this.props.email || !/^[\w-.]+@[\w-]+\.[\w-.]+$/.test(this.props.email)) {
      throw new Error('Invalid e-mail format');
    }

    if (!this.props.phone || this.props.phone.trim().length < 10) {
      throw new Error('Phone number must have at least 10 characters');
    }

    if (!this.props.industry) {
      throw new Error('Industry is required');
    }

    if (!this.props.segment) {
      throw new Error('Segment is required');
    }
  }
}
