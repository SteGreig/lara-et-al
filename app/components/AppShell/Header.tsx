import Image from "next/image";
import { getSiteSettings } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Header() {
  const site = await getSiteSettings();

  return (
    <header className="header container">
      <Link href="/">
        <Image src={site.logo} alt={site.companyName} width={302} height={58} />
      </Link>
    </header>
  );
}
