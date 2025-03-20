import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

interface props {
  style: string;
  sidebarOpen: boolean;
}

export default function Title({ sidebarOpen, style }: props) {
  return (
    <div className={`${style} h-full w-full flex justify-center`}>
      <div
        className={`h-full z-0 flex flex-col justify-center text-left px-10 md:px-20 lg:px-40 transition-transform duration-500 
             items-center text-nowrap 
             lg:mt-30 lg:relative lg:items-start ${sidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-[20%]"}`}
      >
        <motion.p
          className="text-5xl text-nowrap md:text-7xl lg:text-9xl font-bold font-['Montserrat'] mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Roe Dizon
        </motion.p>
        <TypeAnimation
          className="ml-[0.3em] lg:ml-3 text-lg sm:text-xl md:text-2xl lg:text-3xl"
          sequence={[
            "Software Developer",
            3000,
            "College Student (Year 2)",
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
  );
}
