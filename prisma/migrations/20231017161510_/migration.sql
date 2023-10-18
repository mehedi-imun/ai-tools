/*
  Warnings:

  - The values [DOLLARS_PER_MINUTE] on the enum `PriceFormat` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PriceFormat_new" AS ENUM ('DOLLARS_PER_MONTH', 'DOLLARS_PER_WEEK');
ALTER TABLE "AiTool" ALTER COLUMN "pricePlan" TYPE "PriceFormat_new" USING ("pricePlan"::text::"PriceFormat_new");
ALTER TYPE "PriceFormat" RENAME TO "PriceFormat_old";
ALTER TYPE "PriceFormat_new" RENAME TO "PriceFormat";
DROP TYPE "PriceFormat_old";
COMMIT;

-- AlterTable
ALTER TABLE "AiTool" ADD COLUMN     "keyFeatures1" TEXT,
ADD COLUMN     "keyFeatures2" TEXT,
ADD COLUMN     "keyFeatures3" TEXT;

-- CreateTable
CREATE TABLE "NewsCategory" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsCategory_category_key" ON "NewsCategory"("category");
