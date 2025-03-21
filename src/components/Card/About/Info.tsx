export default function Info() {
  return (
    <div className="text-[var(--text-light)] dark:text-[var(--text-dark)] transition-colors duration-300 ease-in-out">
      <h1
        className=" text-xl md:text-md lg:text-3xl h-[6vh] md:h-[8vh] lg:h-[8vh] 
                      font-bold font-['Montserrat'] text-nowrap text-center lg:text-start"
      >
        About Me
      </h1>
      <p className="w-full text-xs lg:text-lg lg:w-full mb-2 lg:mb-0 text-center md:text-justify lg:text-justify">
        An enthusiastic computer science undergraduate with a passion for
        project-management and web development. Together with my organization
        colleagues, I continuously refine my skills through various partnership
        and personal projects, as well as competing in hackathons.
      </p>
    </div>
  );
}
