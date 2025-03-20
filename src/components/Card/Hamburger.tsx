import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
  style?: string;
  handleOpen: () => void;
}

export default function Hamburger({ style, handleOpen }: Props) {
  return (
    <button
      className={`p-2 hover:text-[var(--text-dhover)] hover:transition-colors  hover:ease-in-out cursor-pointer ${style}`}
      onClick={handleOpen}
    >
      <FontAwesomeIcon className="text-2xl" icon={faBars} />
    </button>
  );
}
