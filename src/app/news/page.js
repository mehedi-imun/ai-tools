"use client";
import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsBookmarkPlus, BsTools } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";
const NewsCard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  
  const link =
    "https://stackoverflow.com/questions/72443582/how-to-identify-react-components-with-the-useinview-hook-and-pass-their-values-t";
  return (
    <div>
      <h3 className="text-4xl my-6">Latest AI News | All Time</h3>
      <div className="flex justify-between my-12">
        <div className="flex space-x-11">
          <div className="relative ">
            <button
              className="btn  rounded-full btn-outline "
             
            >
              Filer by Time: <BiSolidDownArrow />
            </button>
            {isDropdownOpen && (
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 absolute">
                <li>
                  <button
                    className="w-full"
                    
                  >
                    Today
                  </button>
                </li>
                <li>
                  <button
                    className="w-full"
                   
                  >
                   This Week 
                  </button>
                </li>
                <li>
                  <button
                    className="w-full"
                
                  >
                    This month 
                  </button>
                </li>
                <li>
                  <button
                    className="w-full"
                   
                  >
                    All time
                  </button>
                </li>
              </ul>
            )}
          </div>
          <div className="relative ">
            <button
              className="btn  rounded-full btn-outline"
              
            >
            Filer by Category:  <BiSolidDownArrow />
            </button>
            {isDropdownOpen && (
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 absolute">
                <li>
                  <button
                    className="w-full"
                    onClick={() => handleSortOptionClick("Verified")}
                  >
                    Verified
                  </button>
                </li>
                <li>
                  <button
                    className="w-full"
                    onClick={() => handleSortOptionClick("New")}
                  >
                    New
                  </button>
                </li>
                <li>
                  <button
                    className="w-full"
                    onClick={() => handleSortOptionClick("Popular")}
                  >
                    Popular
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="relative ">
          <button
            className="btn lg:px-12 rounded-full btn-outline "
            
          >
            Sort by:  <BiSolidDownArrow />
          </button>
          {isDropdownOpen && (
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 absolute">
              <li>
                <button
                  className="w-full"
                  onClick={() => handleSortOptionClick("Verified")}
                >
                  Verified
                </button>
              </li>
              <li>
                <button
                  className="w-full"
                  onClick={() => handleSortOptionClick("New")}
                >
                  New
                </button>
              </li>
              <li>
                <button
                  className="w-full"
                  onClick={() => handleSortOptionClick("Popular")}
                >
                  Popular
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
      
      <div className="card border mt-6 ">
        <div className="card-body">
          <a
            target="_blank"
            href={link}
            className=" box-content overflow-hidden"
          >
            <span className="hover:text-secondary">
              text-secondary hover:text-secondary hover:text-secondary
            </span>{" "}
            <span className="text-secondary flex-wrap">
              {link.slice(0, 50)}
            </span>
            .... <LuExternalLink className="inline"></LuExternalLink>{" "}
          </a>
          <div className="flex flex-col mt-6 md:flex-row md:items-center md:justify-between">
            <div className="text-secondary md:mt-0">12 hours ago</div>
            <button className="bg-gray-200 rounded-lg px-6 mt-4 md:mt-0 text-black font-light">
              Interesting
            </button>
            <div className="border flex justify-center p-3 border-secondary text-secondary md:ml-4 mt-4 md:mt-0">
              <BsBookmarkPlus className="inline text-xl" /> 1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
