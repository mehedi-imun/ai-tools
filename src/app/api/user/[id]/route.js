import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
// GET SINGLE tool
export const GET = async (req, { params }) => {
    const { id } = params;
  
    try {
      const result = await prisma.User.findUnique({
        where: { id },
      });
  
      return NextResponse.json({ data:result });
    } catch (err) {
      return NextResponse.json({ message: "Something went wrong!" });
    }
  };