import "boxicons/css/boxicons.min.css";

interface props {
  toggleDisplay: () => void;
  display: boolean;
}

export default function DisplayButton({ toggleDisplay, display }: props) {
  return (
    <button
      className="bg-[var(--text-light)] dark:bg-[var(--text-dark)] text-[var(--text-dark)] dark:text-[var(--text-light)] p-2
                       flex justify-center rounded-lg shadow-lg text-xl overflow-hidden flex-row
                   transition-colors duration-100"
      onClick={toggleDisplay}
    >
      <i
        className={`bx bxs-sun transition duration-100 ease-in-out ${display ? "translate-x-5 opacity-0" : "translate-x-0"} `}
      ></i>
      <i
        className={`bx bxs-moon transition duration-100 ease-in-out ${display ? "-translate-x-0" : "-translate-x-5 opacity-0"}`}
      />
    </button>
  );
}
