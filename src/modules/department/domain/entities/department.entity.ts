import { Entity } from '../../../../shared/core/entity';
import { DepartmentStatus } from '../enums/department-status.enum';

interface DepartmentProps {
  name: string;
  description?: string;
  status: DepartmentStatus;
  branchId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Department extends Entity<DepartmentProps> {
  private constructor(props: DepartmentProps, id?: string) {
    super(props, id);
  }

  static create(props: DepartmentProps, id?: string): Department {
    return new Department(props, id);
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  get status(): DepartmentStatus {
    return this.props.status;
  }

  get branchId(): string {
    return this.props.branchId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
} 