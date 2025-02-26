
const CategoryBlog = () => {
  return (
       <div className="w-full mt-10 h-[30vh] overflow-y-auto bg-zinc-100 rounded-md py-5 px-6">
          <h2 className="mb-2 text-xl font-semibold tracking-wide">Blog Categories</h2>
          <div className=" gap-3 flex flex-wrap text-sm ">
              <button className="px-5 py-1 border rounded-full  ">API's & Sample Codes</button>
              <button className="px-5 py-1 border rounded-full ">Media</button>
              <button className="px-5 py-1 border rounded-full ">Lorem Ipsum</button>
              <button className="px-5 py-1 border rounded-full ">Chacha</button>
              <button className="px-5 py-1 border rounded-full ">API's & Sample Codes</button>
              <button className="px-5 py-1 border rounded-full ">Media</button>
              <button className="px-5 py-1 border rounded-full ">Lorem Ipsum</button>
          
          </div>
       </div>
  )
}

export default CategoryBlog