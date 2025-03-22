import "boxicons/css/boxicons.min.css";

export default function Info() {
  return (
    <div className="text-[var(--text-light)] dark:text-[var(--text-dark)] transition-colors duration-300 ease-in-out pr-10">
      <h1
        className=" text-xl md:text-md lg:text-3xl h-[6vh] md:h-[8vh] lg:h-[8vh] 
                      font-bold font-['Montserrat'] text-nowrap text-center lg:text-start flex flex-row justify-center lg:justify-start items-center"
      >
        <i className="bx bx-user pr-2 lg:pr-4 font-bold" /> About Me
      </h1>
      <p className="w-full text-xs lg:text-lg lg:w-full mb-2 lg:mb-0 text-center md:text-justify lg:text-justify ">
        Designs seamless and efficient backend services, whilst sharpening
        frontend techniques. Enjoys project-management, hackathons, and team
        environments. Plans to be a full-stack developer with a background of
        data analytics.
      </p>
    </div>
  );
}
