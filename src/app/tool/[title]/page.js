"use client";
import { useState } from "react";
import { BiSolidLockOpen } from "react-icons/bi";
import { Rating } from "react-simple-star-rating";
import { SlShareAlt } from "react-icons/sl";

import {
  BsBookmarkPlus,
  BsCalendarFill,
  BsCheckCircle,
  BsShareFill,
} from "react-icons/bs";
import { VscVerified } from "react-icons/vsc";
import Link from "next/link";
import Reviews from "@/components/Shared/Reviews";
import AiCard from "@/components/Shared/AiCard";

const ToolDetailPage = ({ params }) => {
  const tool = {
    id: "123",
    title: "MarketingBlocks AI",
    toolDescription:
      "is an all-in-one AI marketing assistant that revolutionizes the way businesses create marketing materials. With its powerful AI capabilities, MarketingBlocks AI can generate high-quality content, design stunning visuals, and create engaging marketing assets in minutes.",
    shortDescription: "Short summary",
    useCase1: "Use case 1 description",
    useCase2: "Use case 2 description",
    useCase3: "Use case 3 description",
    keyFeatures1:
      " MarketingBlocks AI generates marketing copy, blog posts, articles, email swipes, and other written content tailored to the business's need",
    keyFeatures2:
      " MarketingBlocks AI generates marketing copy, blog posts, articles, email swipes, and other written content tailored to the business's need",
    keyFeatures3:
      " MarketingBlocks AI generates marketing copy, blog posts, articles, email swipes, and other written content tailored to the business's need",
    price: 0,
    pricePlan: "DOLLARS_PER_YEAR",
    pricing: "Premium",
    toolURL: "https://sample-ai-tool.com",
    toolSummary:
      "businesses can harness the power of AI to streamline their marketing efforts, generate high-quality content, and create visually appealing marketing materials in a matter of minutes.",
    views: 0,
    aiToolBookmarkCount: 0,
    status: "PENDING",
    toolTags: ["AI", "MachineLearning", "Sample"],
    toolScreenshot: "https://sample-ai-tool.com/screenshot.png",
    createdAt: "2023-10-08T14:39:04.137Z",
    updatedAt: "2023-10-08T14:49:52.030Z",
    userId: "123",
    category: "ai-books",
    subcategories: "data-science",
    createdAt: " February 2, 2023",
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 3,
      },
      {
        rating: 1,
      },
    ],
  };

  return (
    <div>
      <div className="flex flex-col justify-between md:flex-row items-center md:space-x-6 my-9">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <h3 className="text-2xl md:text-4xl font-bold">{tool.title}</h3>
          <a
            target="_blank"
            href={tool?.toolURL}
            className="btn btn-sm btn-neutral border border-secondary no-animation bg-secondary rounded-full text-white flex items-center space-x-1"
          >
            <span className="text-xs">Visit</span>
            <SlShareAlt className="text-white text-lg" />
          </a>
          <div className="flex items-center space-x-1">
            {tool && tool?.reviews.length > 0 && (
              <Rating
                SVGstyle={{ display: "inline" }}
                initialValue={
                  tool.reviews.reduce((sum, review) => sum + review.rating, 0) /
                  tool.reviews.length
                }
                size={20} // Reduce the size for smaller screens
                allowHover={false}
                readonly={true}
              />
            )}
            {tool && tool.reviews.length > 0 ? (
              <Link href="#reviews" className="underline mt-1">
                {tool?.reviews.length} reviews
              </Link>
            ) : (
              "No rating yet"
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button className="btn btn-sm btn-secondary text-white btn-outline px-4 md:px-6 rounded-full">
            <BsBookmarkPlus className="text-2xl md:text-lg" />
            <span>{tool?.aiToolBookmarkCount}</span>
          </button>
          <button className="btn no-animation text-secondary border-0 bg-transparent btn-circle">
            <BsShareFill className="text-2xl md:text-3xl" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 mt-12 gap-x-8">
        <div className="md:col-span-4 relative">
          <a target="_blank" href={tool?.toolURL}>
            <img
              className="rounded-3xl object-fill h-60 md:h-72 w-full"
              src="https://cdn.appuals.com/wp-content/uploads/2023/03/ImgPile-Homepage-1024x508.png.webp"
              alt="tool image"
            />

            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex justify-center items-center rounded-3xl object-fill h-60 md:h-72 w-full text-white">
              <span className="text-lg md:text-2xl">Visit website</span>
            </div>
          </a>
        </div>

        <div className="md:col-span-5 text-sm md:text-lg space-y-4 md:space-y-8">
          <p>{tool?.shortDescription}</p>
          <div className="flex items-center space-y-2 md:space-y-0">
            <VscVerified className="text-secondary text-2xl md:text-4xl mr-2" />
            <span>
              This tool is verified because it is either an established company
              or has good social media presence
            </span>
          </div>
          <div className="flex items-center space-y-2 md:space-y-0">
            <BsCalendarFill className="text-2xl md:text-3xl mr-2 text-secondary" />
            <span>Added on {tool?.createdAt}</span>
          </div>
          {tool?.pricing === "Free" ? (
            <div className="flex space-x-1 justify-between items-center bg-gray-100 rounded border px-2 w-24 md:w-32">
              <BsCheckCircle className="inline" />
              <p>{tool?.pricing}</p>
            </div>
          ) : (
            <div className="flex space-y-2 md:space-x-2 items-center">
              <div className="flex lg:space-x-1 justify-between items-center bg-gray-100 rounded border px-2 w-32 md:w-36">
                <BiSolidLockOpen className="inline" />
                <p>{tool?.pricing}</p>
              </div>
              <p className="mt-0">
                Start From ${tool?.price}/
                {tool?.pricePlan.split("_").pop().toLowerCase()}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 lg:grid grid-cols-9 text-lg gap-x-6">
        <div className="col-span-6">
          {" "}
          <h3 className="text-xl mb-12 ">{tool?.title} Features</h3>
          <p>
            <span>{tool.title}:</span> {tool?.toolDescription}
          </p>
          <h3 className="text-xl font-bold my-6">Key Features:</h3>
          <ul className="list-disc pl-4 ">
            <li>
              <p>{tool?.keyFeatures1}</p>
            </li>
            <li>
              <p>{tool?.keyFeatures2}</p>
            </li>
            <li>
              <p>{tool?.keyFeatures3}</p>
            </li>
          </ul>
          <h3 className="text-xl font-bold my-6">Use cases :</h3>
          <ul className="list-disc pl-4">
            <li>{tool?.useCase1}</li>
            <li>{tool?.useCase2}</li>
            <li>{tool?.useCase3}</li>
          </ul>
          <div className="my-6">
            <p>
              With <span className="font-bold"> {tool?.title} </span>
              {tool?.toolSummary}
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <h3>Categories</h3>
          <div className="mt-6 space-y-3 ">
            <Link
              className="block hover:text-secondary hover:underline"
              href=""
            >
              Browse 138 AI email assistant tools.
            </Link>
            <Link
              className="block hover:text-secondary hover:underline"
              href=""
            >
              View All Categories.
            </Link>
          </div>
        </div>
      </div>

      <Reviews tool={tool}></Reviews>
      <div className="my-6 font-bold">
        <h3> Alternative AI Tools {tool?.title}</h3>
        <AiCard></AiCard>
      </div>
    </div>
  );
};

export default ToolDetailPage;
