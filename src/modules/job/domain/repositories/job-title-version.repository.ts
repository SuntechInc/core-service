import { JobTitleVersion } from '../entities/job-title-version.entity'

export abstract class IJobTitleVersionRepository {
  abstract create(jobTitleVersion: JobTitleVersion): Promise<JobTitleVersion>
  abstract findById(id: string): Promise<JobTitleVersion | null>
  abstract findByJobTitleIdAndVersion(
    jobTitleId: string,
    version: number,
  ): Promise<JobTitleVersion | null>
  abstract findAllByJobTitleId(jobTitleId: string): Promise<JobTitleVersion[]>
  abstract update(jobTitleVersion: JobTitleVersion): Promise<JobTitleVersion>
  abstract delete(id: string): Promise<void>
} 