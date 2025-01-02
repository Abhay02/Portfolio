import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <hr className="hidden dark:block" />

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-anchor-placement="bottom-bottom"
        className="w-full flex flex-col md:flex-row py-10 px-8 md:px-10 gap-10 lg:gap-20 justify-between "
      >
        <p className="text-lg text-white font-semibold flex items-center gap-2">
          <ImLocation2 />
          Address Delhi, IN
        </p>

        <div className="flex flex-col md:flex-row text-md gap-5 md:gap-10 md:ml-10 text-white ">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>

        <div className="flex flex-col gap-3 text-md text-white ">
          <div className="flex items-center gap-2">
            <MdEmail />
            <a href="mailto:abhay.cse02@gmail.com">abhay.cse02@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            +91 8619933867
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center pb-10 ">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-anchor-placement="bottom-bottom"
          className="flex gap-10 text-white text-2xl cursor-pointer"
        >
          <BsYoutube className="hover:scale-125 duration-100" />
          <BsFacebook className="hover:scale-125 duration-100" />
          <BsInstagram className="hover:scale-125 duration-100" />
          <BsLinkedin className="hover:scale-125 duration-100" />
          <AiFillTwitterCircle className="hover:scale-125 duration-100" />
        </div>

        <p className="text-gray-400 text-md tracking-wider">
          @2024 Abhay Tiwari
        </p>
      </div>
    </footer>
  );
};

export default Footer;
