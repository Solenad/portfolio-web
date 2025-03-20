interface props {
  content: React.ReactNode;
  change: () => void;
  style: string;
}
export default function Button({ content, change, style }: props) {
  return (
    <button
      className={`w-[20px] flex justify-center items-center px-4 ${style}`}
      onClick={change}
    >
      {content}
    </button>
  );
}
