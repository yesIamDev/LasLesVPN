import React, { FunctionComponent } from "react";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";

const NavBar: FunctionComponent = () => {
  return (
    <div id="top">
      <header className="bg-white sticky top-0 z-50 w-full">
        <nav
          id="main-nav"
          className="bg-white max-w-5xl mx-auto p-4 flex items-center justify-between"
        >
          <a href="top" className="flex" aria-label="Accueil du site">
            <img
              src={logo}
              alt=""
              className="hidden md:w-15 md:inline md:mr-4"
            />
          </a>
          <button
            aria-label="toggle button"
            aria-expanded="false"
            id="menu-btn"
            className="cursor-pointer w-10 md:hidden"
          >
            <img src={menu} alt="" />
          </button>

          <ul
            id="toggled-menu "
            className="w-full absolute top-full left-0 -translate-y-full -z-10 
            text-gray-800 border-b border-gray-200 flex flex-col items-center md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row"
          >
            <li className="py-2 mx-6 md:py-0 md:mr-4">
              <a
                href="#cv"
                className="text-sm text-gray-400 font-semibold w-full hover:text-rose-600"
              >
                About
              </a>
            </li>
            <li className="py-2 mx-10 md:py-0 md:mr-4">
              <a
                href="#competences"
                className="text-sm text-gray-400 font-semibold w-full hover:text-rose-600"
              >
                Features
              </a>
            </li>
            <li className="py-2 mx-10 md:py-0 md:mr-4">
              <a
                href="#projets"
                className="text-sm text-gray-400 font-semibold w-full hover:text-rose-600"
              >
                Testimonials
              </a>
            </li>
            <li className="py-2 mx-10 md:py-0 md:mr-4">
              <a
                href="contacts"
                className="text-sm text-gray-400 font-semibold w-full hover:text-rose-600"
              >
                Help
              </a>
            </li>
          </ul>

          <div>
            <a href="#" className="mx-6 font-semibold">Sign in</a>
            <a href="#">
              <button className=" text-[#F53838] font-semibold px-6 py-1 border border-[#F53838] rounded-full hover:bg-[#F53838] hover:text-white">Sign up</button>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
