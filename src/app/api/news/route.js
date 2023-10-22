import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { pick } from "../helpers";

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
    const newsFilterableFields = ["category", "sort", "time"];
    const { searchParams } = new URL(req.url);
    const query = Array.from(searchParams).reduce((result, [key, value]) => {
      if (result[key]) {
        if (Array.isArray(result[key])) {
          result[key].push(value);
        } else {
          result[key] = [result[key], value];
        }
      } else {
        result[key] = value;
      }
      return result;
    }, {});
    
    const filters = pick(query, newsFilterableFields);
    const { category, sort, time } = filters;
    console.log(category)
    const andConditions = [];
  
    if (category) {
      andConditions.push({
        newsCategory: {
          equals: category,
        },
      });
    }
  
    if (sort) {
      // Implement sorting based on the 'sort' parameter
      if (sort === "new") {
        // Sort by the 'createdAt' field to get the newest articles first
        andConditions.push({
          createdAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        });
      } else if (sort === "popular") {
        // Customize sorting for "Popular" here, e.g., sorting by views
        andConditions.push({
          views: {
            gte: 0,
          },
        });
      }
    }
    
    if (time) {
      // Adjust time filtering based on the 'time' parameter
      if (time === "today") {
        // Filter for articles published within the last 24 hours
        andConditions.push({
          createdAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        });
      } else if (time === "week") {
        // Filter for articles published within the current week
        const startOfWeek = new Date();
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        andConditions.push({
          createdAt: {
            gte: startOfWeek,
          },
        });
      } else if (time === "month") {
        // Filter for articles published within the current month
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);
        andConditions.push({
          createdAt: {
            gte: startOfMonth,
          },
        });
      }
    }
      const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
      console.log(whereConditions)
    try {

        const result = await prisma.News.findMany({
            where: whereConditions,
           
          });
          
        return NextResponse.json({ message: "successfully get news",result },{status:200},);
    } catch (error) {
        return NextResponse.json({ message: "filed",error:error.message },{status:500});
    }
  }