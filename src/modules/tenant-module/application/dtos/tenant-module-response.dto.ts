export class TenantModuleResponseDto {
  companyId: string;
  moduleId: string;
  moduleCode: string;
  moduleName: string;
  segment: string;
  status: string;
  enabledAt: Date;
  disabledAt?: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    companyId: string,
    moduleId: string,
    moduleCode: string,
    moduleName: string,
    segment: string,
    status: string,
    enabledAt: Date,
    disabledAt: Date | undefined,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.companyId = companyId;
    this.moduleId = moduleId;
    this.moduleCode = moduleCode;
    this.moduleName = moduleName;
    this.segment = segment;
    this.status = status;
    this.enabledAt = enabledAt;
    this.disabledAt = disabledAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
} 