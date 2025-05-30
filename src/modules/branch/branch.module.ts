import { Module } from '@nestjs/common';
import { PrismaModule } from '@/shared/infrastructure/database/prisma.module';
import { PrismaBranchRepository } from './infrastructure/driven/prisma/branch.prisma.repository';
import { IBranchRepository } from './application/ports/branch.repository';
import { CreateBranchUseCase } from './application/use-cases/create-branch/create-branch.use-case';
import { FindBranchByNameUseCase } from './application/use-cases/find-branch-by-name/find-branch-by-name.use-case';
import { FindAllBranchesUseCase } from './application/use-cases/find-all-branches/find-all-branches.use-case';
import { SoftDeleteBranchUseCase } from './application/use-cases/soft-delete-branch/soft-delete-branch.use-case';
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
    FindBranchByNameUseCase,
    FindAllBranchesUseCase,
    SoftDeleteBranchUseCase,
  ],
})
export class BranchModule {} 