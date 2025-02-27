interface CategoryBlogProps {
  className?: string; // Define className as an optional prop
}

const CategoryBlog: React.FC<CategoryBlogProps> = ({ className }) => {
  return (
    <div
      className={` mt-6 ${className} overflow-y-auto bg-zinc-100 rounded-xl py-7 px-7`}
    >
      <h2 className="mb-2 text-xl font-semibold tracking-wide">
        Blog Categories
      </h2>
      <div className=" gap-2 flex flex-wrap text-sm mt-5 ">
        <button className="px-5 py-1 border border-[#666666] rounded-full  ">
          API's & Sample Codes
        </button>
        <button className="px-5 py-1 border border-[#666666] rounded-full ">
          Media
        </button>
        <button className="px-5 py-1 border border-[#666666] rounded-full ">
          Lorem Ipsum
        </button>
        <button className="px-5 py-1 border border-[#666666] rounded-full ">
          Chacha
        </button>
        <button className="px-5 py-1 border border-[#666666] rounded-full ">
          API's & Sample Codes
        </button>
        <button className="px-5 py-1 border border-[#666666] rounded-full ">
          Media
        </button>
        <button className="px-5 py-1 border border-[#666666] rounded-full ">
          Lorem Ipsum
        </button>
      </div>
    </div>
  );
};

export default CategoryBlog;
