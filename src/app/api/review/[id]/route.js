import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET all review for a ai tool
export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    const post = await prisma.Review.findMany({
      where: { 
        toolId:id
       },
    });

    return NextResponse.json({ data:post });
  } catch (err) {
    return NextResponse.json({ message: "Something went wrong!" });
  }
};