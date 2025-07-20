import { Entity } from '../../../../shared/core/entity';
import { UniqueEntityID } from '../../../../shared/core/unique-entity-id';
import { TenantModuleStatus } from '../enums/tenant-module-status.enum';
import { Segment } from '../enums/segment.enum';

interface TenantModuleProps {
  companyId: string;
  moduleId: string;
  segment: Segment;
  status: TenantModuleStatus;
  enabledAt: Date;
  disabledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class TenantModule extends Entity<TenantModuleProps> {
  private constructor(props: TenantModuleProps, id?: UniqueEntityID) {
    super(props, id?.toString());
  }

  static create(props: TenantModuleProps, id?: UniqueEntityID): TenantModule {
    return new TenantModule(props, id);
  }

  get companyId(): string {
    return this.props.companyId;
  }

  get moduleId(): string {
    return this.props.moduleId;
  }

  get segment(): Segment {
    return this.props.segment;
  }

  get status(): TenantModuleStatus {
    return this.props.status;
  }

  get enabledAt(): Date {
    return this.props.enabledAt;
  }

  get disabledAt(): Date | undefined {
    return this.props.disabledAt;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  // -------- Domain logic --------
  enable() {
    this.props.status = TenantModuleStatus.ENABLED;
    this.props.enabledAt = new Date();
    this.props.disabledAt = undefined;
    this.props.updatedAt = new Date();
  }

  disable() {
    this.props.status = TenantModuleStatus.DISABLED;
    this.props.disabledAt = new Date();
    this.props.updatedAt = new Date();
  }

  updateSegment(segment: Segment) {
    this.props.segment = segment;
    this.props.updatedAt = new Date();
  }

  private validate() {
    if (!this.props.companyId) {
      throw new Error('Company ID is required');
    }

    if (!this.props.moduleId) {
      throw new Error('Module ID is required');
    }

    if (!this.props.segment) {
      throw new Error('Segment is required');
    }

    if (!this.props.status) {
      throw new Error('Status is required');
    }
  }
} 