import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { FaDownload } from "react-icons/fa";

const ResumeViewer = ({ isResume, onClose }) => {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth * 0.7;
      const baseWidth = 600;
      const calculatedScale = Math.min(containerWidth / baseWidth, 1);
      setScale(calculatedScale);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isResume) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center h-screen text-black dark:text-white z-50">
      <div className="relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] rounded-lg object-cover overflow-y-auto shadow-lg p-6 max-w-sm md:max-w-4xl max-h-screen md:max-h-svh lg:max-h-lvh w-full md:w-[90%] lg:w-[70%] flex justify-around">
        <div
          onClick={onClose}
          className="absolute top-1 right-1 w-8 h-8 rounded-full bg-indigo-900 cursor-pointer shadow-lg hover:shadow-2xl"
        >
          <p className="mt-[2px] text-center">X</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <h1 className="text-3xl font-bold">Resume</h1>
            <a href="abhi_resume.pdf" download="abhi_resume.pdf">
              <FaDownload className="w-7 h-7 text-amber-600" />
            </a>
          </div>
          <div className="border rounded-lg p-4">
            <Document
              file="abhi_resume.pdf"
              className="w-full rounded-2xl min-w-40 min-h-14"
            >
              <Page
                pageNumber={1}
                scale={scale}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="mx-auto"
              />
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
