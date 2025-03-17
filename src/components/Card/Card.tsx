import { TypeAnimation } from "react-type-animation";

export default function Card() {
  return (
    <>
      <div
        className="rounded-xl  shadow-xl overflow-hidden 
        flex flex-col
        w-[90%] h-[85vh] bg-gradient-to-b from-[var(--card-color1)] to-[var(--card-color2)]"
      >
        <div className="h-full"></div>
        <div className="h-full flex flex-col justify-start text-left px-10 md:px-20 lg:px-40">
          <p className="text-6xl md:text-7xl lg:text-9xl font-['Montserrat'] mb-4">
            Roe Dizon
          </p>
          <TypeAnimation
            className="maintitle-landing ml-3"
            sequence={[
              "Software Developer",
              3000,
              "College Student (2nd year)",
              3000,
              "Backend Developer",
              3000,
            ]}
            wrapper="span"
            speed={20}
            style={{
              fontSize: "20px",
              fontFamily: "JetBrains Mono",
              display: "block",
            }}
            repeat={Infinity}
          />
        </div>
      </div>
    </>
  );
}
