import { NextResponse } from "next/server";
import {PrimaClient} from '@prisma/client'
const prisma = new PrimaClient()
// http://localhost:3001/api/tools
// GET
export async function GET(req, res) {
  return NextResponse.json({ message: "Hello world I'm GET Method" });
}

// POST
export async function POST(req, res) {
  return NextResponse.json({ message: "Hello world I'm POST Method" });
}

// PUT
export async function PUT(req, res) {
  return NextResponse.json({ message: "Hello world I'm PUT Method" });
}

// DELETE
export async function DELETE(req, res) {
  return NextResponse.json({ message: "Hello world I'm DELETE Method" });
}
