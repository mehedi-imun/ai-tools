/*
  Warnings:

  - You are about to drop the `AiTollBookmark` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AiTollBookmark" DROP CONSTRAINT "AiTollBookmark_toolId_fkey";

-- DropForeignKey
ALTER TABLE "AiTollBookmark" DROP CONSTRAINT "AiTollBookmark_userId_fkey";

-- DropTable
DROP TABLE "AiTollBookmark";

-- CreateTable
CREATE TABLE "AiToolBookmark" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiToolBookmark_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AiToolBookmark" ADD CONSTRAINT "AiToolBookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiToolBookmark" ADD CONSTRAINT "AiToolBookmark_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "AiTool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
