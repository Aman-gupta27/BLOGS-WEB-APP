import { Group } from "@mantine/core";
import classes from "./HeaderSearch.module.css";
import { FiSearch } from "react-icons/fi";
import ToggleMenu from "../ToggleMenu";


export function HeaderSearch() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <img
            className="sm:h-[3rem] h-[3rem] xl:h-[rem]"
            src="https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD"
            alt=""
          />
          <h1 className="text-2xl font-medium md:text-3xl">Sheryians</h1>
          <Group  className=" ">
            <div className="md:w-[25vw]    rounded-xl md:ml-10 ml-13   flex items-center   gap-2 md:bg-[#E8E8E8] px-2  py-2">
              <FiSearch className="text-xl  font-bold" />
              <ToggleMenu/>
              <input
                className="placeholder:text-lg md:block hidden placeholder:text-[#666666] outline-none"
                type="text"
                placeholder="Search Blogs"
              />
            </div>
          </Group>
        </Group>
        <div className="md:block hidden">
          <div className="flex  items-center gap-10">
            <h4 className="  text-xl">All Blogs</h4>
            <div className="h-[5vh] w-[3vw] overflow-hidden border border-zinc-500 rounded-[50%] bg-red-100">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}