import Image from "next/image";
import { getSiteSettings } from "@/sanity/sanity-utils";
import Link from "next/link";
import SlideoutMenu from "./SlideoutMenu";

export default async function Header() {
  const site = await getSiteSettings();

  return (
    <header className="header container ~py-3/4 flex">
      <Link href="/">
        <Image className="~w-44/64" src={site.logo} alt={site.companyName} width={302} height={58} />
      </Link>
      <span className="self-center flex-1 h-px bg-primary ~ml-4/10"></span>
      <Link className="btn ~/2xl:~px-4/8 ~/2xl:~py-2/3" href="/contact/">Contact</Link>
      <span className="self-center ~w-3/8 h-px bg-primary"></span>
      <SlideoutMenu />
    </header>
  );
}
