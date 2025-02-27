import CommentBox from "./CommentBox";
import CreateComment from "./CreateComment";
const HomeContent = () => {
  return (
    <div className="w-[57%]   py-5 px-6 overflow-y-auto ">
      <CreateComment />
      <CommentBox className="mt-10" />
      <CommentBox className="mt-10" />
    </div>
  );
};

export default HomeContent;
