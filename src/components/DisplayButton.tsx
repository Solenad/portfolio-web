import "boxicons/css/boxicons.min.css";

interface props {
  toggleDisplay: () => void;
}

export default function DisplayButton({ toggleDisplay }: props) {
  return (
    <button
      className="bg-[var(--text-dark)] text-[var(--text-light)] p-2
                       flex justify-center rounded-lg shadow-lg text-xl
                 hover:bg-[var(--text-dhover)]  transition-colors duration-300"
      onClick={toggleDisplay}
    >
      <i className="bx bxs-sun"></i>
    </button>
  );
}
