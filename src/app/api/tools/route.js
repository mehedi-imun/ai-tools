
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { calculatePagination, pick, toolSearchableFields, toolsFilterableFields } from "../helpers";

// http://localhost:3001/api/tools
// GET



export async function GET(req, res){
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
  const filters = pick(query, toolsFilterableFields);
  const options = pick(query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const { limit, page, skip } = calculatePagination(options);
  const { searchTerm,pricing, ...filterData } = filters;
  const andConditions = [];
  
 if (searchTerm) {
    andConditions.push({
        OR: toolSearchableFields.map((field) => ({
            [field]: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        }))
    });
}
 if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => {
        return {
          [key]: filterData[key],
        };
      }),
    });
  }
  
  if (pricing && pricing.length >= 0) {
    andConditions.push({
      pricing: {
        in: Array.isArray(pricing) ? pricing : [pricing]
      },
    });
  }
let orderBy = {};

  if (options.sortBy === 'popular') {
    orderBy = { views: 'desc' }; 
  } else {
    orderBy = options.sortBy && options.sortOrder ? { [options.sortBy]: options.sortOrder } : { createdAt: 'desc' };
  }
  
const whereConditions = andConditions.length > 0 ? { OR: andConditions } : {};
try {
  const result = await prisma.AiTool.findMany({
    where:whereConditions,
   

skip,
take: limit,
orderBy: orderBy
});

const total = await prisma.AiTool.count({
where: whereConditions
});

return NextResponse.json({
meta: {
total,
page,
limit
},
data: result
});
} catch (err) {
  console.log(err)
  return NextResponse.json({ message: "Something went wrong!" });
}

  
}

// POST
export async function POST(req, res) {
 try {
  const {data} = await req.json();
  const result = await prisma.AiTool.create({ data});
 return NextResponse.json({ message: "successfully create ai tool",result },{status:200},);
 } catch (error) {
  return NextResponse.json({ message: "filed",error:error.message },{status:500});
 }
}


// DELETE
export async function DELETE(req, res) {
  return NextResponse.json({ message: "Hello world I'm DELETE Method" });
}
