import { Module } from '@nestjs/common'
import { JobTitleController } from '@/modules/job/infrastructure/controllers/job-title.controller'
import { JobTitleVersionController } from '@/modules/job/infrastructure/controllers/job-title-version.controller'
import { JobTitleLevelController } from '@/modules/job/infrastructure/controllers/job-title-level.controller'
import { CreateJobTitleUseCase } from '@/modules/job/application/use-cases/create-job-title/create-job-title.use-case'
import { FindJobTitleUseCase } from '@/modules/job/application/use-cases/find-job-title/find-job-title.use-case'
import { FindAllJobTitlesUseCase } from '@/modules/job/application/use-cases/find-all-job-titles/find-all-job-titles.use-case'
import { UpdateJobTitleUseCase } from '@/modules/job/application/use-cases/update-job-title/update-job-title.use-case'
import { DeleteJobTitleUseCase } from '@/modules/job/application/use-cases/delete-job-title/delete-job-title.use-case'
import { CreateJobTitleVersionUseCase } from '@/modules/job/application/use-cases/create-job-title-version/create-job-title-version.use-case'
import { FindJobTitleVersionUseCase } from '@/modules/job/application/use-cases/find-job-title-version/find-job-title-version.use-case'
import { FindAllJobTitleVersionsUseCase } from '@/modules/job/application/use-cases/find-all-job-title-versions/find-all-job-title-versions.use-case'
import { UpdateJobTitleVersionUseCase } from '@/modules/job/application/use-cases/update-job-title-version/update-job-title-version.use-case'
import { DeleteJobTitleVersionUseCase } from '@/modules/job/application/use-cases/delete-job-title-version/delete-job-title-version.use-case'
import { CreateJobTitleLevelUseCase } from '@/modules/job/application/use-cases/create-job-title-level/create-job-title-level.use-case'


import { UpdateJobTitleLevelUseCase } from '@/modules/job/application/use-cases/update-job-title-level/update-job-title-level.use-case'
import { DeleteJobTitleLevelUseCase } from '@/modules/job/application/use-cases/delete-job-title-level/delete-job-title-level.use-case'
import { FilterJobTitleLevelsUseCase } from '@/modules/job/application/use-cases/filter-job-title-levels/filter-job-title-levels.use-case'
import { FilterJobTitlesUseCase } from '@/modules/job/application/use-cases/filter-job-titles/filter-job-titles.use-case'
import { JobTitlePrismaRepository } from '@/modules/job/infrastructure/driven/prisma/job-title.prisma.repository'
import { JobTitleVersionPrismaRepository } from '@/modules/job/infrastructure/driven/prisma/job-title-version.prisma.repository'
import { JobTitleLevelPrismaRepository } from '@/modules/job/infrastructure/driven/prisma/job-title-level.prisma.repository'
import { IJobTitleRepository } from '@/modules/job/domain/repositories/job-title.repository'
import { IJobTitleVersionRepository } from '@/modules/job/domain/repositories/job-title-version.repository'
import { IJobTitleLevelRepository } from '@/modules/job/domain/repositories/job-title-level.repository'
import { PrismaModule } from '@/shared/infrastructure/database/prisma.module'
import {
  JOB_TITLE_REPOSITORY,
  JOB_TITLE_VERSION_REPOSITORY,
  JOB_TITLE_LEVEL_REPOSITORY,
} from './job.tokens'

@Module({
  imports: [PrismaModule],
  controllers: [
    JobTitleController,
    JobTitleVersionController,
    JobTitleLevelController,
  ],
  providers: [
    {
      provide: JOB_TITLE_REPOSITORY,
      useClass: JobTitlePrismaRepository,
    },
    {
      provide: JOB_TITLE_VERSION_REPOSITORY,
      useClass: JobTitleVersionPrismaRepository,
    },
    {
      provide: JOB_TITLE_LEVEL_REPOSITORY,
      useClass: JobTitleLevelPrismaRepository,
    },
    CreateJobTitleUseCase,
    FindJobTitleUseCase,
    FindAllJobTitlesUseCase,
    UpdateJobTitleUseCase,
    DeleteJobTitleUseCase,
    CreateJobTitleVersionUseCase,
    FindJobTitleVersionUseCase,
    FindAllJobTitleVersionsUseCase,
    UpdateJobTitleVersionUseCase,
    DeleteJobTitleVersionUseCase,
    CreateJobTitleLevelUseCase,
    UpdateJobTitleLevelUseCase,
    DeleteJobTitleLevelUseCase,
    FilterJobTitleLevelsUseCase,
    FilterJobTitlesUseCase,
  ],
  exports: [
    JOB_TITLE_REPOSITORY,
    JOB_TITLE_VERSION_REPOSITORY,
    JOB_TITLE_LEVEL_REPOSITORY,
  ],
})
export class JobModule {} 