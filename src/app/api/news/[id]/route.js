import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
// GET SINGLE news
export const GET = async (req, { params }) => {
    const { id } = params;
  
    try {
      const result = await prisma.News.update({
        where: { id },
        data: { views: { increment: 1 } },
      });
  
      return NextResponse.json({ data:result });
    } catch (err) {
      return NextResponse.json({ message: "Something went wrong!" });
    }
  };