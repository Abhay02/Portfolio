import React from "react";

const ProjectModel = React.memo(({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  console.log(content);
  return (
    <div className="fixed inset-0 flex items-center justify-center h-screen bg-black bg-opacity-50 z-50">
      <div className="w-full md:w-[90%] lg:w-[70%] bg-white rounded-lg shadow-lg p-6 relative object-cover overflow-y-auto max-w-4xl max-h-lvh">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 w-8 h-8 rounded-full bg-indigo-900 cursor-pointer shadow-lg hover:shadow-2xl text-amber-400 hover:text-black dark:hover:text-white"
        >
          ✕
        </button>
        <div>
          <img src={content.img} alt="" className="rounded-lg shadow-md" />
          <h2 className="text-2xl font-bold my-4">{content.title}</h2>
          <div className="flex items-start gap-2 my-1">
            {content.stack.map((item, index) => (
              <div
                key={index}
                className="text-black dark:text-gray-600 text-[12px] font-medium bg-gray-700 bg-opacity-10 rounded-full py-1 px-2"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-gray-600 mb-4">{content.desc}</p>
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600">
              Source Code
            </button>
            <button className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectModel;
