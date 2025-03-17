import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
  style?: string;
}

export default function Hamburger({ style }: Props) {
  return (
    <button
      className={`p-2 hover:text-[var(--text-hover)] transition duration-300 ease-in-out cursor-pointer ${style}`}
    >
      <FontAwesomeIcon className="text-2xl" icon={faBars} />
    </button>
  );
}
