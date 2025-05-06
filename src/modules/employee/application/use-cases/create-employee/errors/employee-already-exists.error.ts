export class EmployeeAlreadyExistsError extends Error {
  constructor(email: string) {
    super(`Employee with email ${email} already exists`)
    this.name = 'EmployeeAlreadyExistsError'
  }
} 