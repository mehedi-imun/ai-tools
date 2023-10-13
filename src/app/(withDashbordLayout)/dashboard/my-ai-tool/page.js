"use client";
import Image from "next/image";
import { useState } from "react";
const MyAiToolPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [viewPendingToolData, setViewPendingToolData] = useState(null);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const paymentLink = "https://jackmateoai.gumroad.com/l/submit-ai-tool";
  const tools = [
    {
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
    },
    {
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
      status: "PUBLISHED ",
      toolTags: ["AI", "MachineLearning", "Sample"],
      toolScreenshot: "https://sample-ai-tool.com/screenshot.png",
      createdAt: "2023-10-08T14:39:04.137Z",
      updatedAt: "2023-10-08T14:49:52.030Z",
      userId: "123",
      category: "ai-books",
      subcategories: "data-science",
    },
  ];
  const openViewModal = (tool) => {
    setViewPendingToolData(tool);
    document.getElementById("my_modal_view").showModal();
  };

  return (
    <div>
      <div className="">
        <div className="card w-full  ">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Ai tool Name</th>
                  <th>status</th>
                  <th>payment</th>
                  <th>see details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {tools ? (
                  tools.map((tool, index) => (
                    <>
                      <tr>
                        <th>{index + 1}</th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src="https://www.cnet.com/a/img/resize/9a13e1e92a7b66cbff9db2934b3f66bf01a4afb6/hub/2023/08/24/821b0d86-e29b-4028-ac71-ef63ca020de8/gettyimages-1472123000.jpg?auto=webp&fit=crop&height=675&width=1200"
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{tool.title}</div>
                            </div>
                          </div>
                        </td>
                        <td>{tool.status}</td>

                       
                        {<th>
                {tool.status === 'PENDING' ?  
                          <a
                            target="_blank"
                            href={paymentLink}
                            className="btn btn-ghost btn-xs"
                          >
                            confirm payment
                          </a>
                        :<button className="btn btn-ghost btn-xs btn-disabled" >payment success</button>}
              </th>}
                        <th>
                          <button
                            className="btn btn-ghost btn-xs"
                            onClick={() => openViewModal(tool)}
                          >
                            view
                          </button>
                        </th>
                      </tr>
                    </>
                  ))
                ) : (
                  <p>not tool found</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <dialog id="my_modal_view" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className=" flex justify-center items-center">
            <div>
              {" "}
              <p>title:{viewPendingToolData?.title}</p>
              <p>category: {viewPendingToolData?.category}</p>
              <p>subcategory: {viewPendingToolData?.subcategories}</p>
              <p>Tool Description: {viewPendingToolData?.toolDescription}</p>
              <p>short Description: {viewPendingToolData?.shortDescription}</p>
              <p>useCase1: {viewPendingToolData?.useCase1}</p>
              <p>use Case2: {viewPendingToolData?.useCase2}</p>
              <p>use Case3: {viewPendingToolData?.useCase3}</p>
              <p>price: {viewPendingToolData?.price}</p>
              <p>pricePlan: {viewPendingToolData?.pricePlan}</p>
              <p>pricing: {viewPendingToolData?.pricing}</p>
              <p>tool URL: {viewPendingToolData?.toolURL}</p>
              <p>toolFeature: {viewPendingToolData?.toolFeature}</p>
              <p>
                Tool Bookmark Count: {viewPendingToolData?.aiToolBookmarkCount}
              </p>
              <p>status: {viewPendingToolData?.status}</p>
              <p>
                toolTags:{" "}
                {viewPendingToolData?.toolTags.map((toolTag) => (
                  <span key={toolTag}>#{toolTag} </span>
                ))}
              </p>
              <p>views: {viewPendingToolData?.views}</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyAiToolPage;
