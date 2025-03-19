interface props {
  style: string;
  sidebarOpen: boolean;
}

export default function About({ style, sidebarOpen }: props) {
  return (
    <div
      className={`${style} flex w-full h-full justify-center md:justify-start lg:justify-start`}
    >
      <div className="max-h-[60%] flex flex-col lg:flex-row w-full justify-center lg:justify-start items-center gap-25">
        <div className="bg-[var(--card-block)] max-h-[225px] shadow-lg rounded-lg border border-[var(--card-color1)]">
          <img
            className="w-[225px] p-2"
            src="https://avatars.githubusercontent.com/u/166220458?s=96&v=4"
          />
        </div>
        <div className="text-5xl lg:text-8xl  font-[1000] font-['Montserrat']">
          {" "}
          Hi, I'm Roe!
        </div>
      </div>
    </div>
  );
}
