import Navbar from "../components/layout/Navbar";
import SideNav from "../components/layout/SideNav";
import HomeContent from "../components/layout/HomeContent";
import BlogCategory from "../components/layout/BlogCategory";

const WriterUI = () => {
  return (
    <div className="h-screen w-full  relative">
      <Navbar />
      <div className="h-[89.3%]  w-full  flex gap-10 relative   ">
        <SideNav />
        <HomeContent />
        <BlogCategory />
      </div>
    </div>
  );
};

export default WriterUI;
