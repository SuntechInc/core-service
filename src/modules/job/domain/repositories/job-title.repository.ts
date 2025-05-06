import { JobTitle } from '../entities/job-title.entity'

export abstract class IJobTitleRepository {
  abstract create(jobTitle: JobTitle): Promise<JobTitle>
  abstract findById(id: string): Promise<JobTitle | null>
  abstract findByName(name: string): Promise<JobTitle | null>
  abstract findAll(): Promise<JobTitle[]>
  abstract update(jobTitle: JobTitle): Promise<JobTitle>
  abstract delete(id: string): Promise<void>
} 