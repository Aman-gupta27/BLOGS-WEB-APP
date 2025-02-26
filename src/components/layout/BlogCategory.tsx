import CategoryBlog from "../UI/BlogSection/CategoryBlog"
import PopularBlog from "../UI/BlogSection/PopularBlog"

const BlogCategory = () => {
  return (
    <div className="w-[23%]  ml-6 h-full  py-10 ">
        <PopularBlog />
        <CategoryBlog />
    </div>
  )
}

export default BlogCategory