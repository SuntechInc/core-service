import { CompanyStatus } from '../value-objects/company-status.enum';
import { Industry } from '../value-objects/industry.enum';
import { Segment } from '../value-objects/segment.enum';

export interface CompanyProps {
  id?: string;
  tradingName: string;
  legalName: string;
  taxId: string;
  taxCountry?: string;
  email: string;
  phone: string;
  industry: Industry;
  segment: Segment;
  status?: CompanyStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Company {
  private readonly props: Required<CompanyProps>;

  constructor(props: CompanyProps) {
    this.props = {
      ...props,
      id: props.id ?? crypto.randomUUID(),
      taxCountry: props.taxCountry ?? 'BR',
      status: props.status ?? CompanyStatus.ACTIVE,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };

    this.validate();
  }

  // -------- Getters --------
  get id() { return this.props.id; }
  get tradingName() { return this.props.tradingName; }
  get legalName() { return this.props.legalName; }
  get taxId() { return this.props.taxId; }
  get taxCountry() { return this.props.taxCountry; }
  get email() { return this.props.email; }
  get phone() { return this.props.phone; }
  get industry() { return this.props.industry; }
  get segment() { return this.props.segment; }
  get status() { return this.props.status; }
  get createdAt() { return this.props.createdAt; }
  get updatedAt() { return this.props.updatedAt; }

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
