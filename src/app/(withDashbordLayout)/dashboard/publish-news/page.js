"use client";

import { useForm } from "react-hook-form";
const AddNews = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="bg-base-200 p-5 form_field">
        <h1 className="text-center uppercase text-xl font-bold">
          Publish a news
        </h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            <span className="label-text">News Title*</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full mb-5"
            {...register("title")}
            required
          />
          <label className="label">
            <span className="label-text">News Url*</span>
          </label>
          <input
            type="text"
            placeholder="pase your news link"
            className="input input-bordered w-full"
            {...register("newsUrl")}
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

export default AddNews;
