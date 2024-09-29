const LongArrow = ({
  direction,
  theme,
}: {
  direction?: "left" | "right";
  theme?: "light" | "dark";
}) => {
  return (
    <span className="flex items-center">
      <span
        className={`block w-10 group-hover:w-14 transition-all h-[2px] ${theme === "light" ? "bg-cream" : "bg-primary"} ${direction === "left" ? "-ml-2" : "-mr-2"}`}
      ></span>
      <span
        className={`block w-2 h-2 border-t-2 ${theme === "light" ? "border-cream" : "border-primary"} ${direction === "left" ? "-rotate-45 border-l-2 order-first" : "border-r-2 rotate-45"}`}
      ></span>
    </span>
  );
};

export default LongArrow;
