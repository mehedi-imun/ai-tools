"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
export const CategoryModal = ({ category, onClose }) => {
  const [subcategories, setSubcategories] = useState(category.subcategories);
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
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedData = {
      category: data.category,
      subcategories: subcategories,
    };
    console.log(updatedData);
    // reset();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div onClick={onClose} className="fixed inset-0 bg-black opacity-30"></div>
      <div className="bg-white px-4 lg:px-12 py-6 rounded-lg shadow-lg z-10 lg:w-[30%] w-[80%] mx-auto">
      <div className="flex justify-end text-3xl"><button className="" onClick={onClose}><RxCross2 className="text-secondary"/></button></div>

        <p>Update category goes here.</p>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <input
            type="text"
            value={category.name}
            placeholder="main category"
            className="input input-bordered w-full mb-5"
            {...register("category")}
            required
          />

          <label className="label">
            <span className="label-text">Subcategories*</span>
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
    </div>
  );
};
