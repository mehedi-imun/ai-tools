"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AiCard from "./AiCard";
import { fetchTools } from "@/actions/fetch-tool";

export function LoadMore() {
  const [tools, setTools] = useState([]);
  const [page, setPage] = useState(1);
//   console.log(tools)
  const { ref, inView } = useInView();
  const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreTools = async () => {
    // Once the page 8 is reached repeat the process all over again.
    await delay(2000);
    const nextPage = (page % 7) + 1;
    const newProducts = (await fetchTools(nextPage)) ?? [];
    setTools((prevProducts) => [...prevProducts, ...newProducts]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreTools();
    }
  }, [inView]);

  return (
    <>
      <AiCard tools={tools}></AiCard>
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
    <span className="loading loading-ring loading-lg"></span>
      </div>
    </>
  );
}