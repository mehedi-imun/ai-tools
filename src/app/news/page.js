import React from "react";
import { BsBookmarkPlus, BsTools } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";
const page = () => {
  const link = "https://stackoverflow.com/questions/72443582/how-to-identify-react-components-with-the-useinview-hook-and-pass-their-values-t"
  return (
    <div>
      <h3 className="text-2xl">Latest AI News | All Time</h3>
      <div className="card   border mt-6">
        <div className="card-body">
          <a target="_blank" href={link} className=" "><span className="hover:text-secondary">text-secondary hover:text-secondary hover:text-secondary</span>  <span className="text-secondary flex-wrap">{link.slice(0,50)}</span>.... <LuExternalLink className="inline"></LuExternalLink> </a>
          <div className="flex justify-between mt-6 items-center">
            <div>12 hours ago</div>
            <button className=" bg-gray-200  rounded-lg px-6   text-black font-light ">
            Interesting
        </button>
            <div className="border p-3 border-secondary text-secondary"><BsBookmarkPlus className="inline text-xl " /> 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
