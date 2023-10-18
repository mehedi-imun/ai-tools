"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NewsModal } from "./NewsModal";
const AddNewsCategory = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmitNews = (data) => {
    const updatedData = data;
    const formattedText = updatedData.category.replace(/\s/g, "");
    updatedData.category = formattedText;
    console.log(updatedData);
    reset();
  };
  const categories = [
    {
      category: "ai",
    },
    {
      category: "Software",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCategoryClick = (category) => {
    console.log(category);
    setSelectedCategory(category);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };
  return (
    <div>
      <div className="shadow-lg mb-4 p-5 form_field ">
        <h1 className="text-center uppercase text-xl font-bold">
          Add news Category
        </h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmitNews)}>
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
          Update news Categories
        </h3>
        <p>Browse all news categories for update</p>
        <div>
          {categories ? (
            categories.map((category) => (
              <div className=" my-6" key={category.id}>
                <h3
                  onClick={() => handleCategoryClick(category)}
                  className="my-2 text-secondary font-bold text-xl cursor-pointer"
                >
                  {category.category}
                </h3>
              </div>
            ))
          ) : (
            <p>not available</p>
          )}
          {isModalOpen && (
            <NewsModal category={selectedCategory} onClose={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNewsCategory;
