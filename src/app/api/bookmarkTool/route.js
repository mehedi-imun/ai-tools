import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req, res) {
  const { data } = await req.json();
  const { userId, toolId } = data;

  try {
    const result = await prisma.$transaction(async (tx) => {
      // Check if the user has already bookmarked this AiTool
      const existingBookmark = await tx.aiToolBookmark.findFirst({
        where: {
          userId,
          toolId,
        },
      });

      if (!existingBookmark) {
        // If the user hasn't bookmarked the AiTool, create a bookmark record
        await tx.aiToolBookmark.create({
          data: {
            userId,
            toolId,
          },
        });

        // Update AiTool's bookmark count
        await tx.aiTool.update({
          where: { id: toolId },
          data: {
            aiToolBookmarkCount: {
              increment: 1, // Increment aiToolBookmarkCount by 1
            },
          },
        });

        return { message: 'AiTool bookmarked successfully', action: 'add' };
      } else {
        // If the user has already bookmarked the AiTool, delete the bookmark record
        await tx.aiToolBookmark.deleteMany({
          where: {
            userId,
            toolId,
          },
        });

        // Update AiTool's bookmark count
        await tx.aiTool.update({
          where: { id: toolId },
          data: {
            aiToolBookmarkCount: {
              decrement: 1, // Decrement aiToolBookmarkCount by 1
            },
          },
        });

        return { message: 'AiTool unbookmarked successfully', action: 'remove' };
      }
    });

    return NextResponse.json(result);
  } catch (error) {
   
    return NextResponse.json({ message: 'Failed', error: error.message });
  } 
}
