import { AggregateRoot } from '@/core/domain/aggregate-root'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'
import { JobTitleVersion } from '@/modules/job/domain/entities/job-title-version.entity'
import { EmployeeStatus } from '../enums/employee-status.enum'
import { EmploymentType } from '../enums/employment-type.enum'

interface EmployeeProps {
  name: string
  email: string
  phone?: string
  departmentId: string
  currentJobTitleVersionId: string
  employmentType: EmploymentType
  status: EmployeeStatus
  hiredAt?: Date
  leftAt?: Date
  branchId: string
  createdAt: Date
  updatedAt: Date
}

export class Employee extends AggregateRoot<EmployeeProps> {
  private constructor(props: EmployeeProps, id?: UniqueEntityID) {
    super(props, id)
  }

  static create(props: EmployeeProps, id?: UniqueEntityID): Employee {
    const employee = new Employee(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id,
    )

    return employee
  }

  get id(): UniqueEntityID {
    return this._id
  }

  get name(): string {
    return this.props.name
  }

  get email(): string {
    return this.props.email
  }

  get phone(): string | undefined {
    return this.props.phone
  }

  get departmentId(): string {
    return this.props.departmentId
  }

  get currentJobTitleVersionId(): string {
    return this.props.currentJobTitleVersionId
  }

  get employmentType(): EmploymentType {
    return this.props.employmentType
  }

  get status(): EmployeeStatus {
    return this.props.status
  }

  get hiredAt(): Date | undefined {
    return this.props.hiredAt
  }

  get leftAt(): Date | undefined {
    return this.props.leftAt
  }

  get branchId(): string {
    return this.props.branchId
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date {
    return this.props.updatedAt
  }

  public updateName(name: string): void {
    this.props.name = name
    this.props.updatedAt = new Date()
  }

  public updateEmail(email: string): void {
    this.props.email = email
    this.props.updatedAt = new Date()
  }

  public updatePhone(phone: string): void {
    this.props.phone = phone
    this.props.updatedAt = new Date()
  }

  public updateDepartment(departmentId: string): void {
    this.props.departmentId = departmentId
    this.props.updatedAt = new Date()
  }

  public updateJobTitleVersion(jobTitleVersionId: string): void {
    this.props.currentJobTitleVersionId = jobTitleVersionId
    this.props.updatedAt = new Date()
  }

  public updateEmploymentType(employmentType: EmploymentType): void {
    this.props.employmentType = employmentType
    this.props.updatedAt = new Date()
  }

  public updateStatus(status: EmployeeStatus): void {
    this.props.status = status
    this.props.updatedAt = new Date()
  }

  public updateHiredAt(hiredAt: Date): void {
    this.props.hiredAt = hiredAt
    this.props.updatedAt = new Date()
  }

  public updateLeftAt(leftAt: Date): void {
    this.props.leftAt = leftAt
    this.props.updatedAt = new Date()
  }
} 