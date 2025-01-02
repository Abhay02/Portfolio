import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`bg-white w-full h-full min-h-[100vh] ${darkMode && "dark"}`}
    >
      <div className="w-full h-full min-h-[100vh] bg-white">
        <div className="dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#070F2B] to-[#0F3460]">
          <Toaster />
          <Navbar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleOpen={toggleOpen}
            toggleTheme={toggleTheme}
          />

          <Header />
          <section id="projects" className="w-full py-10">
            <Projects />
          </section>
          <section
            id="skills"
            className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 "
          >
            <Skills />
          </section>
          <section
            id="contact"
            className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 "
          >
            <Contact />
          </section>
          <div className="w-full px-0 lg:px-5 2xl:px-40 pb-5-10 lg:py-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
