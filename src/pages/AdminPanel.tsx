import { Link } from "react-router-dom"
import CommentBox from "../components/layout/CommentBox"
import CreateComment from "../components/layout/CreateComment"
import Navbar from "../components/layout/Navbar"
import SideNav from "../components/layout/SideNav"
import CategoryBlog from "../components/UI/BlogSection/CategoryBlog"
import PopularBlog from "../components/UI/BlogSection/PopularBlog"
import Calendar from "../components/layout/Calendar"


const AdminPanel = () => {
  return (
    <div className="h-[120vh] w-full ">
        <Navbar/>
        <div className="h-[115vh] flex  w-full ">
            <div className="h-full flex py-6 gap-3 px-10 flex-col w-[17%] ">
                <Link className="text-2xl " to="/">Home</Link>
                <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">Writers</Link>
                <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">All Blogs</Link>
                <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">My Blogs</Link>
                <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">Review Blogs</Link>
                <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">Profile</Link>
                <Link className="text-2xl text-[#AEAEAE] font-medium " to="/">Logout</Link>
            </div>
            <div className="w-[55%] overflow-y-auto px-6 h-full ">
              <CreateComment/>
              <CommentBox className="mt-10"/>
              <CommentBox className="mt-10"/>
              <CommentBox className="mt-10"/>
            </div>
            <div className="w-[30%] h-full  px-10 py-6">
              <PopularBlog className="h-[25vh] w-[23vw]"/>
              <CategoryBlog className="h-[30vh] w-[23vw]"/>
              <Calendar/>
            </div>
        </div>
    </div>
  )
}

export default AdminPanel