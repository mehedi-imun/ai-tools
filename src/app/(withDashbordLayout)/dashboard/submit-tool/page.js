"use client";

import { getApiKey } from "@/utils/getApiKey";
import { useForm } from "react-hook-form";
const SubmitToolPage = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${getApiKey()}`;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
      });
  };
  return (
    <div className="bg-base-200 p-5 form_field">
      <h1 className="text-center uppercase text-xl font-bold">
        Submit New Tool
      </h1>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          <span className="label-text">AI Tool Title*</span>
        </label>
        <input
          type="text"
          placeholder="Commercial name of the AI tool"
          className="input input-bordered w-full mb-5"
          {...register("title")}
          required
        />
        <label className="label">
          <span className="label-text">
            Tool Description (between 100-150 words)*
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered h-18 w-full mb-5"
          placeholder="Describe the tool functions, features, uses... etc."
          {...register("toolDescription")}
          required
        ></textarea>
        <label className="label">
          <span className="label-text">Short Description*</span>
        </label>
        <input
          type="text"
          placeholder="Describe the tool lass than 55 words."
          className="input input-bordered w-full"
          {...register("shortDescription")}
          required
        />
        <label className="label mb-5">
          <span className="label-text ">Between 100 and 200 characters</span>
        </label>
        <label className="label">
          <span className="label-text">Use case-1*</span>
        </label>
        <input
          type="text"
          placeholder="Easily turns blog post into videos"
          className="input input-bordered w-full"
          {...register("useCase1")}
          required
        />
        <label className="label mb-5">
          <span className="label-text ">
            Write 3 use cases of this tool. Each one should not be longer than
            30 words. Do not add numbers, we will format it.
          </span>
        </label>
        <label className="label">
          <span className="label-text">Use case-2</span>
        </label>
        <input
          type="text"
          placeholder="Ej. Leverage advanced AI to craft SEO-optimized content quickly and easily"
          className="input input-bordered w-full"
          {...register("useCase2")}
        />
        <label className="label mb-5">
          <span className="label-text ">Second use case</span>
        </label>
        <label className="label">
          <span className="label-text">Use case-3*</span>
        </label>
        <input
          type="text"
          placeholder="Generate high-quality copy in minutes"
          className="input input-bordered w-full"
          {...register("useCase3")}
          required
        />
        <label className="label mb-5">
          <span className="label-text ">Third use case</span>
        </label>
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full mb-5"
          {...register("price")}
        />
        <label className="label">
          <span className="label-text">Payment Model</span>
        </label>
        <select
          className="select select-bordered w-full"
          {...register("pricing")}
        >
          <option disabled selected>
            Select payment model
          </option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
          <option value="Free Trail">Free Trial</option>
          <option value="Contact For Pricing">Contact For Pricing</option>
        </select>
        <label className="label mb-5">
          <span className="label-text">
            What is the payment model of this tool
          </span>
        </label>
        <label className="label">
          <span className="label-text">Tool URL*</span>
        </label>
        <input
          type="url"
          className="input input-bordered w-full mb-5"
          {...register("toolURL")}
          required
        />
        <label className="label">
          <span className="label-text">Tool Feature</span>
        </label>
        <input
          type="text"
          placeholder="Features"
          className="input input-bordered w-full  mb-5"
          {...register("toolFeature")}
        />
        <label className="label">
          <span className="label-text">Tool Category*</span>
        </label>
        <select
          className="select select-bordered w-full"
          {...register("category")}
          required
        >
          <option disabled selected>
            Select tool category
          </option>
          <option>Travel</option>
          <option>Story</option>
          <option>Gaming</option>
        </select>
        <label className="label mb-5">
          <span className="label-text">
            Select the category of this tool. Ex:SEO or Video Generation
          </span>
        </label>

        <label className="label">
          <span className="label-text">Tool Tags (Select 1)</span>
        </label>
        <input
          type="text"
          placeholder="Tags"
          className="input input-bordered w-full mb-5"
          {...register("toolTags")}
        />
        <label className="label">
          <span className="label-text">Tool Screenshot*</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full"
          {...register("toolScreenshot")}
          required
        />
        <label className="label mb-5">
          <span className="label-text">Maximum file size: 5MB</span>
          <span className="label-text">Tool Landing Page Screenshot</span>
        </label>
        <button
          className="btn btn-outline btn-secondary relative w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitToolPage;
