import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold ml-4 primary-color">
          <Link to="/" exact>
            David Centeno
          </Link>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block;">
            <Link to="/about">About</Link>
          </li>
          <li className="p-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block;">
            <Link to="/work">Work</Link>
          </li>
          <li className="p-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block;">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* HAMBURGER MENU */}
        <div onClick={handleNav} className="block md:hidden mr-6">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={
            nav
              ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-3xl m-4 primary-color">
            <Link to="/" exact>
              Davesmalone
            </Link>
          </h1>
          <ul className="p-8 text-2xl">
            <li className="p-2 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block;">
              <Link to="/about" onClick={handleNav}>
                About
              </Link>
            </li>
            <li className="p-2 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block;">
              <Link to="/work" onClick={handleNav}>
                Work
              </Link>
            </li>
            <li className="p-2 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block;">
              <Link to="/contact" onClick={handleNav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
