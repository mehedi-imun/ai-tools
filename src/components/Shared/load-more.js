"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AiCard from "./AiCard";
import { fetchTools } from "@/actions/fetch-tool";

export function LoadMore() {
  const [tools, setTools] = useState([]);
  const [page, setPage] = useState(1);
  const [noMoreData, setNoMoreData] = useState(false);

  const { ref, inView } = useInView();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreTools = async () => {
    if (noMoreData) return;

    // Delay for simulating loading, you can remove this for production
    await delay(2000);
    
    const nextPage = (page % 7) + 1;
    const newProducts = (await fetchTools(nextPage)) ?? [];

    if (newProducts.length === 0) {
      setNoMoreData(true);
    } else {
      setTools((prevProducts) => [...prevProducts, ...newProducts]);
      setPage(nextPage);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMoreTools();
    }
  }, [inView]);

  return (
    <>
      <AiCard tools={tools}></AiCard>
      <div className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3" ref={ref}>
        {noMoreData ? (
          <span>No more data</span>
        ) : (
          <span className="loading loading-ring loading-lg"></span>
        )}
      </div>
    </>
  );
}
