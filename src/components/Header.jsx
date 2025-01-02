import React, { useState } from "react";
import Abhi_img from "../assets/Abhi_img.png";
import SocialIcons from "./SocialIcons";
import info from "../User";

import { Typewriter } from "react-simple-typewriter";
import ParticleAnimation from "./Particles";
import AboutMe from "./AboutMe";
import ResumeViewer from "./ResumeViewer";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const openResume = () => setIsResumeOpen(true);

  const closeModal = () => setIsModalOpen(false);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <div className="relative w-full flex flex-col items-center justify-around lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20 overflow-hidden">
      <div className="flex flex-col mb-15 lg:mb-0 dark:text-white">
        <h1 className="font-bold font-[abhi1] text-[6vw]">{info.name}</h1>
        <p className="text-amber-500 font-semibold text-[4vw] lg:text-[3vw]">
          <span>
            <Typewriter
              words={info.stack}
              loop={100}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={40}
              delaySpeed={500}
            />
          </span>
        </p>
        <div className="w-auto md:w-[500px]">
          <p className="text-md text-black dark:text-gray-100 mt-3 2xl:mt-10">
            Frontend Web Developer with ability to learn and collaborate in
            rapidly changing environments and compositions.
          </p>
        </div>
        <div className="mt-10 flex gap-10">
          <button
            onClick={openModal}
            className="bg-orange-700 text-base md:text-lg text-white font-semibold rounded-md py-3 px-5 cursor-pointer hover:-translate-y-2 transition transform duration-300 ease-in-out z-10"
          >
            About Me
          </button>
          <button
            onClick={openResume}
            className="border border-black dark:border dark:border-white text-base md:text-lg text-black dark:text-white font-semibold rounded-md py-3 px-5 cursor-pointer hover:-translate-y-2 transition transform duration-300 ease-in-out z-10"
          >
            Check Resume
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[350px] lg:h-[350px] 2xl:w-[500px] 2xl:h-[500px] rounded-full border-2 border-gray-600 animate-glow dark:border-gray-200 relative md:mt-15 lg:mt-0 lg:mr-10 flex items-start justify-center bg-gradient-to-t from-[#030a1c] via-[#030a1c]/50 to-transparent">
          <img
            src={Abhi_img}
            alt=""
            className="w-auto h-full md: z-40 rounded-full"
          />
        </div>
        {/* <div className="absolute top-0 z-50 w-[300px] h-[290px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] bg-gradient-to-t from-[#030a1c] via-[#030a1c]/20 to-transparent rounded-full border-2 border-gray-600 animate-border dark:border-gray-200 md:mt-20 lg:mt-0"></div> */}
      </div>
      <div className="flex flex-row mt-10 md:absolute md:right-6 md:top-28 z-10">
        <SocialIcons />
      </div>
      <div className="hidden md:block absolute inset-0">
        <ParticleAnimation />
      </div>
      <AboutMe isOpen={isModalOpen} onClose={closeModal} />
      <ResumeViewer isResume={isResumeOpen} onClose={closeResume} />
    </div>
  );
};

export default Header;
