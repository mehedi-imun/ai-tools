import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// post 
export async function POST(req, res) {
    const {data} = await req.json();
    try {
        const result = await prisma.News.create({data})
        return NextResponse.json({ message: "successfully create news",result },{status:200},);
    } catch (error) {
        return NextResponse.json({ message: "filed",error:error.message },{status:500});
    }
  }
// GET ALL NEWS 
export async function GET(req, res) {
    try {
        const result = await prisma.News.findMany({})
        return NextResponse.json({ message: "successfully get news",result },{status:200},);
    } catch (error) {
        return NextResponse.json({ message: "filed",error:error.message },{status:500});
    }
  }