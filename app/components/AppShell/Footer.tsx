import Image from "next/image";
import { getSiteSettings } from "@/sanity/sanity-utils";

export default async function Footer() {

  const site = await getSiteSettings();

  return (
    <footer className="footer">
      <div className="">
        <Image src={site.logo} alt={site.companyName} width={2500} height={480} />
      </div>

      <div className="">

      </div>
    </footer>
  )
}