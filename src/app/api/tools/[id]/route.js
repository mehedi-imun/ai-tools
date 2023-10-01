import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE tool
export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    const post = await prisma.AiTool.update({
      where: { id },
      data: { views: { increment: 1 } },
    });

    return NextResponse.json({ data:post });
  } catch (err) {
    return NextResponse.json({ message: "Something went wrong!" });
  }
};