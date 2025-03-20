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
                flex flex-col gap-y-5 lg:gap-y-15 mx-4 
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
          <div className="text-5xl lg:text-8xl font-[1000] font-['Montserrat']">
            {" "}
            Hi, I'm Roe!
          </div>
        </div>

        {/* carousel for contents */}
        <div className="h-full w-full flex flex-grow">
          <div className="bg-[var(--sidebar)] w-full min-h-[250px] rounded-lg shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}
