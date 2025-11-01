import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <a className="hover:text-blue-400 transition-colors duration-300">
          Home
        </a>
      </li>
      <li>
        <a className="hover:text-blue-400 transition-colors duration-300">
          Projects
        </a>
      </li>
      <li>
        <a className="hover:text-blue-400 transition-colors duration-300">
          Contact
        </a>
      </li>
      <li>
        <a className="hover:text-blue-400 transition-colors duration-300">
          About
        </a>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky ? "bg-blue-900/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 md:px-10 py-4 text-white">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white"
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white bg-black-400 border border-white/20"
            >
              {navItems}
            </ul>
          </div>

          <a className="text-3xl font-extrabold cursor-pointer hover:scale-105 transition-transform duration-300 ">
            BuildMart
          </a>
        </div>

        {/* Center Menu (Desktop) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-lg font-semibold">
            {navItems}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <label className="input input-bordered flex items-center gap-2 rounded-xl px-3 py-2 hover:shadow-md transition duration-300 bg-white/10 text-white">
              <input
                type="text"
                className="grow outline-none text-sm bg-transparent placeholder-white/60"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          <a className="bg-blue-400/70 backdrop-blur-md text-white font-semibold px-6 py-2 rounded-xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-10">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
