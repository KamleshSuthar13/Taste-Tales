import React, { useState } from "react";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import ResponseMenu from "./ResponseMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="container max-w-screen-2xl mx-auto px-4 bg-accent shadow-2xl">
        <div className="flex justify-between items-center">
          {/* logo section  */}
          <div className="md:text-2xl text-lg flex items-center gap-2 font-bold">
            Taste <span className="text-primary">Tales</span>
          </div>
          {/* menu section  */}
          <div className="hidden md:block ">
            <ul className="flex gap-6 items-center text-textPrimary">
              <li className="hover:text-primary hover:shadow-primary shadow-md rounded-md px-3 py-1 ">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-primary hover:shadow-primary shadow-md rounded-md px-3 py-1 ">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="hover:text-primary hover:shadow-primary shadow-md rounded-md px-3 py-1 ">
                <Link to="/">Contact</Link>
              </li>
              <li className="hover:text-primary hover:shadow-primary shadow-md rounded-md px-3 py-1 ">
                <Link to="/">About</Link>
              </li>
            </ul>
          </div>
          {/* icons section  */}
          <div className="flex items-center gap-4">
            <button className="text-2xl flex items-center hover:bg-textPrimary hover:text-white rounded-full duration-200 p-2  ">
              <CiSearch />
            </button>
            <button className=" duration-200 px-4 py-1.5 bg-primary text-accent rounded hover:bg-secondary">
              Login
            </button>
          </div>
          {/* mobile hamburger */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      <ResponseMenu open={open} />
    </>
  );
};

export default Navbar;
