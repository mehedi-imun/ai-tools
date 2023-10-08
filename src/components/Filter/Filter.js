"use client";
import React, { useState } from "react";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

    if (selectedFilters.length > 0) {
      queryParams.push(`pricing=${selectedFilters.join("&pricing=")}`);
    }
    if (searchQuery) {
      queryParams.push(`searchTerm=${searchQuery}`);
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
      // Trigger the search action when Enter is pressed for the searchTerm input field
      applyFilters();
    }
  };
  return (
    <div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          name="searchTerm"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <button className="btn btn-outline" onClick={openModal}>
        Filter
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-30"
            onClick={closeModal}
          ></div>
          <div className="bg-white px-12 py-6 rounded-lg shadow-lg z-10">
            <h2 className="text-sm font-semibold mb-6">
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
                className="btn btn-secondary btn-wide"
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
