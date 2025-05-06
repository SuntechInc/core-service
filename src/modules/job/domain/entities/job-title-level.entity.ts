import { AggregateRoot } from '@/core/domain/aggregate-root'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'

interface JobTitleLevelProps {
  jobTitleVersionId: string
  label: string
  rank: number
  salaryMin: number
  salaryMax: number
  createdAt: Date
  updatedAt: Date
}

export class JobTitleLevel extends AggregateRoot<JobTitleLevelProps> {
  private constructor(props: JobTitleLevelProps, id?: UniqueEntityID) {
    super(props, id)
  }

  static create(props: JobTitleLevelProps, id?: UniqueEntityID): JobTitleLevel {
    const jobTitleLevel = new JobTitleLevel(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id,
    )

    return jobTitleLevel
  }

  get id(): UniqueEntityID {
    return this._id
  }

  get jobTitleVersionId(): string {
    return this.props.jobTitleVersionId
  }

  get label(): string {
    return this.props.label
  }

  get rank(): number {
    return this.props.rank
  }

  get salaryMin(): number {
    return this.props.salaryMin
  }

  get salaryMax(): number {
    return this.props.salaryMax
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date {
    return this.props.updatedAt
  }

  public updateLabel(label: string): void {
    this.props.label = label
    this.props.updatedAt = new Date()
  }

  public updateRank(rank: number): void {
    this.props.rank = rank
    this.props.updatedAt = new Date()
  }

  public updateSalaryMin(salaryMin: number): void {
    this.props.salaryMin = salaryMin
    this.props.updatedAt = new Date()
  }

  public updateSalaryMax(salaryMax: number): void {
    this.props.salaryMax = salaryMax
    this.props.updatedAt = new Date()
  }
} 