import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from '@/modules/department/application/ports/department.repository';
import { Department } from '@/modules/department/domain/entities/department.entity';

@Injectable()
export class FindDepartmentByNameUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(name: string): Promise<Department[]> {
    return this.departmentRepository.findByName(name);
  }
} 