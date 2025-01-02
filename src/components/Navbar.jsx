import React from "react";
import NameLogo from "../assets/name-logo-white.svg";
import NameLogoBlack from "../assets/name-logo-black.svg";
import { RxSun } from "react-icons/rx";
import { MdOutlineNightlight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import NavLinks from "../constants/NavLinks";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, isOpen, toggleTheme, toggleOpen }) => {
  return (
    <nav className=" w-full px-2 md:px-8 2xl:px-40">
      <div
        className={`flex items-center justify-between p-3 relative ${
          darkMode && "text-white"
        }`}
      >
        <div className="ml-4 flex-shrink-0">
          <img
            src={darkMode ? NameLogo : NameLogoBlack}
            alt="logo"
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="flex gap-4 md:block">
          <div className="md:flex">
            <button onClick={toggleTheme}>
              {darkMode ? (
                <RxSun
                  size={24}
                  color={"white"}
                  className="animate-spin-slow"
                />
              ) : (
                <MdOutlineNightlight size={24} color={"black"} />
              )}
            </button>

            <div className="hidden md:block">
              {NavLinks.map(({ id, title, link }) => (
                <a href={link} key={id} className="mx-4">
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {title}
                  </Link>
                </a>
              ))}
            </div>
          </div>
          <div className=" md:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleOpen}
            >
              <RxHamburgerMenu
                size={26}
                className={`${
                  isOpen ? "hidden" : "block"
                } text-gray-900 dark:text-gray-300`}
              />
              <RxCross2
                size={26}
                className={`${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 dark:text-gray-400`}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block py-4" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center  gap-4 text-md text-gray-700 dark:text-neutral-200">
          {NavLinks.map(({ id, title, link }) => (
            <a
              href={link}
              key={id}
              onClick={toggleOpen}
              className="cursor-pointer"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {title}
              </Link>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
