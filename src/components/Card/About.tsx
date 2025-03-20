import "boxicons/css/boxicons.min.css";

interface props {
  style: string;
  sidebarOpen: boolean;
}

export default function About({ style, sidebarOpen }: props) {
  return (
    <div
      className={`${style} flex flex-col w-full h-full justify-center md:justify-center lg:justify-start`}
    >
      {/* transition for sidebar */}
      <div
        className={`transition-transform duration-500 ease-in-out 
                flex flex-col gap-y-10 md:gap-y-5 lg:gap-y-12 mx-4 
                ${sidebarOpen ? "lg:translate-x-[20%]" : ""}`}
      >
        {/* profile image and greeting */}
        <div className="max-h-[60%] flex flex-col md:flex-row lg:flex-row w-full justify-center lg:justify-start items-center gap-5 md:gap-10 lg:gap-25">
          <div className="bg-[var(--card-block)] max-h-[225px] shadow-lg rounded-lg border border-[var(--card-color1)]">
            <img
              className="w-[150px] md:w-[125px] lg:w-[225px] p-2"
              src="https://avatars.githubusercontent.com/u/166220458?s=96&v=4"
            />
          </div>
          <div className="text-4xl lg:text-8xl font-[1000] font-['Montserrat'] ">
            Hi, I'm Roe!
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          {/* carousel for contents */}
          <div className="h-full w-full flex flex-grow justify-center">
            <div className="bg-[var(--sidebar)] w-[80%] lg:w-full min-h-[250px] md:min-h-[100px] lg:min-h-[275px] rounded-lg shadow-md flex flex-row">
              <div className="h-full w-full flex flex-col p-7 ">
                <h1 className=" text-xl md:text-md lg:text-3xl h-[8vh]   font-bold font-['Montserrat'] text-nowrap">
                  About Me
                </h1>
                <p className="w-[90%] text-xs lg:text-lg lg:w-full">
                  An enthusiastic computer science undergraduate with a passion
                  for project-management and web development. I am continuously
                  sharpening my skills as a developer whilst handling short and
                  long term projects.
                </p>
              </div>
              <button className="w-[10%]">
                <i className="bx bx-chevron-right text-xl lg:text-6xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
