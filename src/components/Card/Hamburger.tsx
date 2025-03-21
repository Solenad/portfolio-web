import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
  style?: string;
  handleOpen: () => void;
}

export default function Hamburger({ style, handleOpen }: Props) {
  return (
    <button
      className={`p-2 group hover:text-[var(--text-dhover)] cursor-pointer ${style}`}
      onClick={handleOpen}
    >
      <FontAwesomeIcon
        className="text-2xl  group-hover:transition-colors group-hover:duration-300 group:ease-in-out"
        icon={faBars}
      />
    </button>
  );
}
