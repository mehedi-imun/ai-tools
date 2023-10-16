"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDislike, AiOutlineLike, AiTwotoneStar } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { Rating } from "react-simple-star-rating";
const reviews = [
  {
    rating: 4,
    content: "This tool is amazing! It helped me a lot with my work.",
    createAt: "14 Sept",
  },
  {
    rating: 1,
    content: "This tool is amazing! It helped me a lot with my work.",
    createAt: "14 Sept",
  },
  {
    rating: 4,
    content: " It helped me a lot with my work.",
    createAt: "14 Sept",
  },
  {
    rating: 4,
    content: "t with my work.",
    createAt: "14 Sept",
  },
  {
    rating: 4,
    content: "This work.",
    createAt: "14 Sept",
  },
  {
    rating: 4,
    content: "amazing! It h",
    createAt: "14 Sept",
  },
  {
    rating: 4,
    content: "This tool is amazing! ",
    createAt: "14 Sept",
  },
  {
    rating: 3,
    content: " helped me a lot with my work.",
    createAt: "14 Sept",
  },
  {
    rating: 5,
    content: " work.",
    createAt: "11 Sept",
  },
  // Add more reviews here...
];
function Reviews({ tool }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const reviewsPerPage = 5; // Number of reviews per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews?.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  let ratingCounts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  reviews?.forEach((review) => {
    const rating = review.rating;
    ratingCounts[rating]++;
  });
  const totalReviews = reviews?.length;
  const percentages = {};
  for (let rating = 1; rating <= 5; rating++) {
    const count = ratingCounts[rating];
    const percentage = Math.round((count / totalReviews) * 100);
    percentages[rating] = percentage;
  }

  return (
    <div>
      <div className="" id="reviews">
        <h3 className="font-bold text-gray-500 my-6 text-center">
          {" "}
          {tool?.title} Reviews
        </h3>
        <div className="card w-full bg-[#f000b80c] ">
          <div className="card-body text-black  ">
            <div className="grid grid-cols-1 md:grid-cols-4 ">
              <div className="hidden md:block"></div>
              <div className="col-span-1 md:col-span-2 space-y-3 ">
                <p className="font-bold text-center md:text-left">
                  What do you think about {tool?.title} ?
                </p>
                <p className="text-center md:text-left">
                  Leave a review for the community
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-end col-span-1">
                <Rating
                  onClick={() => setIsOpen(true)}
                  SVGstyle={{ display: "inline" }}
                  initialValue={0}
                  size={40} // Reduce the size for smaller screens
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center  mx-auto z-50 ">
          <div
            className="fixed inset-0 bg-black opacity-30"
            onClick={closeModal}
          ></div>
          <div className="bg-white px-4 lg:px-12 py-6 rounded-lg shadow-lg z-10 lg:w-[30%] w-[80%]">
            <h2 className="text-sm text-center font-semibold mb-6 ">
              What do you think about {tool?.title} ?
            </h2>

            {/* Pricing Filter */}
            <div className="space-y-2">
              <span className="font-semibold">What is your rating?</span>
              <div className=" ">
                <Rating
                  onClick={() => setIsOpen(true)}
                  SVGstyle={{ display: "inline" }}
                  initialValue={0}
                  size={40} // Reduce the size for smaller screens
                />
              </div>
              <p className="my-6 text-xl">What is your review of the tool?</p>
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  type="text"
                  placeholder="Tel us about your experience with this tool "
                  className="input input-bordered w-full mb-5 textarea lg:h-40"
                  {...register("category")}
                  required
                />
                <label>
                  Your review will be submitted for approval and will be visible
                  to other users after it is approved. We do not allow any
                  profanity, promo links or impersonation. It can take one to
                  three business days for your review to be approved.
                </label>
                <div className="mt-6 flex justify-between  lg:space-x-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn lg:btn-wide rounded-full"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="btn  btn-secondary lg:btn-wide rounded-full"
                  >
                    SUBMIT REVIEW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="lg:grid lg:grid-cols-2 mt-12">
        <div className="flex flex-col space-y-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div
              key={rating}
              className="grid grid-cols-10  items-center justify-start space-x-6 text-xl"
            >
              <span className="lg:col-span-1 ">{rating}</span>

              <AiTwotoneStar className="inline col-span-1 text-warning" />

              <progress
                className="progress progress-warning lg:w-80 w-40 h-3 col-span-6"
                value={percentages[rating]}
                max="100"
              ></progress>
              <span className="col-span-2 ">{percentages[rating]} %</span>
            </div>
          ))}
        </div>
        <div>
          {currentReviews?.map((review, index) => (
            <div key={index} className="px-8">
              <div key={index} className="px-8">
                <h3 className="text-lg font-bold mb-3">{review.author}</h3>
                <div className="mb-3">
                  <Rating
                    SVGstyle={{ display: "inline" }}
                    initialValue={review.rating}
                    size={30} // Reduce the size for smaller screens
                    allowHover={false}
                    readonly={true}
                  />
                </div>
                <p>{review.content}</p>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center space-x-6">
                    <span>{review.createAt}</span>
                    <button className="btn no-animation text-secondary border-0 bg-transparent btn-circle">
                      <BsShareFill className="text-2xl inline " />
                    </button>
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                      <button className="btn no-animation text-secondary border-0 bg-transparent btn-circle">
                        <AiOutlineLike className=" inline text-xl " />
                      </button>
                      <button className="btn no-animation text-secondary border-0 bg-transparent btn-circle">
                        <AiOutlineDislike className="inline text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="divider my-4"></div>
              </div>
            </div>
          ))}

          {reviews?.length > reviewsPerPage && (
            <div className="text-center mt-4">
              {Array.from(
                { length: Math.ceil(reviews?.length / reviewsPerPage) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`btn ${
                      currentPage === i + 1
                        ? "btn btn-sm btn-secondary"
                        : "btn btn-sm"
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
