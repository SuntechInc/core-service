import { UniqueEntityID } from './unique-entity-id'

export abstract class AggregateRoot<Props> {
  protected props: Props
  protected _id: UniqueEntityID

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }

  get id(): UniqueEntityID {
    return this._id
  }

  equals(aggregate: AggregateRoot<Props>) {
    if (aggregate === null || aggregate === undefined) {
      return false
    }

    if (this === aggregate) {
      return true
    }

    return this._id.equals(aggregate._id)
  }
} 