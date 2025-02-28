import Navbar from "../components/layout/Navbar";
import CommentBox from "../components/layout/CommentBox";
import PopularBlog from "../components/UI/BlogSection/PopularBlog";
import CategoryBlog from "../components/UI/BlogSection/CategoryBlog";
import SortableRow from "../components/layout/SortableRow";
import MobileBottomdiv from "../components/layout/MobileBottomdiv";
import { SlArrowDown } from "react-icons/sl";

const NormalUser = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="flex h-[89%]  w-full  md:px-8">
        {/* Left Section */}
        <div className="h-full relative   w-full md:pl-20 flex-nowrap md:py-15  overflow-y-auto md:w-[65%] sm:w-[100%]  py-4 px-2">
          <hr className="mt-10 text-zinc-300" />
          <div className="bg-zinc-300 absolute top-[6%] md:top-[12%] md:right-[10%] inline-block ">
            <div className="flex items-center gap-2 ">
              <h5>sort by: </h5>
              <h2>Recent</h2>
              <SlArrowDown className="text-sm" />
            </div>
          </div>

          {/* Comment Boxes */}
          <CommentBox className="mt-10" />
          <CommentBox className="mt-10" />
          <CommentBox className="mt-10" />
        </div>

        {/* Right Section */}
        <div className="h-full md:block hidden w-[35%] pl-22 py-7">
          <PopularBlog className="h-[43vh] w-[23vw]" />
          <CategoryBlog className="h-[29vh] w-[23vw]" />
        </div>
      </div>

      <MobileBottomdiv />
    </div>
  );
};

export default NormalUser;
