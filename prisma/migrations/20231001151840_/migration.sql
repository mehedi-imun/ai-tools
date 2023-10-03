/*
  Warnings:

  - You are about to drop the column `subcategorie` on the `AiTool` table. All the data in the column will be lost.
  - Added the required column `subcategories` to the `AiTool` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "AiTool" DROP COLUMN "subcategorie",
ADD COLUMN     "subcategories" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';
