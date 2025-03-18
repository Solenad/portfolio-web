import "boxicons/css/boxicons.min.css";
import { useState } from "react";
import { motion } from "framer-motion";

interface props {
  style?: string;
  focus: number;
  setFocus: (index: number) => void;
}

export default function Sidebar({ style, focus, setFocus }: props) {
  const icon = [
    { icon: "bx-home", label: "Home" },
    { icon: "bx-user", label: "About" },
    { icon: "bx-terminal", label: "Tech" },
    { icon: "bx-code", label: "Projects" },
  ];

  return (
    <div className={`bg-[var(--sidebar)] h-full w-full flex flex-col ${style}`}>
      <div className="placeholder h-[16%]" />
      <div className="relative items text-lg flex flex-col items-center gap-y-5">
        <motion.div
          className="absolute  w-full h-10 bg-[var(--sidebar-btn-hover)]"
          initial={{ y: 0 }}
          animate={{ y: focus * 60 }}
          transition={{ type: "spring", duration: 0.5 }}
        />

        {icon.map((item, index) => (
          <button
            className={`z-10 group mr-2 w-[70%] h-10 text-left text-md  lg:text-lg`}
            key={index}
            onClick={() => setFocus(index)}
          >
            <i className={`bx ${item.icon} mr-3`} />{" "}
            <span className="inline-block group-hover:scale-125 transition duration-100 ease-in-out">
              {item.label}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-auto ml-6 text-sm">Roe Dizon</div>
      <div className="mb-9 ml-6 text-sm">2025</div>
    </div>
  );
}
