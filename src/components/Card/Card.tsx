import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "./Hamburger.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";

export default function Card() {
  const [focus, setFocus] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpen = function () {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="rounded-xl  shadow-xl overflow-hidden 
        flex flex-row
        w-[90%] h-[85vh] bg-gradient-to-b from-[var(--card-color1)] to-[var(--card-color2)]"
      >
        {/* sidebar panel */}
        <div className="left-side min-w-[225px] relative">
          {/* dynamic button
          <div
            className={`fixed top-15 left-20 z-50 transition-transform duration 300 ease-in-out ${sidebarOpen ? "translate-x-full" : "translate-x-0"}`}
          >
            <Hamburger style={"ml-5 mt-5 "} handleOpen={handleOpen} />
          </div>*/}

          <Hamburger
            style={"absolute z-50 ml-5 mt-5 "}
            handleOpen={handleOpen}
          />

          <div
            className={`absolute h-full min-w-full z-30 transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Sidebar style={"block"} focus={focus} setFocus={setFocus} />
          </div>
        </div>

        {/* title texts */}
        <div className="flex flex-col" onClick={() => setSidebarOpen(false)}>
          <div className="h-full"></div>
          <div
            className={`h-full z-0 flex flex-col justify-center text-left px-10 md:px-20 lg:px-40 transition-transform duration-300 ease-in-out
            absolute inset-0 items-center text-nowrap
            lg:justify-start lg:relative lg:items-start ${sidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-[20%]"}`}
          >
            <motion.p
              className="text-5xl md:text-7xl lg:text-9xl font-bold font-['Montserrat'] mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Roe Dizon
            </motion.p>
            <TypeAnimation
              className="ml-[0.3em] lg:ml-3 text-lg sm:text-xl md:text-2xl lg:text-3xl"
              sequence={[
                "Software Developer",
                3000,
                "College Student (Year 2)",
                3000,
                "Backend Developer",
                3000,
                "Database Management",
                3000,
              ]}
              wrapper="span"
              speed={20}
              style={{
                fontFamily: "JetBrains Mono",
                display: "block",
              }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </>
  );
}
