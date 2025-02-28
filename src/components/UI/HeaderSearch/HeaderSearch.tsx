import { Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./HeaderSearch.module.css";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <Group>
            <div className="md:w-[25vw]  rounded-xl md:ml-10 ml-20 flex items-center  gap-2 md:bg-[#E8E8E8] px-2  py-2">
              <FiSearch className="text-xl  font-bold" />
              <div className="relative md:hidden block">
                {/* Menu Icon */}
                <button
                  onClick={toggleMenu}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {/* Popup Menu */}
                <div
                  className={`fixed top-0 right-0 h-[100vh] w-full z-100 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  {/* Close Icon */}
                  <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Menu Items */}
                  <div className="mt-16 px-6 py-4">
                      <div className="flex mt-3 items-center gap-3">
                        <FiHome className="text-2xl"/>
                        <Link
                      to="/"
                      className="block py-2   text-2xl text-gray-700 hover:bg-gray-100"
                    >
                      Home
                    </Link>
                      </div>
                      <div className="flex mt-3 items-center gap-3">
                        <FiHome className="text-2xl"/>
                        <Link
                      to="/"
                      className="block py-2   text-2xl text-gray-700 hover:bg-gray-100"
                    >
                      Review
                    </Link>
                      </div>
                      <div className="flex mt-3 items-center gap-3">
                        <FiHome className="text-2xl"/>
                        <Link
                      to="/"
                      className="block py-2   text-2xl text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                      </div>
                      <div className="flex mt-3 items-center gap-3">
                        <FiHome className="text-2xl"/>
                        <Link
                      to="/"
                      className="block py-2   text-2xl text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </Link>
                      </div>
                  </div>
                </div>
              </div>
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

{
  /* <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group> */
}
