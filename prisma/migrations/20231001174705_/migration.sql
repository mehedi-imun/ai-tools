/*
  Warnings:

  - Changed the type of `pricing` on the `AiTool` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PricingFormat" AS ENUM ('Premium', 'Free', 'Paid', 'Free_Trial', 'Contact_For_Pricing');

-- AlterTable
ALTER TABLE "AiTool" DROP COLUMN "pricing",
ADD COLUMN     "pricing" "PricingFormat" NOT NULL;

-- DropEnum
DROP TYPE "Pricing";
