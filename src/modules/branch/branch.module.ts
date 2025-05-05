import { Module } from '@nestjs/common';
import { PrismaModule } from '@/shared/infrastructure/database/prisma.module';
import { PrismaBranchRepository } from './infrastructure/driven/prisma/branch.prisma.repository';
import { IBranchRepository } from './application/ports/branch.repository';
import { CreateBranchUseCase } from './application/use-cases/create-branch/create-branch.use-case';
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
  ],
})
export class BranchModule {} 