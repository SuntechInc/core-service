import { Module } from '@nestjs/common';
import { PrismaModule } from '@/shared/infrastructure/database/prisma.module';
import { PrismaBranchRepository } from './infrastructure/driven/prisma/branch.prisma.repository';
import { IBranchRepository } from './application/ports/branch.repository';
import { CreateBranchUseCase } from './application/use-cases/create-branch/create-branch.use-case';
import { UpdateBranchUseCase } from './application/use-cases/update-branch/update-branch.use-case';
import { SoftDeleteBranchUseCase } from './application/use-cases/soft-delete-branch/soft-delete-branch.use-case';
import { FilterBranchesUseCase } from './application/use-cases/filter-branches/filter-branches.use-case';
import { BranchController } from './infrastructure/driver/http/branch.controller';

@Module({
  imports: [PrismaModule],
  controllers: [BranchController],
  providers: [
    // Adapter
    PrismaBranchRepository,
    { provide: IBranchRepository, useExisting: PrismaBranchRepository },

    // Use cases
    CreateBranchUseCase,
    UpdateBranchUseCase,
    SoftDeleteBranchUseCase,
    FilterBranchesUseCase,
  ],
})
export class BranchModule {} 