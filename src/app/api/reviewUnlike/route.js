import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { data } = await req.json();
  const { userId, reviewId } = data;

  try {
    const result= await prisma.$transaction(async (tx) => {
      const existingLike = await tx.ReviewUnlike.findFirst({
        where: {
          userId,
          reviewId,
        },
      });

      if (!existingLike) {
        // If the user hasn't liked the review, create a like record and increment likeCount
        await tx.ReviewUnlike.create({
          data: data,
        });

        await tx.review.update({
          where: { id: reviewId },
          data: {
            unlikeCount: {
              increment: 1,
            },
          },
        });
       return { message: 'unlike successfully', action: 'unlike' };
      } else {
        // If the user has already liked the review, delete the like record and decrement likeCount
        await tx.ReviewUnlike.deleteMany({
          where: {
            userId,
            reviewId,
          },
        });

        await tx.review.update({
          where: { id: reviewId },
          data: {
            unlikeCount: {
              decrement: 1,
            },
          },
        });
        return { message: 'remove successfully', action: 'remove' };
      }
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: 'Failed', error: error.message });
  }
}
