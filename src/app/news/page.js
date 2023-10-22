"use client";
import { useState, useEffect } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsBookmarkPlus, BsTools } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";
const newsCategory = [
  { category: "ai" },
  { category: "ai" },
  { category: "ai" },
  { category: "video" },
  { category: "ai" },
  { category: "ai" },
];
const NewsCard = () => {
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newsData, setNewsData] = useState([]);
  const link =
    "https://stackoverflow.com/questions/72443582/how-to-identify-react-components-with-the-useinview-hook-and-pass-their-values-t";

  const handleTimeDropdownToggle = () => {
    setIsTimeDropdownOpen(!isTimeDropdownOpen);
    // Close other dropdowns if open
    setIsCategoryDropdownOpen(false);
    setIsSortDropdownOpen(false);
  };

  const handleCategoryDropdownToggle = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    // Close other dropdowns if open
    setIsTimeDropdownOpen(false);
    setIsSortDropdownOpen(false);
  };

  const handleSortDropdownToggle = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
    // Close other dropdowns if open
    setIsTimeDropdownOpen(false);
    setIsCategoryDropdownOpen(false);
  };
  const applyFilters = () => {
    const queryParams = [];

    if (selectedSort) {
      queryParams.push(`sort=${selectedSort}`);
    }

    if (selectedTime) {
      queryParams.push(`time=${selectedTime}`);
    }

    if (selectedCategory) {
      queryParams.push(`category=${selectedCategory}`);
    }
    const apiUrl = `/api/tools${
      queryParams.length > 0 ? `?${queryParams.join("&")}` : ""
    }`;
    console.log(apiUrl);
  };
  const handleSortOptionClick = (option) => {
    setSelectedSort(option);
    setIsSortDropdownOpen(false);
    applyFilters();
  };

  const handleTimeFilterClick = (option) => {
    setSelectedTime(option);
    setIsTimeDropdownOpen(false);
    applyFilters();
  };

  const handleCategoryFilterClick = (option) => {
    setSelectedCategory(option);
    setIsCategoryDropdownOpen(false);
    applyFilters();
  };

  // Handle filtering options selection for time, category, and sorting

  return (
    <div className="p-4 lg:p-8 xl:p-12">
    
      {/* Apply padding for different devices */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl my-4 md:my-6">
        Latest AI News | All Time
      </h3>
      <div className="flex flex-col md:flex-row justify-between  my-4 md:my-8">
        <div className="lg:flex lg:space-x-8  justify-center items-center">
        <div className="relative mb-4 md:mb-0">
          {" "}
          {/* Margin for spacing */}
          <button
            className="btn rounded-full btn-outline"
            onClick={handleTimeDropdownToggle}
          >
            Filter by Time <BiSolidDownArrow />
          </button>
          {isTimeDropdownOpen && (
            <ul className="p-2 shadow menu dropdown-content z-10 bg-base-100 rounded-box w-36 absolute md:w-48 xl:w-60">
              {" "}
              {/* Adjust dropdown width */}
              <li>
                <button
                  onClick={() => handleTimeFilterClick("today")}
                  className="w-full"
                >
                  Today
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTimeFilterClick("week")}
                  className="w-full"
                >
                  This Week
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTimeFilterClick("month")}
                  className="w-full"
                >
                  This Month
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTimeFilterClick("allTime")}
                  className="w-full"
                >
                  All Time
                </button>
              </li>
            </ul>
          )}
        </div>

        <div className="relative mb-4 md:mb-0">
          <button
            className="btn rounded-full btn-outline"
            onClick={handleCategoryDropdownToggle}
          >
            Filter by Category <BiSolidDownArrow />
          </button>
          {isCategoryDropdownOpen && (
            <ul className="p-2 shadow menu dropdown-content z-10 bg-base-100 rounded-box w-36 absolute md:w-48 xl:w-60">
              {newsCategory?.map((cate, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleCategoryFilterClick(cate.category)}
                    className="w-full"
                  >
                    {cate.category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        </div>

        <div className="relative">
          <button
            className="btn lg:px-6 xl:px-12 rounded-full btn-outline"
            onClick={handleSortDropdownToggle}
          >
            Sort by <BiSolidDownArrow />
          </button>
          {isSortDropdownOpen && (
            <ul className="p-2 shadow menu dropdown-content z-10 bg-base-100 rounded-box w-36 absolute md:w-48 xl:w-60">
              <li>
                <button
                  onClick={() => handleSortOptionClick("Verified")}
                  className="w-full"
                >
                  Verified
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSortOptionClick("new")}
                  className="w-full"
                >
                  New
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSortOptionClick("popular")}
                  className="w-full"
                >
                  Popular
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
      {/* Rest of your card content */}
      <div className="card border mt-4 md:mt-8 xl:mt-12">
        <div className="card-body">
          <a
            target="_blank"
            href={link}
            className="text-sm md:text-base lg:text-lg xl:text-xl box-content overflow-hidden flex"
          >
            <span className="hover:text-secondary">
             title asdkfjhas frtasdi
            </span>{" "}
            <span className="text-secondary flex-wrap">
              {link.slice(0, 50)}
            </span>
            .... <LuExternalLink className="inline"></LuExternalLink>{" "}
          </a>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 md:mt-6 xl:mt-8">
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
