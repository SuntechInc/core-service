/*
  Warnings:

  - You are about to drop the column `branch_name` on the `branches` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[branch_legal_name,branch_trading_name,id_company,branch_code]` on the table `branches` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `branch_legal_name` to the `branches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branch_trading_name` to the `branches` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "branches_branch_name_id_company_branch_code_key";

-- AlterTable
ALTER TABLE "branches" DROP COLUMN "branch_name",
ADD COLUMN     "branch_legal_name" TEXT NOT NULL,
ADD COLUMN     "branch_trading_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "branches_branch_legal_name_branch_trading_name_id_company_b_key" ON "branches"("branch_legal_name", "branch_trading_name", "id_company", "branch_code");
