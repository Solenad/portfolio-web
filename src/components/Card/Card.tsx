import { useState } from "react";
import Hamburger from "./Hamburger.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";
import Title from "./Title.tsx";

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
          <Title sidebarOpen={sidebarOpen} />
        </div>
      </div>
    </>
  );
}
