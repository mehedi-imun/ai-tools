
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// http://localhost:3001/api/tools
// GET
const toolsFilterableFields = [
  'searchTerm',
  'pricing',
  'price',
  'verified',
  'new',
  'popular',
  'toolsAddedToday'
];
 const toolSearchableFields = [
  'title',
  'toolDescription',
  'shortDescription',
  'useCase1',
  'useCase2',
  'useCase3'
];
const pick = (obj, keys) => {
 
  const finalObj = {};

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};
const calculatePagination = (options) => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 10);
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy || 'createdAt' ;
  const sortOrder = options.sortOrder || 'desc';

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export async function GET(req, res){
  const { searchParams } = new URL(req.url);
  const filters = pick(Object.fromEntries(searchParams), toolsFilterableFields);
  const options = pick(Object.fromEntries(searchParams), ['limit', 'page', 'sortBy', 'sortOrder']);
  console.log(options)
  const { limit, page, skip } = calculatePagination(options);
  const { searchTerm, ...filterData } = filters;
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
  
let orderBy = {};

  if (options.sortBy === 'popular') {
    orderBy = { views: 'desc' }; 
  } else {
    // Default sorting by createdAt in descending order
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
