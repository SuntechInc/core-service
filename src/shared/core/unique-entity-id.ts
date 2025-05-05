export class UniqueEntityID {
  private readonly value: string;

  constructor(id?: string) {
    this.value = id || crypto.randomUUID();
  }

  public equals(id?: UniqueEntityID): boolean {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof UniqueEntityID)) {
      return false;
    }
    return id.toValue() === this.value;
  }

  public toString(): string {
    return this.value;
  }

  public toValue(): string {
    return this.value;
  }
} 