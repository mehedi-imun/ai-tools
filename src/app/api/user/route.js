import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
// GET all user
export const GET = async (req,res) => {
//     const session = await getAuthSession();
// console.log(session)
//   if (!session) {
//     return new NextResponse(
//       JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
//     );
//   }
    try {
      const result = await prisma.User.findMany({});
  
      return NextResponse.json({ data:result });
    } catch (err) {
      return NextResponse.json({ message: "Something went wrong!" });
    }
  };