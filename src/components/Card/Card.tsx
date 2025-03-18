import { TypeAnimation } from "react-type-animation";
import Hamburger from "./Hamburger.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";

export default function Card() {
  return (
    <>
      <div
        className="rounded-xl  shadow-xl overflow-hidden 
        flex flex-row
        w-[90%] h-[85vh] bg-gradient-to-b from-[var(--card-color1)] to-[var(--card-color2)]"
      >
        <div className="left-side min-w-[225px]">
          <Hamburger style={"ml-5 mt-5 fixed"} />
          <Sidebar />
        </div>
        <div className="flex flex-col">
          <div className="h-full"></div>
          <div className="h-full flex flex-col justify-start text-left px-10 md:px-20 lg:px-40">
            <p className="text-6xl md:text-7xl lg:text-9xl font-bold font-['Montserrat'] mb-4">
              Roe Dizon
            </p>
            <TypeAnimation
              className="maintitle-landing ml-[0.3em] lg:ml-3 text-lg sm:text-xl md:text-2xl lg:text-3xl"
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
