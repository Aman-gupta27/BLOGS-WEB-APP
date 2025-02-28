import { SlArrowUp } from "react-icons/sl"
const MobileBottomdiv = () => {
  return (
    
    <div className="md:hidden sm:hidden block w-full fixed bottom-0 h-[9vh] bg-black">
        <div className="flex h-full  text-white items-center justify-between px-4">
          <div className="flex items-center gap-3 ">
            <h2 className="text-xl">Popular Blogs</h2>
            <SlArrowUp className=" text-xl  text-white " />
          </div>
          <div className="h-full w-[1px] bg-white "></div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl">Category Blog</h2>
            <SlArrowUp className="text-white text-xl " />

          </div>
        </div>
      </div>
  )
}

export default MobileBottomdiv