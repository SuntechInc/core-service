-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('HEALTHCORE', 'AGRIBUSINESS', 'TRANSPORTATION_MOBILITY', 'TECHNOLOGY');

-- CreateEnum
CREATE TYPE "Segment" AS ENUM ('LABORATORY', 'HOSPITAL', 'MEDICAL_METALLURGY', 'ANIMAL_HEALTH', 'VEHICLE_INSPECTION', 'VEHICLE_REGISTRATION', 'DRIVING_SCHOOL');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FULL_TIME', 'CONTRACTOR');

-- CreateEnum
CREATE TYPE "EmployeeStatus" AS ENUM ('IN_PROCESS', 'ACTIVE', 'ON_LEAVE', 'SUSPENDED', 'TERMINATED');

-- CreateTable
CREATE TABLE "companies" (
    "id_company" TEXT NOT NULL,
    "trading_name" TEXT NOT NULL,
    "legal_name" TEXT NOT NULL,
    "id_tax" TEXT NOT NULL,
    "company_email" TEXT NOT NULL,
    "company_phone" TEXT,
    "industry" "Industry" NOT NULL,
    "segment" "Segment" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id_company")
);

-- CreateTable
CREATE TABLE "branches" (
    "id_branch" TEXT NOT NULL,
    "branch_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id_company" TEXT NOT NULL,

    CONSTRAINT "branches_pkey" PRIMARY KEY ("id_branch")
);

-- CreateTable
CREATE TABLE "departments" (
    "id_department" TEXT NOT NULL,
    "department_name" TEXT NOT NULL,
    "id_branch" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id_department")
);

-- CreateTable
CREATE TABLE "employees" (
    "id_employee" TEXT NOT NULL,
    "employee_name" TEXT NOT NULL,
    "employee_email" TEXT NOT NULL,
    "employee_phone" TEXT,
    "id_department" TEXT NOT NULL,
    "id_branch" TEXT NOT NULL,
    "id_job_title_version" TEXT NOT NULL,
    "employment_type" "EmploymentType" NOT NULL DEFAULT 'FULL_TIME',
    "employee_status" "EmployeeStatus" NOT NULL DEFAULT 'IN_PROCESS',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id_employee")
);

-- CreateTable
CREATE TABLE "job_titles" (
    "id_job_title" TEXT NOT NULL,
    "job_title_name" TEXT NOT NULL,
    "id_branch" TEXT NOT NULL,
    "currentVersionId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_titles_pkey" PRIMARY KEY ("id_job_title")
);

-- CreateTable
CREATE TABLE "job_title_versions" (
    "id_job_title_version" TEXT NOT NULL,
    "id_job_title" TEXT NOT NULL,
    "version_number" INTEGER NOT NULL DEFAULT 1,
    "salary" DECIMAL(65,30) NOT NULL,
    "requirements" TEXT,
    "effective_from" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_title_versions_pkey" PRIMARY KEY ("id_job_title_version")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_trading_name_key" ON "companies"("trading_name");

-- CreateIndex
CREATE UNIQUE INDEX "companies_id_tax_key" ON "companies"("id_tax");

-- CreateIndex
CREATE UNIQUE INDEX "companies_company_email_key" ON "companies"("company_email");

-- CreateIndex
CREATE UNIQUE INDEX "companies_legal_name_id_tax_key" ON "companies"("legal_name", "id_tax");

-- CreateIndex
CREATE UNIQUE INDEX "branches_branch_name_id_company_key" ON "branches"("branch_name", "id_company");

-- CreateIndex
CREATE UNIQUE INDEX "departments_department_name_id_branch_key" ON "departments"("department_name", "id_branch");

-- CreateIndex
CREATE UNIQUE INDEX "employees_employee_email_key" ON "employees"("employee_email");

-- CreateIndex
CREATE UNIQUE INDEX "job_titles_currentVersionId_key" ON "job_titles"("currentVersionId");

-- CreateIndex
CREATE UNIQUE INDEX "job_titles_job_title_name_id_branch_key" ON "job_titles"("job_title_name", "id_branch");

-- CreateIndex
CREATE UNIQUE INDEX "job_title_versions_id_job_title_version_number_key" ON "job_title_versions"("id_job_title", "version_number");

-- AddForeignKey
ALTER TABLE "branches" ADD CONSTRAINT "branches_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "companies"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_id_branch_fkey" FOREIGN KEY ("id_branch") REFERENCES "branches"("id_branch") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_id_job_title_version_fkey" FOREIGN KEY ("id_job_title_version") REFERENCES "job_title_versions"("id_job_title_version") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_id_branch_fkey" FOREIGN KEY ("id_branch") REFERENCES "branches"("id_branch") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_id_department_fkey" FOREIGN KEY ("id_department") REFERENCES "departments"("id_department") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_titles" ADD CONSTRAINT "job_titles_id_branch_fkey" FOREIGN KEY ("id_branch") REFERENCES "branches"("id_branch") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_titles" ADD CONSTRAINT "job_titles_currentVersionId_fkey" FOREIGN KEY ("currentVersionId") REFERENCES "job_title_versions"("id_job_title_version") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_title_versions" ADD CONSTRAINT "job_title_versions_id_job_title_fkey" FOREIGN KEY ("id_job_title") REFERENCES "job_titles"("id_job_title") ON DELETE CASCADE ON UPDATE CASCADE;
