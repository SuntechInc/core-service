import { Module } from '@nestjs/common'
import { JobTitleController } from '../controllers/job-title.controller'
import { JobTitleVersionController } from '../controllers/job-title-version.controller'
import { JobTitleLevelController } from '../controllers/job-title-level.controller'
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
import { JobTitlePrismaRepository } from '../driven/prisma/job-title.prisma.repository'
import { JobTitleVersionPrismaRepository } from '../driven/prisma/job-title-version.prisma.repository'
import { JobTitleLevelPrismaRepository } from '../driven/prisma/job-title-level.prisma.repository'

@Module({
  controllers: [
    JobTitleController,
    JobTitleVersionController,
    JobTitleLevelController,
  ],
  providers: [
    {
      provide: 'IJobTitleRepository',
      useClass: JobTitlePrismaRepository,
    },
    {
      provide: 'IJobTitleVersionRepository',
      useClass: JobTitleVersionPrismaRepository,
    },
    {
      provide: 'IJobTitleLevelRepository',
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
  ],
})
export class JobTitleModule {} 