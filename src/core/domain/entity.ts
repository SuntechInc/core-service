import { UniqueEntityID } from './unique-entity-id'

export abstract class Entity<Props> {
  protected props: Props
  protected _id: UniqueEntityID

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }

  get id(): UniqueEntityID {
    return this._id
  }

  equals(entity: Entity<Props>) {
    if (entity === null || entity === undefined) {
      return false
    }

    if (this === entity) {
      return true
    }

    return this._id.equals(entity._id)
  }
} 