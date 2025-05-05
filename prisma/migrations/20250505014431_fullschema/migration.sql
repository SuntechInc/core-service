/*
  Warnings:

  - You are about to drop the column `is_active` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `job_title_versions` table. All the data in the column will be lost.
  - You are about to drop the column `requirements` on the `job_title_versions` table. All the data in the column will be lost.
  - You are about to drop the column `salary` on the `job_title_versions` table. All the data in the column will be lost.
  - You are about to drop the column `currentVersionId` on the `job_titles` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `job_titles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_address]` on the table `branches` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_address]` on the table `companies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_company,job_title_name]` on the table `job_titles` will be added. If there are existing duplicate values, this will fail.
  - Made the column `company_phone` on table `companies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_branch` on table `departments` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `id_company` to the `job_titles` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BranchStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED', 'OBSOLETE');

-- CreateEnum
CREATE TYPE "CompanyStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED', 'CLOSED', 'TRIAL', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DepartmentStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED', 'OBSOLETE');

-- AlterEnum
ALTER TYPE "EmployeeStatus" ADD VALUE 'OBSOLETE';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "EmploymentType" ADD VALUE 'PART_TIME';
ALTER TYPE "EmploymentType" ADD VALUE 'TEMPORARY';
ALTER TYPE "EmploymentType" ADD VALUE 'INTERN';

-- DropForeignKey
ALTER TABLE "departments" DROP CONSTRAINT "departments_id_branch_fkey";

-- DropForeignKey
ALTER TABLE "job_title_versions" DROP CONSTRAINT "job_title_versions_id_job_title_fkey";

-- DropForeignKey
ALTER TABLE "job_titles" DROP CONSTRAINT "job_titles_currentVersionId_fkey";

-- DropIndex
DROP INDEX "job_titles_currentVersionId_key";

-- DropIndex
DROP INDEX "job_titles_job_title_name_id_branch_key";

-- AlterTable
ALTER TABLE "branches" ADD COLUMN     "branch_email" TEXT,
ADD COLUMN     "branch_phone" TEXT,
ADD COLUMN     "branch_sigla" TEXT,
ADD COLUMN     "branch_status" "BranchStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "id_address" TEXT,
ADD COLUMN     "is_headquarter" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "official_id" TEXT,
ADD COLUMN     "responsible_name" TEXT;

-- AlterTable
ALTER TABLE "companies" DROP COLUMN "is_active",
ADD COLUMN     "company_status" "CompanyStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "id_address" TEXT,
ADD COLUMN     "tax_country" TEXT DEFAULT 'BR',
ALTER COLUMN "company_phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "departments" ADD COLUMN     "department_code" TEXT,
ADD COLUMN     "department_status" "DepartmentStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "description" TEXT,
ADD COLUMN     "responsible_email" TEXT,
ADD COLUMN     "responsible_name" TEXT,
ALTER COLUMN "id_branch" SET NOT NULL;

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "hired_at" TIMESTAMP(3),
ADD COLUMN     "left_at" TIMESTAMP(3),
ALTER COLUMN "employee_status" SET DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "job_title_versions" DROP COLUMN "created_at",
DROP COLUMN "requirements",
DROP COLUMN "salary",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "salary_max" DECIMAL(65,30),
ADD COLUMN     "salary_min" DECIMAL(65,30),
ALTER COLUMN "version_number" DROP DEFAULT,
ALTER COLUMN "effective_from" DROP DEFAULT;

-- AlterTable
ALTER TABLE "job_titles" DROP COLUMN "currentVersionId",
DROP COLUMN "updated_at",
ADD COLUMN     "id_company" TEXT NOT NULL,
ADD COLUMN     "job_title_code" TEXT;

-- CreateTable
CREATE TABLE "addresses" (
    "id_address" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'BR',
    "zip_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id_address")
);

-- CreateTable
CREATE TABLE "employee_job_title_history" (
    "id_employee" TEXT NOT NULL,
    "id_job_title_version" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "removed_at" TIMESTAMP(3),

    CONSTRAINT "employee_job_title_history_pkey" PRIMARY KEY ("id_employee","id_job_title_version","assigned_at")
);

-- CreateIndex
CREATE UNIQUE INDEX "branches_id_address_key" ON "branches"("id_address");

-- CreateIndex
CREATE UNIQUE INDEX "companies_id_address_key" ON "companies"("id_address");

-- CreateIndex
CREATE UNIQUE INDEX "job_titles_id_company_job_title_name_key" ON "job_titles"("id_company", "job_title_name");

-- AddForeignKey
ALTER TABLE "branches" ADD CONSTRAINT "branches_id_address_fkey" FOREIGN KEY ("id_address") REFERENCES "addresses"("id_address") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_id_address_fkey" FOREIGN KEY ("id_address") REFERENCES "addresses"("id_address") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_id_branch_fkey" FOREIGN KEY ("id_branch") REFERENCES "branches"("id_branch") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_title_versions" ADD CONSTRAINT "job_title_versions_id_job_title_fkey" FOREIGN KEY ("id_job_title") REFERENCES "job_titles"("id_job_title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_job_title_history" ADD CONSTRAINT "employee_job_title_history_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "employees"("id_employee") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_job_title_history" ADD CONSTRAINT "employee_job_title_history_id_job_title_version_fkey" FOREIGN KEY ("id_job_title_version") REFERENCES "job_title_versions"("id_job_title_version") ON DELETE RESTRICT ON UPDATE CASCADE;
