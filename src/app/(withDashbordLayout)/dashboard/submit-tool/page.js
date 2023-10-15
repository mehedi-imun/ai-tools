"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
const SubmitToolPage = () => {
  const [toolTags, setToolTags] = useState([]);
  const [currentToolTags, setCurrentToolTags] = useState("");
  const [selectedCategory,setSelectedCategory]=useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  
  const handleAddTag = () => {
    if (currentToolTags.trim() !== "") {
      setToolTags([...toolTags, currentToolTags]);
      setCurrentToolTags("");
    }
  };

  const handleDeleteTag = (toolTag) => {
    const updatedToolTags = toolTags?.filter(
      (item) => item !== toolTag
    );
    setToolTags(updatedToolTags);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedData = data
    updatedData.category=selectedCategory
    updatedData.subcategories=selectedSubcategory
    updatedData.toolTags=toolTags.map((str) => str.replace(/\s/g, ''))
    updatedData.userId="5465132sdafasgi15fg"
    console.log(updatedData)
  }
  const categories = [
    {
      name: "Technology",
      subcategories: ["Software", "Hardware", "Gadgets"],
    },
    {
      name: "r",
      subcategories: ["Software2", "Hardware2", "Gadgets2"],
    },
    
  ];
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    setSelectedSubcategory(""); 
  };
  const handleSubCategoryChange = (e) => {
    const selectedSubCategory = e.target.value;
    setSelectedSubcategory(selectedSubCategory); 
  };
  return (
    <div className="shadow-lg p-5 form_field">
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
          <span className="label-text">Use case-2*</span>
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
          type="number"
          className="input input-bordered w-full mb-5"
          {...register("price")}
          required
        />
        <label className="label">
          <span className="label-text">Price Plan</span>
        </label>
        <select
          className="select select-bordered w-full"
          {...register("pricePlan")}
          required
        >
          <option disabled selected>
            Select price plan
          </option>
          <option value="DOLLARS_PER_MONTH">DOLLARS PER MONTH</option>
          <option value="DOLLARS_PER_YEAR">DOLLARS PER YEAR</option>
        </select>
        <label className="label">
          <span className="label-text">Payment Model</span>
        </label>
        <select
          className="select select-bordered w-full"
          {...register("pricing")}
          required
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
          required
        />
        <label className="label">
          <span className="label-text">Tool Category*</span>
        </label>
        <select
        className="select select-bordered w-full"
        onChange={(e)=>handleCategoryChange(e)}
        value={selectedCategory}
        required
        
      >
        <option value="" disabled>
          Select tool category
        </option>
        {categories?.map((category,index)=><option value={category.name} key={index}>{category.name}</option>)}
        
      </select>
        <label className="label mb-5">
          <span className="label-text">
            Select the category of this tool. Ex:SEO or Video Generation
          </span>
          
        </label>

        <select
        className="select select-bordered w-full"
        onChange={handleSubCategoryChange}
        value={selectedSubcategory}
        required
      
      >
        <option value="" disabled>
          Select subcategory
        </option>
        {categories
          .find((category) => category.name === selectedCategory)
          ?.subcategories.map((subcategory, index) => (
            <option key={index} value={subcategory}>
              {subcategory}
            </option>
          ))}
      </select>
        <label className="label">
          <span className="label-text">Tool Tags (Select 1)</span>
        </label>
         <div className="flex space-x-2 mb-4 items-center">
            <input
              type="text"
              {...register("tolTags")}
              placeholder="Add tags"
              className="input input-bordered"
              value={currentToolTags}
              onChange={(e) => setCurrentToolTags(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="btn btn-sm btn-secondary"
            >
              Add
            </button>
          </div>
          <div className="flex space-x-2">
            {toolTags.map((toolTag,index) => (
              <p key={index} className="border p-2 rounded-lg border-secondary bg-gray-300 text-neutral">
                {toolTag}
                <button
                  type="button"
                  onClick={() => handleDeleteTag(toolTag)}
                >
                  &times;
                </button>
              </p>
            ))}
          </div>

        <label className="label">
          <span className="label-text">Tool Screenshot*</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full"
          {...register("toolScreenshot")}
          
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
