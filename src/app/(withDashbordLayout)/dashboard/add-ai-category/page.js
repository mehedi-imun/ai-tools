"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CategoryModal } from "./CategoryModal";
const AddAiCategory = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [currentSubcategory, setCurrentSubcategory] = useState("");

  const handleAddSubcategory = () => {
    if (currentSubcategory.trim() !== "") {
      setSubcategories([...subcategories, currentSubcategory]);
      setCurrentSubcategory("");
    }
  };

  const handleDeleteSubcategory = (subcategory) => {
    const updatedSubcategories = subcategories?.filter(
      (item) => item !== subcategory
    );
    setSubcategories(updatedSubcategories);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedData = data;
    const formattedText = updatedData.category.replace(/\s/g, "");
    updatedData.category = formattedText;
    updatedData.subcategories = subcategories.map((str) =>
      str.replace(/\s/g, "")
    );
    console.log(updatedData);
    setSubcategories([]);
    reset();
  };
  const categories = [
    {
      id: "clnoswfv20000v7v4u78tl28q",
      name: "Technology",
      subcategories: ["Software", "Hardware", "Gadgets"],
    },
    {
      id: "anotherCategoryId",
      name: "Science",
      subcategories: ["Physics", "Chemistry", "Biology"],
    },
    {
      id: "yetAnotherCategoryId",
      name: "Food",
      subcategories: ["Recipes", "Cooking Tips", "Restaurant Reviews"],
    },
    {
      id: "categoryFourId",
      name: "Travel",
      subcategories: ["Destinations", "Travel Tips", "Accommodations"],
    },
    {
      id: "categoryFiveId",
      name: "Sports",
      subcategories: ["Football", "Basketball", "Soccer"],
    },
    {
      id: "categorySixId",
      name: "Music",
      subcategories: ["Rock", "Pop", "Jazz"],
    },
    {
      id: "categorySevenId",
      name: "Art",
      subcategories: ["Painting", "Sculpture", "Photography"],
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };
  return (
    <div>
      <div className=" shadow-lg mb-4 p-5 form_field">
        <h1 className="text-center uppercase text-xl font-bold">
          Add Ai Category
        </h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <input
            type="text"
            placeholder="main category"
            className="input input-bordered w-full mb-5"
            {...register("category")}
            required
          />
          <label className="label">
            <span className="label-text">subcategories*</span>
          </label>
          <div className="flex space-x-2 mb-4 items-center">
            <input
              type="text"
              placeholder="Add subcategories"
              className="input input-bordered"
              value={currentSubcategory}
              onChange={(e) => setCurrentSubcategory(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddSubcategory}
              className="btn btn-sm btn-secondary"
            >
              Add
            </button>
          </div>
          <div className="flex space-x-2">
            {subcategories.map((subcategory) => (
              <p
                key={subcategory}
                className="border p-2 rounded-lg border-secondary bg-gray-300 text-neutral"
              >
                {subcategory}
                <button
                  type="button"
                  onClick={() => handleDeleteSubcategory(subcategory)}
                >
                  &times;
                </button>
              </p>
            ))}
          </div>

          <button
            className="btn btn-outline btn-secondary relative w-full my-6"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-secondary text-xl font-bold text-center my-6">
          Update Categories
        </h3>
        <p>Browse all ai categories for update</p>
        <div>
          {categories ? (
            categories.map((category) => (
              <div className=" my-6" key={category.id}>
                <h3
                  onClick={() => handleCategoryClick(category)}
                  className="my-2 text-secondary font-bold text-xl cursor-pointer"
                >
                  {category.name}
                </h3>
              </div>
            ))
          ) : (
            <p>not available</p>
          )}
        </div>
        {isModalOpen && (
          <CategoryModal category={selectedCategory} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default AddAiCategory;
