import { FaUsers } from "react-icons/fa";
import { BsBookmarkPlus,BsTools } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="mb-12 mt-6 flex flex-col justify-center md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-6">
    <div className="text-center">
      <div className="flex justify-center items-center space-x-6 my-4 text-[#FD03CD]">
        <span>
          <FaUsers className="inline text-xl md:text-2xl mr-3" />
          34 K
        </span>
        <span>
          <BsBookmarkPlus className="inline text-xl  mr-3" />
          3244 K
        </span>
      </div>
      <h3 className="text-5xl md:text-6xl font-bold">JACK AI TOOLS</h3>
      <h1 className="text-xl md:text-2xl uppercase font-medium text-gray-600 my-3">
        Largest Collection of AI Tools, Continuously Updated
      </h1>
      <div className="lg:space-x-16 space-y-6">
        <Link href="/recent" className="btn relative rounded-full">
          <BsTools className="text-2xl md:text-3xl "></BsTools>Today added tools
          <div className="badge badge-secondary badge-sm text-white absolute z-10 top-[-5px] right-[-5px]">9</div>
        </Link>
        <Link href="/news" className="btn btn-outline btn-secondary relative rounded-full">
          <BiNews className="text-2xl md:text-3xl"></BiNews>Today added news
          <div className="badge badge-secondary badge-sm text-white absolute z-10 top-[-5px] right-[-5px]">9</div>
        </Link>
      </div>
    </div>
    
  </div>
  );
};

export default Banner;
