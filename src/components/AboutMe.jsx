import React from "react";
import { skills } from "../data";
import Abhay_img from "../assets/Abhay_img.png";

const AboutMe = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center text-black dark:text-white z-50">
      <div className="relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] rounded-lg shadow-lg p-6 max-w-sm md:max-w-2xl lg:max-w-4xl max-h-screen md:max-h-svh lg:max-h-lvh w-full flex flex-col md:flex-row items-center justify-around">
        <div
          onClick={onClose}
          className="absolute top-1 right-1 w-8 h-8 rounded-full bg-indigo-900 cursor-pointer shadow-lg hover:shadow-2xl"
        >
          <p className="mt-[2px] text-center">X</p>
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-5">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p>
            Frontend Web Developer with ability to learn and collaborate in
            rapidly changing environments and compositions.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5 py-4">
            {skills.map((item, index) => (
              <div className="relative group">
                <img src={item.icon} alt={item.name} className="w-10 h-10" />
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-20 mt-2 w-max bg-gray-800 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  {item.name}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-3 h-3 bg-gray-800 rotate-45 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" border-gray-600 dark:border-gray-200 md:mt-20 lg:mt-0 hidden md:flex items-center justify-center">
          <img
            src={Abhay_img}
            alt=""
            className="w-auto h-full -top-6 md:-top-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
