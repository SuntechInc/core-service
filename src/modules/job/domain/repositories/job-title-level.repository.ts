import { JobTitleLevel } from '../entities/job-title-level.entity'

export abstract class IJobTitleLevelRepository {
  abstract create(jobTitleLevel: JobTitleLevel): Promise<JobTitleLevel>
  abstract findById(id: string): Promise<JobTitleLevel | null>
  abstract findByJobTitleVersionIdAndLabel(
    jobTitleVersionId: string,
    label: string,
  ): Promise<JobTitleLevel | null>
  abstract findAllByJobTitleVersionId(
    jobTitleVersionId: string,
  ): Promise<JobTitleLevel[]>
  abstract update(jobTitleLevel: JobTitleLevel): Promise<JobTitleLevel>
  abstract delete(id: string): Promise<void>
} 