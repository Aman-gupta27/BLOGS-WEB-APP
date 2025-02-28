import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { useDisclosure } from "@mantine/hooks";
const ToggleMenu = () => {
    const [opened, { toggle }] = useDisclosure(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
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
          <FiHome className="text-2xl" />
          <Link
            to="/"
            className="block py-2   text-2xl text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
        </div>
        <div className="flex mt-3 items-center gap-3">
          <FiHome className="text-2xl" />
          <Link
            to="/"
            className="block py-2   text-2xl text-gray-700 hover:bg-gray-100"
          >
            Review
          </Link>
        </div>
        <div className="flex mt-3 items-center gap-3">
          <FiHome className="text-2xl" />
          <Link
            to="/"
            className="block py-2   text-2xl text-gray-700 hover:bg-gray-100"
          >
            Profile
          </Link>
        </div>
        <div className="flex mt-3 items-center gap-3">
          <FiHome className="text-2xl" />
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
  )
}

export default ToggleMenu