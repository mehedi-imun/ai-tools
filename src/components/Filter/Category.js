"use client"
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const CategoryCarousel = () => {
  const categories = [
    "Category 1",
    "Catry 2",
    "Cate",
    "Category 4",
    "Category 5",
    "Category 6",
    "Catetegory 8",
    "Cate 9",
    "Category 10",
    // Add more categories as needed
  ];

  const itemsPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(categories.length / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate the range of categories to display on the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCategories = categories.slice(startIndex, endIndex);

  return (
    <div className="carousel lg:flex hidden items-center space-x-2 justify-between w-[60%] ">
      <button className="btn btn-sm btn-circle " onClick={handlePreviousPage} disabled={currentPage === 0}>
        <AiOutlineArrowLeft/>
      </button>
      <div className="flex justify-around items-center  space-x-3">
        {visibleCategories.map((category, index) => (
          <div
            key={index}
            className="btn btn-sm rounded-full"
          >
            {category}
          </div>
        ))}
      </div>
      <button
      className="btn btn-circle btn-sm "
        onClick={handleNextPage}
        disabled={currentPage === Math.ceil(categories.length / itemsPerPage) - 1}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default CategoryCarousel;
