"use client";
import Image from "next/image";
import { useState } from "react";
const MyAiToolPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const paymentLink = "https://jackmateoai.gumroad.com/l/submit-ai-tool";
  return (
    <div>
      <div className="">
        <div className="">
          <div className="tabs flex justify-center">
            <a
              id="tab1"
              className={`${
                activeTab === "tab1"
                  ? "tab tab-lg tab-bordered tab-active"
                  : "tab tab-lg tab-bordered"
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              pending tool
            </a>
            <a
              id="tab2"
              className={` ${
                activeTab === "tab2"
                  ? "tab tab-lg tab-bordered tab-active"
                  : "tab tab-lg tab-bordered"
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              published tool
            </a>
          </div>
          <div className="tabs_content">
            <div
              id="tab1_content"
              style={{ display: activeTab === "tab1" ? "block" : "none" }}
            >
              {/* <h3 className="text-center text-2xl mt-6">
              No ai Tools Favorited Yet.
            </h3>
            <div className="flex justify-center items-center">
              <Image
                loading="lazy"
                width={500}
                height={0}
                src="/assets/favorite.png"
              ></Image>
            </div> */}
              <div className="card w-full  ">
                <div className="card-body  ">
                  <div className="card shadow rounded relative border">
                    <div className="flex flex-col md:flex-row">
                      <figure className="overflow-hidden w-full md:w-1/2">
                        <img
                          className="w-full h-40 md:h-auto transition duration-300 ease-in-out hover:scale-110"
                          src="https://www.cnet.com/a/img/resize/9a13e1e92a7b66cbff9db2934b3f66bf01a4afb6/hub/2023/08/24/821b0d86-e29b-4028-ac71-ef63ca020de8/gettyimages-1472123000.jpg?auto=webp&fit=crop&height=675&width=1200"
                          alt="AI Image"
                        />
                      </figure>
                      <div className="card-body p-3 md:w-1/2">
                        <div className="flex justify-between items-center">
                          <div className="card-title">Ai gpt!</div>
                        </div>

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p className="text-error">
                          after payment complete please wait some time , we
                          verify your tool , then publish your tool ass soon as
                          possible
                        </p>
                        <div className="flex overflow-hidden justify-between">
                          <a
                            target="_blank"
                            href={paymentLink}
                            className="btn btn-outline border-secondary btn-sm rounded-full"
                          >
                            confirm payment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tab2_content"
              style={{ display: activeTab === "tab2" ? "block" : "none" }}
            >
              <h3 className="text-center text-2xl mt-6">
                {" "}
                No ai tool published Yet
              </h3>

              <div className="flex justify-center items-center">
                <Image
                  loading="lazy"
                  width={500}
                  height={0}
                  src="/assets/favorite.png"
                ></Image>
              </div>
              {/* <div className="card w-full  ">
                <div className="card-body  ">
                  <div className="card shadow rounded relative border">
                    <div className="flex flex-col md:flex-row">
                      <figure className="overflow-hidden w-full md:w-1/2">
                        <img
                          className="w-full h-40 md:h-auto transition duration-300 ease-in-out hover:scale-110"
                          src="https://www.cnet.com/a/img/resize/9a13e1e92a7b66cbff9db2934b3f66bf01a4afb6/hub/2023/08/24/821b0d86-e29b-4028-ac71-ef63ca020de8/gettyimages-1472123000.jpg?auto=webp&fit=crop&height=675&width=1200"
                          alt="AI Image"
                        />
                      </figure>
                      <div className="card-body p-3 md:w-1/2">
                        <div className="flex justify-between items-center">
                          <div className="card-title">Ai gpt!</div>
                        </div>

                        <p>If a dog chews shoes whose shoes does he choose?</p>

                        <div className="flex overflow-hidden justify-between">
                          <a
                            target="_blank"
                            href=""
                            className="btn btn-outline border-secondary btn-sm rounded-full"
                          >
                            published
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAiToolPage;
