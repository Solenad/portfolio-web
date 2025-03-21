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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDisplay = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("display", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const handleOpen = function () {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className="bg-[var(--bg-light)] text-[var(--text-light)] flex justify-center items-center min-h-[100vh]
    dark:bg-[var(--background-color)] dark:text-[var(--text-dark)] "
    >
      {/* card */}
      <div
        className="rounded-xl  shadow-xl overflow-hidden 
        flex flex-row absolute lg:relative
        w-[90%] h-[85vh] bg-gradient-to-b from-[var(--card-color1l)] to-[var(--card-color2l)]
        dark:from-[var(--card-color1)] dark:to-[var(--card-color2)] "
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
            className={`absolute h-full min-w-full z-30 transition-transform duration-500  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
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
