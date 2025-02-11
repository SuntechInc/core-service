-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('CLT', 'PJ');

-- CreateEnum
CREATE TYPE "EmployeeStatus" AS ENUM ('EM_PROCESSO', 'ATIVO', 'FERIAS', 'AFASTADO', 'DESLIGADO');

-- CreateTable
CREATE TABLE "employees" (
    "id_employee" TEXT NOT NULL,
    "employee_name" TEXT NOT NULL,
    "employee_email" TEXT NOT NULL,
    "employee_phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id_branch" TEXT NOT NULL,
    "id_department" TEXT NOT NULL,

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
CREATE UNIQUE INDEX "employees_employee_email_key" ON "employees"("employee_email");

-- CreateIndex
CREATE UNIQUE INDEX "job_titles_currentVersionId_key" ON "job_titles"("currentVersionId");

-- CreateIndex
CREATE UNIQUE INDEX "job_titles_job_title_name_id_branch_key" ON "job_titles"("job_title_name", "id_branch");

-- CreateIndex
CREATE UNIQUE INDEX "job_title_versions_id_job_title_version_number_key" ON "job_title_versions"("id_job_title", "version_number");

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
