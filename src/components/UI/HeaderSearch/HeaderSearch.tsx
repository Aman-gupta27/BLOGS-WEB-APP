import { IconSearch } from "@tabler/icons-react";
import { Autocomplete, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import { CiSearch } from "react-icons/ci";
import classes from "./HeaderSearch.module.css";
import { FiSearch } from "react-icons/fi";
// import '@mantine/core/styles.css';

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <img
            className="sm:h-[3rem] h-[3rem] xl:h-[rem] "
            src="https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD"
            alt=""
          />
          <h1 className="text-2xl font-medium md:text-3xl">Sheryians</h1>
          <Group>
            <div className="w-[25vw] rounded-xl ml-10 flex items-center gap-2 bg-[#E8E8E8] px-2 py-2">
              <FiSearch className="text-xl text-[#666666] font-bold" />
              <input
                className="placeholder:text-lg placeholder:text-[#666666] outline-none"
                type="text"
                placeholder="Search Blogs"
              />
            </div>
          </Group>
        </Group>
        <div className="flex items-center gap-10">
          <h4 className=" text-xl">All Blogs</h4>
          <div className="h-[5vh] w-[3vw] overflow-hidden border border-zinc-500 rounded-[50%] bg-red-100">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
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
