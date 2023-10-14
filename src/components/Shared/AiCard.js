"use client";
import React, { useState } from "react";
import { VscVerified } from "react-icons/vsc";
import { BsBookmarkPlus, BsStars } from "react-icons/bs";
import { BiSolidLockOpen } from "react-icons/bi";
import { SlShareAlt } from "react-icons/sl";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
const AiCard = ({ tools }) => {
  console.log(tools);

  return (
    <div className="w-full grid lg:grid-cols-3 grid-cols-1  gap-12 mx-auto ">
      {tools ? (
        tools.map((tool) => (
          <div key={tool.id}>
            <div className="card  shadow  rounded relative border ">
              <div className=" bg-[#f8f8f8c7]  rounded-l-sm p-2 absolute z-10 top-2 right-0 text-black font-bold">
                ${tool.price}/{tool.pricePlan.split("_").pop().slice(0, 2)}
              </div>
              <Link href={`/tool/${tool?.title}`}>
                <figure className="overflow-hidden ">
                  <img
                    className="w-full h-40 transition duration-300 ease-in-out hover:scale-110"
                    src="https://www.cnet.com/a/img/resize/9a13e1e92a7b66cbff9db2934b3f66bf01a4afb6/hub/2023/08/24/821b0d86-e29b-4028-ac71-ef63ca020de8/gettyimages-1472123000.jpg?auto=webp&fit=crop&height=675&width=1200 "
                  />
                </figure>
              </Link>
              {tool?.featured && (
                <div className="badge mx-2 mt-[-10px]  z-10 ">Featured</div>
              )}
              <div className="card-body p-3 ">
                <Link href={`/tool/${tool?.title}`}>
                  <div className="flex justify-between items-center">
                    <div className="card-title">
                      {tool?.title.slice(0, 15)}
                      <div
                        className="tooltip tooltip-secondary cursor-pointer z-20"
                        data-tip="This tool is verified because it is either an established company or has good social media presence."
                      >
                        <VscVerified className="text-secondary text-2xl " />
                      </div>
                    </div>
                    <div
                      className="flex justify-center items-center cursor-pointer tooltip tooltip-secondary"
                      data-tip={`${tool.aiToolBookmarkCount} people favoured this tool`}
                    >
                      {" "}
                      <BsBookmarkPlus className="text-gray-600 mx-2 text-xl tooltip" />
                      <span>{tool.aiToolBookmarkCount}</span>
                    </div>
                  </div>
                </Link>
                <div className="flex justify-start items-center space-x-1">
                  {tool && tool.reviews && (
                    <Rating
                      SVGstyle={{ display: "inline" }}
                      initialValue={
                        tool.reviews.reduce(
                          (sum, review) => sum + review.rating,
                          0
                        ) / tool.reviews.length
                      }
                      size={18}
                      allowHover={false}
                      readonly={true}
                    />
                  )}
                  <span>
                    (
                    {tool.reviews.reduce(
                      (sum, review) => sum + review.rating,
                      0
                    ) / tool.reviews.length}
                    )
                  </span>
                </div>
                <Link href={`/tool/${tool?.title}`}>
                  <p>If a dog chews shoes whose shoes does he choose?</p>{" "}
                </Link>

                <div className="flex justify-between mt-4">
                  <div className=" flex space-x-1 justify-between items-center bg-gray-100 rounded border px-2  ">
                    {" "}
                    <BiSolidLockOpen className="inline " />
                    <p>{tool.pricing}</p>
                  </div>
                  <div
                    className=" flex justify-center items-center text-2xl cursor-pointer tooltip tooltip-secondary"
                    data-tip={tool?.toolFeature}
                  >
                    <BsStars />
                  </div>
                </div>
                <div className="flex space-x-2 my-4">
                  {tool.toolTags.slice(0,3).map((tag, index) => (
                    <Link
                      href=""
                      className="hover:underline hover:text-secondary"
                      key={index}
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
                <div className=" flex overflow-hidden justify-between">
                  <button className="btn btn-outline border-secondary text-2xl px-12 rounded-full">
                    <BsBookmarkPlus />
                  </button>
                  <a target="_blank" href={tool.toolURL} className="btn btn-neutral border border-secondary  no-animation bg-secondary text-2xl px-12 rounded-full">
                    <SlShareAlt className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-xl font-bold">No tools available !! </div>
      )}
    </div>
  );
};

export default AiCard;
