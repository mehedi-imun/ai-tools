"use client";
import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { HiFilter } from "react-icons/hi";
import Category from "./Category";
const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState(""); // Default sorting option
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const filterOptions = {
    pricing: [
      { label: "Free", value: "Free" },
      { label: "Premium", value: "Premium" },
      { label: "Free Trial", value: "Free_Trial" },
      { label: "Paid", value: "Paid" },
      { label: "Contact for Pricing", value: "Contact_For_Pricing" },
      { label: "Deals", value: "deals" },
    ],
    features: [
      { label: "Feature 1", value: "feature1" },
      { label: "Feature 2", value: "feature2" },
      { label: "Feature 3", value: "feature3" },
      { label: "Feature 4", value: "feature4" },
      // Add more feature options here
    ],
  };

  const handleFilterChange = (value) => {
    if (selectedFilters.includes(value)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    } else {
      setSelectedFilters([...selectedFilters, value]);
    }
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    closeModal();
  };

  const applyFilters = () => {
    const queryParams = [];
    closeModal();
    if (selectedFilters.length > 0) {
      queryParams.push(`pricing=${selectedFilters.join("&pricing=")}`);
    }
    if (searchQuery) {
      queryParams.push(`searchTerm=${searchQuery}`);
    }
    if (selectedSortOption) {
      queryParams.push(`sortBy=${selectedSortOption}`);
    }
    const apiUrl = `/api/tools${
      queryParams.length > 0 ? `?${queryParams.join("&")}` : ""
    }`;
    console.log(apiUrl);
  };
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.name === "searchTerm") {
      applyFilters();
    }
  };
  const handleSearchButtonClick = () => {
    applyFilters();
  };

  const handleSortOptionClick = (option) => {
    setSelectedSortOption(option);
    applyFilters();
    setIsDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="mb-12">
      <div className="flex items-center space-x-2 ">
        <div className="form-control w-full mb-4">
          <div className="input-group input focus:outline-none border-gray-300 ">
            <input
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              name="searchTerm"
              type="text"
              placeholder="Search ai tools…"
              className="w-full p-2"
            />
            <button
              onClick={handleSearchButtonClick}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="btn lg:px-12  bg-transparent border-gray-300 relative"
          onClick={openModal}
        >
          Filter
          {selectedFilters.length > 0 && (
            <div className="badge badge-secondary badge-sm text-white absolute z-10 top-[-10px] right-[-10px]">
              {selectedFilters ? selectedFilters?.length : ""}
            </div>
          )}
          <HiFilter className="text-2xl" />
        </button>
        <Category></Category>
        <div className="relative">
          <button className="btn lg:px-12 " onClick={() => toggleDropdown()}>
            Sort by: {selectedSortOption} <BiSolidDownArrow />
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
      {selectedFilters.length > 0 && (
        <button onClick={() => clearFilters()}>clear filter</button>
      )}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div
            className="fixed inset-0 bg-black opacity-30"
            onClick={closeModal}
          ></div>
          <div className="bg-white px-12 py-6 rounded-lg shadow-lg z-10">
            <h2 className="text-sm font-semibold mb-6 ">
              Select Filters to Apply
            </h2>

            {/* Pricing Filter */}
            <div className="space-y-2">
              <span className="font-semibold">Pricing</span>
              <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                {filterOptions.pricing.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-md mr-3"
                      value={option.value}
                      checked={selectedFilters.includes(option.value)}
                      onChange={() => handleFilterChange(option.value)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Features Filter */}
            <div className="space-y-2 mt-12">
              <span className="font-semibold">Features</span>
              <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                {filterOptions.features.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-md mr-3 disabled"
                      disabled
                      value={option.value}
                      checked={selectedFilters.includes(option.value)}
                      onChange={() => handleFilterChange(option.value)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-between space-x-6">
              <button onClick={clearFilters} className="btn btn-wide">
                Clear
              </button>
              <button
                onClick={applyFilters}
                className="btn  btn-secondary btn-wide"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
