import Image from "next/image";
import { getSiteSettings } from "@/sanity/sanity-utils";

export default async function Header() {
  const site = await getSiteSettings();

  return (
    <header className="header container">
      <Image src={site.logo} alt={site.companyName} width={302} height={58} />
    </header>
  );
}
