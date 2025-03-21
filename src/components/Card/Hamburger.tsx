import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
  style?: string;
  handleOpen: () => void;
}

export default function Hamburger({ style, handleOpen }: Props) {
  return (
    <button
      className={`p-2 group cursor-pointer ${style}`}
      onClick={handleOpen}
    >
      <FontAwesomeIcon
        className="text-2xl hover:text-[var(--text-dhover)] dark:text-[var(--text-dark)] transition-colors duration-300 ease-in-out"
        icon={faBars}
      />
    </button>
  );
}
