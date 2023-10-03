/*
  Warnings:

  - You are about to drop the column `aiTollBookmarkCount` on the `AiTool` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AiTool" DROP COLUMN "aiTollBookmarkCount",
ADD COLUMN     "aiToolBookmarkCount" INTEGER NOT NULL DEFAULT 0;
