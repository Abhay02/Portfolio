import React from "react";
import { skills, skillInfo } from "../data";

const Skills = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 pt-10 pb-20">
      <h1 className="text-3xl lg:text-4xl mb-10 font-bold text-black text-center dark:text-white">
        Skills
      </h1>
      <div className="flex flex-wrap gap-6 justify-between">
        {skillInfo.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="800"
            className="w-full md:w-[48%] border rounded-2xl border-white p-5 shadow-lg dark:shadow-[0_0_4px_0_#ffffff]"
          >
            <div className="text-[18px] md:text-[24px] font-bold text-center text-black dark:text-white">
              {skill.title}
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center mt-6 mb-4">
              {skill.skills.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 border border-gray-400 rounded-2xl px-4 py-2 text-base md:text-lg font-medium shadow-lg dark:shadow-[0_0_4px_0_#ffffff] text-black dark:text-gray-400 hover:animate-bounce ease-in-out duration-300"
                >
                  <div>
                    {skills.map((elem, idx) =>
                      elem.name === item ? (
                        <div key={idx} className="w-8 h-8">
                          <img
                            src={elem.icon}
                            alt=""
                            className="w-full h-full rounded-full"
                          />
                        </div>
                      ) : (
                        ""
                      )
                    )}{" "}
                  </div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div className="w-full flex flex-col py-20">
    //   <h4 className="text-3xl text-black dark:text-white font-bold mb-10 text-center">
    //     Technical Skills
    //   </h4>
    //   <div className="w-full flex flex-wrap items-center justify-center gap-10">
    //     {skills.map((skill, index) => (
    //       <div
    //         key={index}
    //         className="flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] rounded-full items-center hover:animate-bounce ease-in-out duration-300"
    //       >
    //         <div className="w-10 h-10">
    //           <img
    //             src={skill.icon}
    //             alt=""
    //             className="w-full h-full rounded-full"
    //           />
    //         </div>
    //         <div className="flex flex-col gap-1">
    //           <div className="flex items-center justify-between">
    //             <p className="text-md font-semibold text-white ">
    //               {skill.name}
    //             </p>
    //             <p className="text-md font-semibold text-white">
    //               {skill.value + "%"}
    //             </p>
    //           </div>
    //           <div className="w-[200px] h-[5px] bg-slate-800 rounded-lg mb-1">
    //             <div
    //               className="bg-green-500 h-full rounded-lg"
    //               style={{ width: skill.value + "%" }}
    //             ></div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Skills;
