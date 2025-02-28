import Navbar from "../components/layout/Navbar";
import CommentBox from "../components/layout/CommentBox";
import PopularBlog from "../components/UI/BlogSection/PopularBlog";
import CategoryBlog from "../components/UI/BlogSection/CategoryBlog";
import MobileBottomdiv from "../components/layout/MobileBottomdiv";
import { SlArrowDown } from "react-icons/sl";

const NormalUser = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="flex h-[89%]  w-full  md:px-8">
        <div className="h-full relative  w-full md:pl-16 flex-nowrap md:py-15  overflow-y-auto md:w-[65%] sm:w-[100%]  py-4 px-4">
          <hr className=" text-zinc-300 md:mt-0 mt-7" />
          <div className="bg-zinc-300 absolute rounded-md top-[3.3%] md:top-[6.5%] md:right-[10%] inline-block ">
            <div className="flex items-center gap-2 p-1 ">
              <h5>sort by: </h5>
              <h2>Recent</h2>
              <SlArrowDown className="text-sm" />
            </div>
          </div>

        
          <CommentBox className="mt-10" />
          <CommentBox className="mt-10" />
          <CommentBox className="mt-10" />
        </div>

      
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
