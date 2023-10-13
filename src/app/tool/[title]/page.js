"use client";
import { BiSolidLockOpen } from "react-icons/bi";
import { Rating } from "react-simple-star-rating";

const tool = {
  id: "123",
  title: "hello",
  toolDescription: "Sample description",
  shortDescription: "Short summary",
  useCase1: "Use case 1 description",
  useCase2: "Use case 2 description",
  useCase3: "Use case 3 description",
  price: 0,
  pricePlan: "DOLLARS_PER_MONTH",
  pricing: "Free",
  toolURL: "https://sample-ai-tool.com",
  toolFeature: "Key features of the tool",
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
};

const ToolDetailPage = ({ params }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-5">
        <div className=" bg-[#f8f8f8c7]  rounded-l-sm p-2 absolute z-10 top-2 right-0 text-black font-bold">
          {tool.status}
        </div>
        <figure>
          <img
            src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg"
            alt="tool image"
          />
        </figure>
        <div className=" bg-[#f8f8f8c7]  rounded-l-sm p-2 absolute z-10 top-2 left-0 text-black font-bold">
          ${tool.price}/M
        </div>
        <div className="card-body">
          <div className="flex justify-start items-center space-x-1">
            <h2 className="card-title text-2xl">{tool?.title}</h2>
            <Rating
              SVGstyle={{ display: "inline" }}
              initialValue={5}
              size={18}
              allowHover={false}
              readonly={true}
            />
            <span>(90)</span>
          </div>
          <p>Price Plan: {tool?.pricePlan}</p>
          <p>{tool?.shortDescription}</p>
          <p>{tool?.toolDescription}</p>
          <div>
            <p className="font-bold">Features:</p>
            <ul>
              <li>{tool?.toolFeature}</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Use Cases:</p>
            <ul>
              <li>{tool?.useCase1}</li>
              <li>{tool?.useCase2}</li>
              <li>{tool?.useCase3}</li>
            </ul>
          </div>

          <div className=" flex space-x-1 justify-between items-center bg-gray-100 rounded border px-2  w-24">
            {" "}
            <BiSolidLockOpen className="inline" />
            <p>{tool?.pricing}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;
