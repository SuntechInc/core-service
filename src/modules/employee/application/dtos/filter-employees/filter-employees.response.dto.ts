import { Employee } from '@/modules/employee/domain/entities/employee.entity';

export class FilterEmployeesResponseDto {
  constructor(
    public readonly data: Employee[],
    public readonly page: number,
    public readonly size: number,
    public readonly total: number,
    public readonly filter?: any,
  ) {}
} 