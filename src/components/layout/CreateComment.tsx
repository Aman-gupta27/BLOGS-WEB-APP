import { GoImage } from "react-icons/go";
import { CiVideoOn } from "react-icons/ci";

const CreateComment = () => {
  return (
    <>
      <div>
        <div className="md:w-[90%]   rounded-xl py-6 mt-5   px-7 h-[16vh] bg-zinc-100">
          <div className="flex gap-5">
            <div className="md:h-[6vh] md:w-[4vw] sm:h-[5vh] sm:w-[6vw] h-[5vh] w-[8vw]  overflow-hidden border border-zinc-500 rounded-[50%]">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="w-full h-10 flex items-center justify-between px-5 rounded-md bg-zinc-200">
              <input
                type="text"
                placeholder="Share Something..."
                className="placeholder:text-zinc-500 text-zinc-500 outline-none"
              />
              <h4>😉</h4>
            </div>
          </div>
          <div className="flex  gap-10 mt-5 ml-16">
            <div className="flex items-center gap-2">
              <GoImage className="text-2xl font-bold" />
              <h2 className="text-md">Image</h2>
            </div>
            <div className="flex items-center gap-2">
              <CiVideoOn className="text-2xl font-bold " />
              <h2 className="text-md">Video</h2>
            </div>
          </div>
        </div>
        <hr className="w-[90%] mt-7 text-zinc-300" />
      </div>
    </>
  );
};

export default CreateComment;
