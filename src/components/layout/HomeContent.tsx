import { GoImage } from "react-icons/go";
import { CiVideoOn } from "react-icons/ci";
import { CommentSimple } from "../UI/CommentSimple/CommentSimple";
const HomeContent = () => {
  return (
    <div className="w-[50%]  py-5 px-6 overflow-y-auto ">
      <div>
        <div className="w-[90%] rounded-xl py-6   px-7 h-[16vh] bg-zinc-100">
          <div className="flex gap-5">
            <div className="h-[5vh] w-[3vw] overflow-hidden border border-zinc-500 rounded-[50%] bg-red-100">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="w-106 h-10 flex items-center justify-between px-5 rounded-md bg-zinc-200">
              <h3 className="text-zinc-400">Share Something...</h3>
              <h4>😉</h4>
            </div>
          </div>
          <div className="flex  gap-5 mt-5 ml-16">
            <div className="flex items-center gap-2">
              <GoImage className="" />
              <h2>Image</h2>
            </div>
            <div className="flex items-center gap-2">
              <CiVideoOn />
              <h2>Video</h2>
            </div>
          </div>
        </div>
        <hr className="w-[90%] mt-4 text-zinc-300" />
      </div>

      <div className="w-full h-[30vh] flex bg-zinc-200 mt-5 gap-4 rounded-lg py-5 px-6">

      <CommentSimple/>
      <div className="h-[90%] w-[30%] bg-zinc-700 overflow-hidden rounded-md">
        <img className="w-full h-full object-cover " src="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      </div>

      <div className="w-full h-[30vh] flex bg-zinc-200 mt-5 gap-4 rounded-lg py-5 px-6">

<CommentSimple/>
<div className="h-[90%] w-[30%] bg-zinc-700 overflow-hidden rounded-md">
  <img className="w-full h-full object-cover " src="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
</div>


    </div>
  );
};

export default HomeContent;
