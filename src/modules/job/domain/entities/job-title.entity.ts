import { AggregateRoot } from '@/core/domain/aggregate-root'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'

interface JobTitleProps {
  name: string
  description?: string
  createdAt: Date
  updatedAt: Date
  isActive: boolean
}

export class JobTitle extends AggregateRoot<JobTitleProps> {
  private constructor(props: JobTitleProps, id?: UniqueEntityID) {
    super(props, id)
  }

  static create(props: JobTitleProps, id?: UniqueEntityID): JobTitle {
    const jobTitle = new JobTitle(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
        isActive: props.isActive ?? true,
      },
      id,
    )

    return jobTitle
  }

  get id(): UniqueEntityID {
    return this._id
  }

  get name(): string {
    return this.props.name
  }

  get description(): string | undefined {
    return this.props.description
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date {
    return this.props.updatedAt
  }

  get isActive(): boolean {
    return this.props.isActive
  }

  public updateName(name: string): void {
    this.props.name = name
    this.props.updatedAt = new Date()
  }

  public updateDescription(description: string): void {
    this.props.description = description
    this.props.updatedAt = new Date()
  }

  public deactivate(): void {
    this.props.isActive = false
    this.props.updatedAt = new Date()
  }
} 