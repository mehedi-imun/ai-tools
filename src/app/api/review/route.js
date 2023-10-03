import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// post 
export async function POST(req, res) {
    const {data} = await req.json();
    try {
        const result = await prisma.Review.create({data})
        return NextResponse.json({ message: "successfully give rating",result },{status:200},);
    } catch (error) {
        return NextResponse.json({ message: "filed",error:error.message },{status:500});
    }
  }
export async function GET(req, res) {

    try {
        const result = await prisma.Review.findMany({})
        return NextResponse.json({ message: "successfully find rating",result },{status:200},);
    } catch (error) {
        return NextResponse.json({ message: "filed",error:error.message },{status:500});
    }
  }
  
export async function PATCH(req, res) {
    const body = await req.json();
    const {data}= body
    const id = data?.reviewId;
    const updatedData = data?.updatedData
    try {
        const updatedReview = await prisma.Review.update({
            where: {
              id:id
            },
            data: updatedData,
          });
        return NextResponse.json({ message: "successfully update rating",updatedReview },{status:200},);
    } catch (error) {
        return NextResponse.json({ message: "filed",error:error.message },{status:500});
    }
  }
  