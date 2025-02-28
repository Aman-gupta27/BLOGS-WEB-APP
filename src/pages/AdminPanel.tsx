import { Link } from "react-router-dom";
import CommentBox from "../components/layout/CommentBox";
import CreateComment from "../components/layout/CreateComment";
import Navbar from "../components/layout/Navbar";
import CategoryBlog from "../components/UI/BlogSection/CategoryBlog";
import PopularBlog from "../components/UI/BlogSection/PopularBlog";
import Calendar from "../components/layout/Calendar";
import { SlArrowDown } from "react-icons/sl";
import MobileBottomdiv from "../components/layout/MobileBottomdiv";

const AdminPanel = () => {
  return (
    <div className="md:h-[120vh] sm:h-[100vh] h-[98vh] w-full ">
      <Navbar />
      <div className="md:h-[115vh] relative h-[90vh] sm:h-[90vh]  flex  w-full ">
        <div className="h-full  py-6  md:block sm:hidden  hidden px-10 w-[17%] ">
          <div className="flex flex-col gap-3">
            <Link className="text-2xl " to="/">
              Home
            </Link>
            <Link className="text-2xl text-[#AEAEAE] font-medium first " to="/">
              Writers
            </Link>
            <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">
              All Blogs
            </Link>
            <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">
              My Blogs
            </Link>
            <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">
              Review Blogs
            </Link>
            <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">
              Profile
            </Link>
            <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">
              Logout
            </Link>
          </div>
        </div>
        <div className="md:w-[55%] relative w-full overflow-y-auto mt-2 px-6 h-full ">
          <CreateComment />
          <hr className="w-[90%] mt-9 md:mt-9   text-zinc-300" />
          <div className="bg-zinc-300 rounded-md p-1 absolute top-[21%] md:top-[18%] md:right-[15%] inline-block ">
            <div className="flex items-center gap-2 ">
              <h5>sort by: </h5>
              <h2>Recent</h2>
              <SlArrowDown className="text-sm" />
            </div>
          </div>
          <div className="mt-10 md:hidden block">
            <h3 className="text-lg">Label </h3>
            <h5 className="text-sm text-zinc-400 mb-2">
              This is a description
            </h5>
            <div className="w-full py-1 rounded-sm px-2 border flex items-start ">
              <input type="date" />
            </div>
          </div>
          <CommentBox className="mt-10" />
          <CommentBox className="mt-10" />
          <CommentBox className="mt-10" />
        </div>
        <div className="w-[30%] md:block hidden h-full  px-10 py-6">
          <PopularBlog className="h-[25vh] w-[23vw]" />
          <CategoryBlog className="h-[30vh] w-[23vw]" />
          <Calendar />
        </div>
      </div>
      <MobileBottomdiv />
    </div>
  );
};

export default AdminPanel;
