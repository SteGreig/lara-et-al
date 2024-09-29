import Link from "next/link";
import LongArrow from "./LongArrow/LongArrow";

type BtnArrowType = {
  label: string;
  href?: string;
  className?: string;
  direction?: "left" | "right";
  theme?: "light" | "dark";
};

const BtnArrow = ({
  label,
  href,
  className,
  direction,
  theme,
}: BtnArrowType) => {
  const Wrapper = ({
    className,
    children,
  }: Readonly<{ className: string; children: React.ReactNode }>) =>
    href ? (
      <Link className={className} href={href}>
        {children}
      </Link>
    ) : (
      <button className={className}>{children}</button>
    );

  return (
    <Wrapper
      className={`${className} flex items-center gap-2 group transition ${theme == 'light' ? '' : 'hover:brightness-50'}`}
    >
      <span className={`${direction === "left" && "order-1"}`}>{label}</span>
      <LongArrow direction={direction} theme={theme} />
    </Wrapper>
  );
};

export default BtnArrow;
