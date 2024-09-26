import Image from "next/image";
import { getSiteSettings } from "@/sanity/sanity-utils";

export default async function Footer() {

  const site = await getSiteSettings();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="px-2 lg:px-4 2xl:px-6">
        <Image src={site.logo} alt={site.companyName} width={2500} height={480} />
      </div>

      <div className="bg-primary text-cream container grid grid-cols-12">
        <p className="col-start-1">&copy; {currentYear}</p>
        <p className="col-start-3">&copy; 2024</p>
        <p className="-col-end-1 justify-self-end whitespace-nowrap">{site.address}</p>
      </div>
    </footer>
  )
}