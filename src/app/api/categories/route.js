import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// POST 
export async function POST(req, res) {
    const {data} = await req.json();
    try {
        const result = await prisma.Category.create({ data});
        return NextResponse.json({ message: "successfully create Category",result },{status:200},);
    } catch (error) {
        return NextResponse.json({ message: "filed",error:error.message },{status:500});
    }
    
  }
// GET CATEGORY BY AI TOOLS
export async function GET(req, res) {
    
    
    try {
        const result = await prisma.Category.findMany({})
        return NextResponse.json({ message: "successfully get all  Category",result },{status:200},);
    } catch (error) {
        return NextResponse.json({ message: "filed",error:error.message },{status:500});
    }
    
  }