import React from "react";
import Navbar from "../components/layout/Navbar";
import CommentBox from "../components/layout/CommentBox";
import PopularBlog from "../components/UI/BlogSection/PopularBlog";
import CategoryBlog from "../components/UI/BlogSection/CategoryBlog";

const NormalUser = () => {
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <div className="flex  h-[89%] w-full px-8 ">
        <div className="h-full  pl-20 py-15 overflow-y-auto w-[65%] ">
          <hr  />
          <CommentBox className="mt-10" />
          <CommentBox className="mt-10" />
          <CommentBox className="mt-10" />
        </div>
        <div className="h-full w-[35%] pl-22 py-7 ">

            <PopularBlog className="h-[43vh] w-[23vw]"  />
            <CategoryBlog className="h-[29vh] w-[23vw]" />
        </div>
      </div>
    </div>
  );
};

export default NormalUser;
