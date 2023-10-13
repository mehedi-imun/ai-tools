import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import {
  calculatePagination,
  pick,
  usersFilterableFields,
  usersSearchableFields,
} from "../helpers";

export const GET = async (req, res) => {
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

  const filters = pick(query, usersFilterableFields);
  const options = pick(query, ["limit", "page"]);
  const { limit, page, skip } = calculatePagination(options);
  const { searchTerm } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: usersSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm, // Use 'contains' for searching within text fields
          mode: "insensitive",
        },
      })),
    });
  }

  const whereConditions = andConditions.length > 0 ? { OR: andConditions } : {};

  try {
    const result = await prisma.User.findMany({
      where: whereConditions,
      skip,
      take: limit,
    });

    const total = await prisma.User.count({
      where: whereConditions,
    });

    return NextResponse.json({
      meta: {
        total,
        page,
        limit,
      },
      data: result,
    });
  } catch (err) {
    return NextResponse.json({ message: "Something went wrong!" });
  }
};
