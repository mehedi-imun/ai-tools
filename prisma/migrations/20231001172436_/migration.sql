/*
  Warnings:

  - You are about to drop the column `paymentPlan` on the `AiTool` table. All the data in the column will be lost.
  - Added the required column `pricing` to the `AiTool` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Pricing" AS ENUM ('PREMIUM', 'FREE', 'PAID', 'FREE_TRIAL', 'CONTACT_FOR_PRICING');

-- AlterTable
ALTER TABLE "AiTool" DROP COLUMN "paymentPlan",
ADD COLUMN     "pricing" "Pricing" NOT NULL;

-- DropEnum
DROP TYPE "PaymentPlan";
