import "boxicons/css/boxicons.min.css";

export default function Sidebar() {
  const icon = [
    { icon: "bx-home", label: "Home" },
    { icon: "bx-user", label: "About" },
    { icon: "bx-terminal", label: "Tech" },
    { icon: "bx-code", label: "Projects" },
  ];

  return (
    <div className="bg-[var(--sidebar)] h-full w-full flex flex-col">
      <div className="placeholder h-[16%]" />
      <div className="items text-lg flex flex-col items-center gap-y-5">
        {icon.map((item) => (
          <button className="mr-2 w-[70%] text-left">
            <i className={`bx ${item.icon} mr-3`} /> {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
