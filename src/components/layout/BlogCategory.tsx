import CategoryBlog from "../UI/BlogSection/CategoryBlog";
import PopularBlog from "../UI/BlogSection/PopularBlog";

const BlogCategory = () => {
  return (
    <div className="w-[23%] md:block hidden  ml-6 h-full  py-10 ">
      <PopularBlog  className = "h-[40vh] w-[23vw]" />
      <CategoryBlog className = "h-[30vh] w-[23vw]" />
    </div>
  );
};

export default BlogCategory;
