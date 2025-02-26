import CategoryBlog from "../UI/BlogSection/CategoryBlog"
import PopularBlog from "../UI/BlogSection/PopularBlog"

const BlogCategory = () => {
  return (
    <div className="w-[30%] h-full  py-10 px-10 ">
        <PopularBlog />
        <CategoryBlog />
    </div>
  )
}

export default BlogCategory