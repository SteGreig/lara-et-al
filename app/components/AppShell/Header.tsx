import Image from "next/image";
import { getSiteSettings } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Header() {
  const site = await getSiteSettings();

  return (
    <header className="header container ~py-4/6 flex">
      <Link href="/">
        <Image className="~w-44/72" src={site.logo} alt={site.companyName} width={302} height={58} />
      </Link>
      <span className="self-center flex-1 h-px bg-primary ~ml-4/10"></span>
      <Link className="btn ~/2xl:~px-4/11 ~/2xl:~py-2/4" href="/contact/">Contact</Link>
      <span className="self-center ~w-3/8 h-px bg-primary"></span>
      <button className="aspect-square bg-primary rounded-full text-cream inline-flex ~/2xl:~w-[2.375rem]/[3.75rem] ~/2xl:~px-3/[1.15rem] ~/2xl:~py-3/[1.3rem] group hover:shadow-lg hover:shadow-primary/20 transition duration-300">
        <div className="flex flex-col justify-between items-end w-full h-full transition">
          <span className="h-[2px] w-full rounded bg-cream block"></span>
          <span className="h-[2px] w-3/4 group-hover:w-full transition-all rounded bg-cream block"></span>
          <span className="h-[2px] w-5/12 group-hover:w-full transition-all rounded bg-cream block"></span>
        </div>
      </button>
    </header>
  );
}
