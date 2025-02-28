import { SlArrowDown } from "react-icons/sl";
import CommentBox from "./CommentBox";
import CreateComment from "./CreateComment";
const HomeContent = () => {
  return (
    <div className="md:w-[57%] w-full relative   py-5 px-6 overflow-y-auto ">
      <CreateComment />
      <div className="bg-zinc-300 rounded-md p-1 absolute top-[24%] md:top-[25%] md:right-[17%] inline-block ">
        <div className="flex items-center gap-2 ">
          <h5>sort by: </h5>
          <h2>Recent</h2>
          <SlArrowDown className="text-sm" />
        </div>
      </div>
      <CommentBox className="mt-10" />
      <CommentBox className="mt-10" />
    </div>
  );
};

export default HomeContent;
