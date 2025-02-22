/*
  Warnings:

  - The values [EM_PROCESSO,ATIVO,FERIAS,AFASTADO,DESLIGADO] on the enum `EmployeeStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [CLT,PJ] on the enum `EmploymentType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EmployeeStatus_new" AS ENUM ('IN_PROCESS', 'ACTIVE', 'ON_LEAVE', 'SUSPENDED', 'TERMINATED');
ALTER TABLE "employees" ALTER COLUMN "employee_status" TYPE "EmployeeStatus_new" USING ("employee_status"::text::"EmployeeStatus_new");
ALTER TYPE "EmployeeStatus" RENAME TO "EmployeeStatus_old";
ALTER TYPE "EmployeeStatus_new" RENAME TO "EmployeeStatus";
DROP TYPE "EmployeeStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "EmploymentType_new" AS ENUM ('FULL_TIME', 'CONTRACTOR');
ALTER TABLE "employees" ALTER COLUMN "employment_type" TYPE "EmploymentType_new" USING ("employment_type"::text::"EmploymentType_new");
ALTER TYPE "EmploymentType" RENAME TO "EmploymentType_old";
ALTER TYPE "EmploymentType_new" RENAME TO "EmploymentType";
DROP TYPE "EmploymentType_old";
COMMIT;

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "employee_status" "EmployeeStatus" NOT NULL DEFAULT 'IN_PROCESS',
ADD COLUMN     "employment_type" "EmploymentType" NOT NULL DEFAULT 'FULL_TIME';
