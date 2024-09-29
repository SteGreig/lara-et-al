import Link from "next/link";

type BtnArrowType = {
  label: string;
  href?: string;
}

const BtnArrow = ({
  label,
  href
}: BtnArrowType) => {

  const Wrapper = ({
    className,
    children,
  }: Readonly<{ className: string; children: React.ReactNode }>) =>
    href ? (
      <Link
        className={className}
        href={href}
      >
        {children}
      </Link>
    ) : (
      <button className={className}>{children}</button>
    );

  return (
    
    <Wrapper className="sm:ml-auto mt-2 sm:mt-0 flex items-center gap-2 group transition hover:brightness-50">
      <span>{label}</span>
      <span className="flex items-center">
        <span className="block w-10 group-hover:w-14 transition-all h-[2px] bg-primary -mr-2"></span>
        <span className="block w-2 h-2 border-t-2 border-r-2 border-primary rotate-45"></span>
      </span>
    </Wrapper>
    
  )
}

export default BtnArrow