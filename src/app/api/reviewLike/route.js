import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { data } = await req.json();
  const { userId, reviewId } = data;

  try {
    const result= await prisma.$transaction(async (tx) => {
      const existingLike = await tx.reviewLike.findFirst({
        where: {
          userId,
          reviewId,
        },
      });

      if (!existingLike) {
        // If the user hasn't liked the review, create a like record and increment likeCount
        await tx.reviewLike.create({
          data: data,
        });

        await tx.review.update({
          where: { id: reviewId },
          data: {
            likeCount: {
              increment: 1,
            },
          },
        });
      } else {
        // If the user has already liked the review, delete the like record and decrement likeCount
        await tx.reviewLike.deleteMany({
          where: {
            userId,
            reviewId,
          },
        });

        await tx.review.update({
          where: { id: reviewId },
          data: {
            likeCount: {
              decrement: 1,
            },
          },
        });
      }
    });

    return NextResponse.json({ message: 'Review action successfully'},{status:200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed', error: error.message });
  }
}
