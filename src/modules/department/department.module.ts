import { Module } from '@nestjs/common';
import { PrismaModule } from '@/shared/infrastructure/database/prisma.module';
import { PrismaDepartmentRepository } from './infrastructure/driven/prisma/department.prisma.repository';
import { IDepartmentRepository } from './application/ports/department.repository';
import { CreateDepartmentUseCase } from './application/use-cases/create-department/create-department.use-case';
import { UpdateDepartmentUseCase } from './application/use-cases/update-department/update-department.use-case';
import { SoftDeleteDepartmentUseCase } from './application/use-cases/soft-delete-department/soft-delete-department.use-case';
import { FilterDepartmentsUseCase } from './application/use-cases/filter-departments/filter-departments.use-case';
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
    UpdateDepartmentUseCase,
    SoftDeleteDepartmentUseCase,
    FilterDepartmentsUseCase,
  ],
})
export class DepartmentModule {} 