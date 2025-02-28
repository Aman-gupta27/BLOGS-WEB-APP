import Navbar from "../components/layout/Navbar";
import SideNav from "../components/layout/SideNav";
import HomeContent from "../components/layout/HomeContent";
import BlogCategory from "../components/layout/BlogCategory";
import MobileBottomdiv from "../components/layout/MobileBottomdiv";

const WriterUI = () => {
  return (
    <div className="h-screen w-full  relative">
      <Navbar />
      <div className="h-[89.3%]  w-full  flex gap-2 relative   ">
        <SideNav />
        <HomeContent />
        <BlogCategory />
      </div>
      <MobileBottomdiv/>
    </div>
  );
};

export default WriterUI;
