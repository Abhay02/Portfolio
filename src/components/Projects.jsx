import React, { useCallback, useState } from "react";

import { projects } from "../data";
import { FaGithub } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { BsInfoSquareFill } from "react-icons/bs";
import ProjectModel from "./ProjectModel";
import { useEffect } from "react";

const Projects = () => {
  const [isModelOpen, setModelOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModel = (content) => {
    setModelOpen(true), setContent(content);
  };

  const closeModel = () => {
    setModelOpen(false), setContent(null);
  };

  return (
    <>
      <div className="text-center text-2xl lg:text-4xl font-bold text-black dark:text-white mx-auto mb-10">
        Latest Projects
      </div>
      <div
        className="container flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10 xl:px-24">
          {projects.map((item, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg dark:shadow-[0_0_4px_0_#ffffff] transform object-cover hover:-translate-y-2 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img src={item.img} alt="" className="w-full h-48" />
              <div className="px-6 py-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl mb-2 text-black uppercase dark:text-white">
                      {item.title}
                    </h1>
                    <div className="flex gap-4 my-4 text-gray-400">
                      <span onClick={() => openModel(item)}>
                        <BsInfoSquareFill className="w-5 h-5 dark:hover:text-white hover:text-black cursor-pointer" />
                      </span>
                      <a href="">
                        <FaGithub className="w-5 h-5 dark:hover:text-white hover:text-black" />
                      </a>
                      <a href="">
                        <FaSquareArrowUpRight className="w-5 h-5 dark:hover:text-white hover:text-black" />
                      </a>
                    </div>
                  </div>

                  <div className="hidden md:inline-flex items-start gap-2 my-1">
                    {item.stack.map((element, idx) => (
                      <div
                        key={idx}
                        className="text-black dark:text-gray-400 text-[10px] font-medium bg-gray-200 bg-opacity-10 rounded-full py-1 px-2"
                      >
                        {element}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-base line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModel
        isOpen={isModelOpen}
        onClose={closeModel}
        content={content}
      ></ProjectModel>
    </>
  );
};

export default Projects;
