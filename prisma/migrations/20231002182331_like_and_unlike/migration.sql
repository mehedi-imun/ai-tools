/*
  Warnings:

  - You are about to drop the column `like` on the `ReviewLike` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Review_userId_toolId_key";

-- DropIndex
DROP INDEX "ReviewLike_userId_reviewId_key";

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "unlikeCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "ReviewLike" DROP COLUMN "like",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "ReviewUnlike" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReviewUnlike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_userId_key" ON "Review"("userId");

-- AddForeignKey
ALTER TABLE "ReviewUnlike" ADD CONSTRAINT "ReviewUnlike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewUnlike" ADD CONSTRAINT "ReviewUnlike_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
