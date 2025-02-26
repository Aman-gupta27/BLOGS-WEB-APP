const PopularBlog = () => {
  return (
    <div className="bg-zinc-100 h-[40vh] w-full mx-auto rounded-md py-5 px-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl tracking-wide font-semibold">Popular Blogs</h3>
        <h6 className="text-sm text-zinc-400">See all</h6>
      </div>
      <div className="overflow-y-auto h-[30vh] mt-4 ">
        <div className="flex items-center     mt-4 gap-3">
          <div className="h-[5vh] w-[3vw]   overflow-hidden rounded-full relative">
            <img
              className="h-full w-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1678703870782-918c21aac2b2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="leading-4 ">
            <h2>Name Jo bhi ho vo</h2>
            <h5>Some description</h5>
          </div>
        </div>
        <div className="flex items-center    mt-4 gap-3">
          <div className="h-[5vh] w-[3vw]   overflow-hidden rounded-full relative">
            <img
              className="h-full w-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1678703870782-918c21aac2b2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="leading-4 ">
            <h2>Name Jo bhi ho vo</h2>
            <h5>Some description</h5>
          </div>
        </div>
        <div className="flex items-center    mt-4 gap-3">
          <div className="h-[5vh] w-[3vw]   overflow-hidden rounded-full relative">
            <img
              className="h-full w-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1678703870782-918c21aac2b2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="leading-4 ">
            <h2>Name Jo bhi ho vo</h2>
            <h5>Some description</h5>
          </div>
        </div>
       
       

      </div>
    </div>
  );
};

export default PopularBlog;
