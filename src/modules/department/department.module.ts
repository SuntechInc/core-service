import { Module } from '@nestjs/common';
import { PrismaModule } from '@/shared/infrastructure/database/prisma.module';
import { PrismaDepartmentRepository } from './infrastructure/driven/prisma/department.prisma.repository';
import { IDepartmentRepository } from './application/ports/department.repository';
import { CreateDepartmentUseCase } from './application/use-cases/create-department/create-department.use-case';
import { FindDepartmentByNameUseCase } from './application/use-cases/find-department-by-name/find-department-by-name.use-case';
import { FindAllDepartmentsUseCase } from './application/use-cases/find-all-departments/find-all-departments.use-case';
import { SoftDeleteDepartmentUseCase } from './application/use-cases/soft-delete-department/soft-delete-department.use-case';
import { DepartmentController } from './infrastructure/driver/http/department.controller';

@Module({
  imports: [PrismaModule],
  controllers: [DepartmentController],
  providers: [
    // Adapter
    PrismaDepartmentRepository,
    { provide: IDepartmentRepository, useExisting: PrismaDepartmentRepository },

    // Use cases
    CreateDepartmentUseCase,
    FindDepartmentByNameUseCase,
    FindAllDepartmentsUseCase,
    SoftDeleteDepartmentUseCase,
  ],
})
export class DepartmentModule {} 