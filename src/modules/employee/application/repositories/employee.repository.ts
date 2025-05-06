import { Employee } from '../../domain/entities/employee.entity'

export abstract class IEmployeeRepository {
  abstract create(employee: Employee): Promise<Employee>
  abstract findById(id: string): Promise<Employee | null>
  abstract findAll(): Promise<Employee[]>
  abstract findAllByBranchId(branchId: string): Promise<Employee[]>
  abstract findAllByDepartmentId(departmentId: string): Promise<Employee[]>
  abstract update(id: string, employee: Employee): Promise<Employee>
  abstract delete(id: string): Promise<void>
} 