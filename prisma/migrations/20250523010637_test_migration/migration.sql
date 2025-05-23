/*
  Warnings:

  - You are about to drop the column `effective_from` on the `job_title_versions` table. All the data in the column will be lost.
  - You are about to drop the column `salary_max` on the `job_title_versions` table. All the data in the column will be lost.
  - You are about to drop the column `salary_min` on the `job_title_versions` table. All the data in the column will be lost.
  - You are about to drop the column `version_number` on the `job_title_versions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_job_title,version]` on the table `job_title_versions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `job_title_versions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `version` to the `job_title_versions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "job_title_versions" DROP CONSTRAINT "job_title_versions_id_job_title_fkey";

-- DropIndex
DROP INDEX "job_title_versions_id_job_title_version_number_key";

-- AlterTable
ALTER TABLE "job_title_versions" DROP COLUMN "effective_from",
DROP COLUMN "salary_max",
DROP COLUMN "salary_min",
DROP COLUMN "version_number",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "requirements" TEXT,
ADD COLUMN     "responsibilities" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "version" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "job_title_levels" (
    "id_job_title_level" TEXT NOT NULL,
    "id_job_title_version" TEXT NOT NULL,
    "label" VARCHAR(60) NOT NULL,
    "rank" INTEGER,
    "salary_min" DECIMAL(12,2),
    "salary_max" DECIMAL(12,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_title_levels_pkey" PRIMARY KEY ("id_job_title_level")
);

-- CreateTable
CREATE TABLE "testes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "testes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "job_title_levels_id_job_title_version_label_idx" ON "job_title_levels"("id_job_title_version", "label");

-- CreateIndex
CREATE UNIQUE INDEX "job_title_levels_id_job_title_version_label_key" ON "job_title_levels"("id_job_title_version", "label");

-- CreateIndex
CREATE INDEX "job_title_versions_id_job_title_version_idx" ON "job_title_versions"("id_job_title", "version");

-- CreateIndex
CREATE UNIQUE INDEX "job_title_versions_id_job_title_version_key" ON "job_title_versions"("id_job_title", "version");

-- AddForeignKey
ALTER TABLE "job_title_versions" ADD CONSTRAINT "job_title_versions_id_job_title_fkey" FOREIGN KEY ("id_job_title") REFERENCES "job_titles"("id_job_title") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_title_levels" ADD CONSTRAINT "job_title_levels_id_job_title_version_fkey" FOREIGN KEY ("id_job_title_version") REFERENCES "job_title_versions"("id_job_title_version") ON DELETE CASCADE ON UPDATE CASCADE;
