/*
  Warnings:

  - Added the required column `id_job_title_version` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "id_job_title_version" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_id_job_title_version_fkey" FOREIGN KEY ("id_job_title_version") REFERENCES "job_title_versions"("id_job_title_version") ON DELETE RESTRICT ON UPDATE CASCADE;
