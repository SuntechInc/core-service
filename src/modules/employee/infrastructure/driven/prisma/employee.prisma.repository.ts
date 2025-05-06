import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/shared/infrastructure/persistence/prisma/prisma.service'
import { Employee } from '@/modules/employee/domain/entities/employee.entity'
import { EmploymentType } from '@/modules/employee/domain/enums/employment-type.enum'
import { EmployeeStatus } from '@/modules/employee/domain/enums/employee-status.enum'
import { IEmployeeRepository } from '@/modules/employee/application/repositories/employee.repository'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'
import { Prisma, Employee as PrismaEmployee, EmploymentType as PrismaEmploymentType, EmployeeStatus as PrismaEmployeeStatus } from '@prisma/client'

@Injectable()
export class EmployeePrismaRepository extends IEmployeeRepository {
  constructor(private readonly prisma: PrismaService) {
    super()
  }

  // ---------- helpers ----------
  private toDomain(raw: PrismaEmployee): Employee {
    return Employee.create(
      {
        name: raw.name,
        email: raw.email,
        phone: raw.phone,
        departmentId: raw.departmentId,
        currentJobTitleVersionId: raw.currentJobTitleVersionId,
        employmentType: raw.employmentType as EmploymentType,
        status: raw.status as EmployeeStatus,
        hiredAt: raw.hiredAt,
        leftAt: raw.leftAt,
        branchId: raw.branchId,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    )
  }

  // ---------- CRUD ----------
  async create(employee: Employee): Promise<Employee> {
    const raw = await this.prisma.employee.create({
      data: {
        name: employee.name,
        email: employee.email,
        phone: employee.phone,
        departmentId: employee.departmentId,
        currentJobTitleVersionId: employee.currentJobTitleVersionId,
        employmentType: employee.employmentType as unknown as PrismaEmploymentType,
        status: employee.status as unknown as PrismaEmployeeStatus,
        hiredAt: employee.hiredAt,
        leftAt: employee.leftAt,
        branchId: employee.branchId,
        createdAt: employee.createdAt,
        updatedAt: employee.updatedAt,
      },
    })

    return this.toDomain(raw)
  }

  async findById(id: string): Promise<Employee | null> {
    const raw = await this.prisma.employee.findUnique({
      where: { id },
    })

    return raw ? this.toDomain(raw) : null
  }

  async findAll(): Promise<Employee[]> {
    const employees = await this.prisma.employee.findMany()
    return employees.map((employee) => this.toDomain(employee))
  }

  async findAllByBranchId(branchId: string): Promise<Employee[]> {
    const employees = await this.prisma.employee.findMany({
      where: { branchId },
    })
    return employees.map((employee) => this.toDomain(employee))
  }

  async findAllByDepartmentId(departmentId: string): Promise<Employee[]> {
    const employees = await this.prisma.employee.findMany({
      where: { departmentId },
    })
    return employees.map((employee) => this.toDomain(employee))
  }

  async update(id: string, employee: Employee): Promise<Employee> {
    const raw = await this.prisma.employee.update({
      where: { id },
      data: {
        name: employee.name,
        email: employee.email,
        phone: employee.phone,
        departmentId: employee.departmentId,
        currentJobTitleVersionId: employee.currentJobTitleVersionId,
        employmentType: employee.employmentType as unknown as PrismaEmploymentType,
        status: employee.status as unknown as PrismaEmployeeStatus,
        hiredAt: employee.hiredAt,
        leftAt: employee.leftAt,
        branchId: employee.branchId,
        updatedAt: new Date(),
      },
    })

    return this.toDomain(raw)
  }

  async delete(id: string): Promise<void> {
    await this.prisma.employee.delete({
      where: { id },
    })
  }
} 