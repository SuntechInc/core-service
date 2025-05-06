import { AggregateRoot } from '@/core/domain/aggregate-root'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'
import { JobTitle } from './job-title.entity'
import { JobTitleLevel } from './job-title-level.entity'

interface JobTitleVersionProps {
  jobTitleId: string
  version: number
  description?: string
  responsibilities?: string[]
  requirements?: string[]
  createdAt: Date
  updatedAt: Date
}

export class JobTitleVersion extends AggregateRoot<JobTitleVersionProps> {
  private constructor(props: JobTitleVersionProps, id?: UniqueEntityID) {
    super(props, id)
  }

  static create(props: JobTitleVersionProps, id?: UniqueEntityID): JobTitleVersion {
    const jobTitleVersion = new JobTitleVersion(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id,
    )

    return jobTitleVersion
  }

  get id(): UniqueEntityID {
    return this._id
  }

  get jobTitleId(): string {
    return this.props.jobTitleId
  }

  get version(): number {
    return this.props.version
  }

  get description(): string | undefined {
    return this.props.description
  }

  get responsibilities(): string[] | undefined {
    return this.props.responsibilities
  }

  get requirements(): string[] | undefined {
    return this.props.requirements
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date {
    return this.props.updatedAt
  }

  public updateVersion(version: number): void {
    this.props.version = version
    this.props.updatedAt = new Date()
  }

  public updateDescription(description: string): void {
    this.props.description = description
    this.props.updatedAt = new Date()
  }

  public updateResponsibilities(responsibilities: string[]): void {
    this.props.responsibilities = responsibilities
    this.props.updatedAt = new Date()
  }

  public updateRequirements(requirements: string[]): void {
    this.props.requirements = requirements
    this.props.updatedAt = new Date()
  }
} 