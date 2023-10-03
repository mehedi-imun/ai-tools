import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req, res) {
  const { data } = await req.json();
  const { userId, newsId } = data;

  try {
    const result = await prisma.$transaction(async (tx) => {
      // Check if the user has already bookmarked this news
      const existingBookmark = await tx.newsBookmark.findFirst({
        where: {
          userId,
          newsId,
        },
      });

      if (!existingBookmark) {
        // If the user hasn't bookmarked the news, create a bookmark record
        await tx.newsBookmark.create({
          data: {
            userId,
            newsId,
          },
        });

        // Update news's bookmark count
        await tx.news.update({
          where: { id: newsId },
          data: {
            newsBookmarkCount: {
              increment: 1, // Increment newsBookmarkCount by 1
            },
          },
        });

        return { message: 'news bookmarked successfully', action: 'add' };
      } else {
        // If the user has already bookmarked the news, delete the bookmark record
        await tx.newsBookmark.deleteMany({
          where: {
            userId,
            newsId,
          },
        });

        // Update news's bookmark count
        await tx.news.update({
          where: { id: newsId },
          data: {
            newsBookmarkCount: {
              decrement: 1, // Decrement newsBookmarkCount by 1
            },
          },
        });

        return { message: 'news unbookmarked successfully', action: 'remove' };
      }
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: 'Failed', error: error.message });
  } 
}
