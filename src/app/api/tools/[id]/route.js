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
// update SINGLE tool
export async function PATCH(req, {params}) {
  const {id}=params
  const updatedData = await req.json();
  try {
    const result = await prisma.aiTool.update({
      where: {
        id, 
      },
      data: updatedData, 
    });
    return NextResponse.json({ message:"update successfully",result},{status:200});
  } catch (err) {
    return NextResponse.json({ message: "Something went wrong!" });
  }
}