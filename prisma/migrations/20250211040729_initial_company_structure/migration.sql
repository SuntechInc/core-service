/*
  Warnings:

  - A unique constraint covering the columns `[trading_name]` on the table `companies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_tax]` on the table `companies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[company_email]` on the table `companies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[legal_name,id_tax]` on the table `companies` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `industry` on the `companies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `segment` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('HEALTHCORE', 'AGRIBUSINESS', 'TRANSPORTATION_MOBILITY', 'TECHNOLOGY');

-- CreateEnum
CREATE TYPE "Segment" AS ENUM ('LABORATORY', 'HOSPITAL', 'MEDICAL_METALLURGY', 'ANIMAL_HEALTH', 'VEHICLE_INSPECTION', 'VEHICLE_REGISTRATION', 'DRIVING_SCHOOL');

-- DropIndex
DROP INDEX "companies_legal_name_id_tax_company_email_key";

-- AlterTable
ALTER TABLE "companies" DROP COLUMN "industry",
ADD COLUMN     "industry" "Industry" NOT NULL,
DROP COLUMN "segment",
ADD COLUMN     "segment" "Segment" NOT NULL;

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

-- CreateIndex
CREATE UNIQUE INDEX "branches_branch_name_id_company_key" ON "branches"("branch_name", "id_company");

-- CreateIndex
CREATE UNIQUE INDEX "departments_department_name_id_branch_key" ON "departments"("department_name", "id_branch");

-- CreateIndex
CREATE UNIQUE INDEX "companies_trading_name_key" ON "companies"("trading_name");

-- CreateIndex
CREATE UNIQUE INDEX "companies_id_tax_key" ON "companies"("id_tax");

-- CreateIndex
CREATE UNIQUE INDEX "companies_company_email_key" ON "companies"("company_email");

-- CreateIndex
CREATE UNIQUE INDEX "companies_legal_name_id_tax_key" ON "companies"("legal_name", "id_tax");

-- AddForeignKey
ALTER TABLE "branches" ADD CONSTRAINT "branches_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "companies"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_id_branch_fkey" FOREIGN KEY ("id_branch") REFERENCES "branches"("id_branch") ON DELETE SET NULL ON UPDATE CASCADE;
