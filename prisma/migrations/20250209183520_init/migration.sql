-- CreateTable
CREATE TABLE "companies" (
    "id_company" TEXT NOT NULL,
    "trading_name" TEXT NOT NULL,
    "legal_name" TEXT NOT NULL,
    "id_tax" TEXT NOT NULL,
    "company_email" TEXT NOT NULL,
    "company_phone" TEXT,
    "industry" TEXT NOT NULL,
    "segment" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id_company")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_legal_name_id_tax_company_email_key" ON "companies"("legal_name", "id_tax", "company_email");
