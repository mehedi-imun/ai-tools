import AiCard from "@/components/Shared/AiCard";
import React from "react";

const page = () => {
  const todayDate = new Date();
  const yesterdayDate = new Date(todayDate);
  yesterdayDate.setDate(todayDate.getDate() - 1);
  const options = { month: "long", day: "numeric" };
  const today = todayDate.toLocaleString("en-us", options);
  const yesterday = yesterdayDate.toLocaleString("en-us", options);
  return (
    <div>
      <div className="my-6">
        <h3 className="text-2xl">Today: {today}</h3>
        <p>10 AI tools added today.</p>
        <div className="w-full grid lg:grid-cols-3 grid-cols-1  gap-12 mx-auto my-6">
        <AiCard></AiCard>
        <AiCard></AiCard>
        <AiCard></AiCard>
      </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl">Yester Day: {yesterday}</h3>{" "}
        <p>10 AI tools added yesterday.</p>
        <div className="w-full grid lg:grid-cols-3 grid-cols-1  gap-12 mx-auto my-6">
        <AiCard></AiCard>
        <AiCard></AiCard>
        <AiCard></AiCard>
      </div>
      </div>
    </div>
  );
};

export default page;
