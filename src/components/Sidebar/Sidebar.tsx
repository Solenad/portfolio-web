import "boxicons/css/boxicons.min.css";
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
    { icon: "bx-code", label: "Projects" },
  ];

  return (
    <div
      className={`bg-[var(--sidebar-light)] h-full w-full flex flex-col dark:bg-[var(--sidebar)] transition-colors duration-300 ease-in-out
        ${style}`}
    >
      <div className="placeholder h-[16%]" />
      <div className="relative items text-lg flex flex-col items-center gap-y-5">
        <motion.div
          className="absolute  w-full h-10 bg-[var(--sidebar-btn-hoverl)] dark:bg-[var(--sidebar-btn-hover)] transition-colors duration-300 ease-in-out"
          initial={{ y: 0 }}
          animate={{ y: focus * 60 }}
          transition={{ type: "spring", duration: 0.5 }}
        />

        {icon.map((item, index) => (
          <button
            className={`z-10 group mr-2 w-[70%] h-10 text-left text-mdlg:text-lg text-[var(--text-light)] dark:text-[var(--text-dark)]
                       transition-colors duration-300 ease-in-out`}
            key={index}
            onClick={() => setFocus(index)}
          >
            <i className={`bx ${item.icon} mr-3`} />{" "}
            <span className="inline-block group-hover:scale-125 transition-transform duration-100 ease-in-out">
              {item.label}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-auto ml-6 text-sm dark:text-[var(--text-dark)] transition-colors duration-300 ease-in-out">
        Roe Dizon
      </div>
      <div className="mb-9 ml-6 text-sm dark:text-[var(--text-dark)] transition-colors duration-300 ease-in-out">
        2025
      </div>
    </div>
  );
}
