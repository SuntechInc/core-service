import { Entity } from '../../../../shared/core/entity';
import { UniqueEntityID } from '../../../../shared/core/unique-entity-id';

interface ModuleProps {
  code: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Module extends Entity<ModuleProps> {
  private constructor(props: ModuleProps, id?: UniqueEntityID) {
    super(props, id?.toString());
  }

  static create(props: ModuleProps, id?: UniqueEntityID): Module {
    return new Module(props, id);
  }

  get code(): string {
    return this.props.code;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  private validate() {
    if (!this.props.code || this.props.code.trim().length === 0) {
      throw new Error('Module code is required');
    }

    if (!this.props.name || this.props.name.trim().length === 0) {
      throw new Error('Module name is required');
    }
  }
} 