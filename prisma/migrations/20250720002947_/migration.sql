/*
  Warnings:

  - Added the required column `id_branch` to the `employee_job_title_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_company` to the `employee_job_title_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_branch` to the `job_title_levels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_company` to the `job_title_levels` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TenantModuleStatus" AS ENUM ('ENABLED', 'DISABLED');

-- AlterTable
ALTER TABLE "employee_job_title_history" ADD COLUMN     "id_branch" TEXT NOT NULL,
ADD COLUMN     "id_company" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "job_title_levels" ADD COLUMN     "id_branch" TEXT NOT NULL,
ADD COLUMN     "id_company" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "modules" (
    "id_module" TEXT NOT NULL,
    "module_code" TEXT NOT NULL,
    "module_name" TEXT NOT NULL,
    "module_description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "modules_pkey" PRIMARY KEY ("id_module")
);

-- CreateTable
CREATE TABLE "tenant_modules" (
    "id_company" TEXT NOT NULL,
    "id_module" TEXT NOT NULL,
    "segment" "Segment" NOT NULL,
    "module_status" "TenantModuleStatus" NOT NULL DEFAULT 'ENABLED',
    "enabled_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disabled_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tenant_modules_pkey" PRIMARY KEY ("id_company","id_module")
);

-- CreateIndex
CREATE UNIQUE INDEX "modules_module_code_key" ON "modules"("module_code");

-- CreateIndex
CREATE INDEX "employee_job_title_history_id_company_idx" ON "employee_job_title_history"("id_company");

-- CreateIndex
CREATE INDEX "employee_job_title_history_id_branch_idx" ON "employee_job_title_history"("id_branch");

-- CreateIndex
CREATE INDEX "job_title_levels_id_company_idx" ON "job_title_levels"("id_company");

-- CreateIndex
CREATE INDEX "job_title_levels_id_branch_idx" ON "job_title_levels"("id_branch");

-- AddForeignKey
ALTER TABLE "tenant_modules" ADD CONSTRAINT "tenant_modules_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "companies"("id_company") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tenant_modules" ADD CONSTRAINT "tenant_modules_id_module_fkey" FOREIGN KEY ("id_module") REFERENCES "modules"("id_module") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_job_title_history" ADD CONSTRAINT "employee_job_title_history_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "companies"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_job_title_history" ADD CONSTRAINT "employee_job_title_history_id_branch_fkey" FOREIGN KEY ("id_branch") REFERENCES "branches"("id_branch") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_title_levels" ADD CONSTRAINT "job_title_levels_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "companies"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_title_levels" ADD CONSTRAINT "job_title_levels_id_branch_fkey" FOREIGN KEY ("id_branch") REFERENCES "branches"("id_branch") ON DELETE RESTRICT ON UPDATE CASCADE;
