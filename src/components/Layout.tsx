import { useState, useEffect } from "react";
import Hamburger from "./Card/Hamburger.tsx";
import Sidebar from "./Sidebar/Sidebar.tsx";
import Title from "./Card/Title.tsx";
import About from "./Card/About/About.tsx";
import DisplayButton from "./DisplayButton.tsx";

export default function Card() {
  const [focus, setFocus] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(function () {
    let saved_mode = localStorage.getItem("display") || "dark";
    if (!saved_mode) {
      saved_mode = "dark";
      localStorage.setItem("display", saved_mode);
    }

    setDarkMode(saved_mode === "dark" ? true : false);

    if (saved_mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDisplay = function () {
    setDarkMode(function (prev) {
      const new_mode = !prev;
      localStorage.setItem("display", new_mode ? "dark" : "light");

      if (new_mode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return new_mode;
    });
  };

  const handleOpen = function () {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className="bg-[var(--background-color)] text-[var(--text-dark)] flex justify-center items-center min-h-[100vh]
    dark:bg-[var(--bg-light)] dark:text-[var(--text-light)]"
    >
      {/* card */}
      <div
        className="rounded-xl  shadow-xl overflow-hidden 
        flex flex-row absolute lg:relative
        w-[90%] h-[85vh] bg-gradient-to-b from-[var(--card-color1)] to-[var(--card-color2)]
        dark:bg-gradient-to-b dark:from-[var(--card-color1l)] dark:to-[var(--card-color2l)] transition-colors duration-300 ease-in-out"
      >
        {/* sidebar panel */}
        <div className="left-side min-w-[225px] absolute overflow-hidden lg:relative h-full">
          {/* dynamic button
          <div
            className={`fixed top-15 left-20 z-50 transition-transform duration 300 ease-in-out ${sidebarOpen ? "translate-x-full" : "translate-x-0"}`}
          >
            <Hamburger style={"ml-5 mt-5 "} handleOpen={handleOpen} />
          </div>*/}

          <Hamburger
            style={"absolute z-50 ml-5 mt-5"}
            handleOpen={handleOpen}
          />

          <div
            className={`absolute h-full min-w-full z-30 transition-transform duration-500 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Sidebar style={"block"} focus={focus} setFocus={setFocus} />
          </div>
        </div>

        {/* title texts */}
        <div
          className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[70%]"
          onClick={() => setSidebarOpen(false)}
        >
          <Title
            sidebarOpen={sidebarOpen}
            style={`transition-transform duration-1000 ease-in-out ${focus != 0 ? "-translate-y-[80vh]" : "translate-y-[30vh]"}`}
          />
          <About
            sidebarOpen={sidebarOpen}
            style={`transition-transform duration-1000 ease-in-out ${focus == 1 ? "-translate-y-[8vh] sm:-translate-y-[10vh] lg:-translate-y-[20vh]" : ""} ${focus > 1 ? "lg:-translate-y-[100vh] " : ""} ${focus < 1 ? "translate-y-[80vh]" : ""}`}
          />
        </div>
        <div className="absolute right-0 mr-5 mt-5">
          <DisplayButton toggleDisplay={toggleDisplay} />
        </div>
      </div>
    </div>
  );
}
