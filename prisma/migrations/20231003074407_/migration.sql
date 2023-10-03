/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `ReviewLike` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ReviewUnlike` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ReviewLike" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "ReviewUnlike" DROP COLUMN "updatedAt";
