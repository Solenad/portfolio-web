import "boxicons/css/boxicons.min.css";

const tech = [
  {
    title: "Languages",
    items: [
      "devicon-c-plain",
      "devicon-java-plain",
      "devicon-html5-plain",
      "devicon-css3-plain",
      "devicon-javascript-plain",
      "devicon-typescript-plain",
      "devicon-python-plain",
      "devicon-markdown-original",
      "devicon-r-plain",
    ],
  },
  {
    title: "Frameworks and Databases",
    items: [
      "devicon-react-original",
      "devicon-tailwindcss-original",
      "devicon-express-original",
      "devicon-mysql-original",
      "devicon-mongodb-plain",
      "devicon-firebase-plain",
    ],
  },
  {
    title: "Tools",
    items: [
      "devicon-neovim-plain",
      "devicon-vscode-plain",
      "devicon-nodejs-line",
      "devicon-powershell-plain",
      "devicon-git-plain",
      "devicon-vitejs-plain",
      "devicon-figma-plain",
    ],
  },
];

export default function Tech() {
  return (
    <div className="text-[var(--text-light)] dark:text-[var(--text-dark)] px-3">
      <h1
        className=" text-xl md:text-md lg:text-3xl h-[6vh] md:h-[8vh] lg:h-[8vh] mb-2
                      font-bold font-['Montserrat'] text-nowrap text-center lg:text-start flex flex-row justify-start lg:justify-center items-center"
      >
        <i className="bx bx-terminal pr-2 lg:pr-4 font-bold" /> Tech
      </h1>
      <div className="w-full flex flex-row flex-wrap justify-between">
        {tech.map((category, index) => (
          <div
            key={index}
            className="text-md md:text-lg lg:text-2xl space-x-2 dark:bg-[var(--card-color2)] w-[30%] p-4 rounded-lg  dark:border-gray-700 
        bg-[var(--sidebar-light)] transition-colors duration-300 ease-in-out border border-gray-400"
          >
            <p className="text-[8px] md:text-md lg:text-lg mb-4 text-left lg:text-center md:text-center">
              {category.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((icon, index2) => (
                <i key={index2} className={icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
