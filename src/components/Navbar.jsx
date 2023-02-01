import React, { useState } from "react";

// import daniel logo
import { danielLogo, menuBurger, closeX } from "../assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // handle menu
  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="w-full my-3 flex items-center justify-between">
      <div className="web--logo px-2 md:px-0">
        <img src={danielLogo} alt="daniel logo" width={70} />
      </div>
      <div className="web--menu_item md:block relative">
        <img
          src={menuOpen ? closeX : menuBurger}
          alt="menu icon"
          width={24}
          className="mr-2 cursor-pointer md:hidden"
          onClick={handleMenu}
        />
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col  absolute  top-[30px] -left-[180px]  w-[200px] p-2 rounded-xl shadow-lg md:shadow-none md:w-full md:flex-row md:static md:flex`}
        >
          <a href="#" className="py-2 px-5 hover:opacity-50">
            Home
          </a>
          <a href="#" className="py-2 px-5 hover:opacity-50">
            About me
          </a>
          <a href="#" className="py-2 px-5 hover:opacity-50">
            SKills
          </a>
          <a href="#" className="py-2 px-5 hover:opacity-50">
            Projects
          </a>
          <a
            href="#"
            className="py-2 px-5 bg-black text-white rounded-3xl shadow-c-shadow"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
