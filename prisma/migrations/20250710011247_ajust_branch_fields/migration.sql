/*
  Warnings:

  - You are about to drop the column `branch_sigla` on the `branches` table. All the data in the column will be lost.
  - You are about to drop the column `official_id` on the `branches` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[branch_tax_id]` on the table `branches` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[branch_name,id_company,branch_code]` on the table `branches` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `branch_tax_id` to the `branches` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "branches_branch_name_id_company_key";

-- AlterTable
ALTER TABLE "branches" DROP COLUMN "branch_sigla",
DROP COLUMN "official_id",
ADD COLUMN     "branch_code" TEXT,
ADD COLUMN     "branch_tax_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "branches_branch_tax_id_key" ON "branches"("branch_tax_id");

-- CreateIndex
CREATE UNIQUE INDEX "branches_branch_name_id_company_branch_code_key" ON "branches"("branch_name", "id_company", "branch_code");
