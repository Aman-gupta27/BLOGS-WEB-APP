import CommentBox from "./CommentBox";
import CreateComment from "./CreateComment";
const HomeContent = () => {
  return (
    <div className="w-[57%]   py-5 px-6 overflow-y-auto ">
      <CreateComment />
      <CommentBox />
      <CommentBox />
    </div>
  );
};

export default HomeContent;
