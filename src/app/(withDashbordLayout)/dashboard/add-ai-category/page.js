"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
    const formattedText =updatedData.category.replace(/\s/g, '');
    updatedData.category=formattedText
    updatedData.subcategories=subcategories.map((str) => str.replace(/\s/g, ''))
    console.log(updatedData)
    setSubcategories([])
    reset()
  };
  const onSubmitNews = (data) => {
    const updatedData = data;
    const formattedText =updatedData.category.replace(/\s/g, '');
    updatedData.category=formattedText
   console.log(updatedData)
    reset()
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
              <p key={subcategory} className="border p-2 rounded-lg border-secondary bg-gray-300 text-neutral">
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
    </div>
  );
};

export default AddAiCategory;
