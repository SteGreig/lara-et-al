import Image from "next/image";
import { getSiteSettings } from "@/sanity/sanity-utils";

export default async function Header() {

  const site = await getSiteSettings();

  return (
    <header>
      <Image src={site.logo.asset.url} alt={site.companyName} />
    </header>
  )
}