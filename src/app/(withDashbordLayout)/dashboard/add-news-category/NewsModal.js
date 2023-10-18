"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
export const NewsModal = ({ category, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black opacity-30"
      ></div>
      <div className="bg-white px-4 lg:px-12 py-6 rounded-lg shadow-lg z-10 lg:w-[30%] w-[80%] mx-auto">
        <div className="flex justify-end text-3xl">
          <button className="" onClick={onClose}>
            <RxCross2 className="text-secondary" />
          </button>
        </div>

        <p>Update category goes here.</p>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            <div className="label-text font-bold">
              Current Category:{" "}
              <span className="text-secondary">{category.category}</span>
            </div>
          </label>
          <input
            type="text"
            placeholder="Updated news category"
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
