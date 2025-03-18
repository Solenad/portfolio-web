import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Hamburger from "./Hamburger.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";

export default function Card() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpen = function () {
    setSidebarOpen((prev) => !prev);
  };

  console.log(sidebarOpen);

  return (
    <>
      <div
        className="rounded-xl  shadow-xl overflow-hidden 
        flex flex-row
        w-[90%] h-[85vh] bg-gradient-to-b from-[var(--card-color1)] to-[var(--card-color2)]"
      >
        <div className="left-side min-w-[225px] relative">
          {/* dynamic button
          <div
            className={`fixed top-15 left-20 z-50 transition-transform duration 300 ease-in-out ${sidebarOpen ? "translate-x-full" : "translate-x-0"}`}
          >
            <Hamburger style={"ml-5 mt-5 "} handleOpen={handleOpen} />
          </div>*/}

          <Hamburger style={"fixed z-50 ml-5 mt-5 "} handleOpen={handleOpen} />

          <div
            className={`h-full transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Sidebar style={"block"} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-full"></div>
          <div
            className={`h-full flex flex-col justify-start text-left px-10 md:px-20 lg:px-40 transition-transform duration-300 ease-in-out
${sidebarOpen ? "translate-x-0" : "-translate-x-[20%]"}`}
          >
            <p className="text-6xl md:text-7xl lg:text-9xl font-bold font-['Montserrat'] mb-4">
              Roe Dizon
            </p>
            <TypeAnimation
              className="ml-[0.3em] lg:ml-3 text-lg sm:text-xl md:text-2xl lg:text-3xl"
              sequence={[
                "Software Developer",
                3000,
                "College Student (2nd year)",
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
