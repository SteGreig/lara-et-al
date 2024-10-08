import { getSiteSettings } from "@/sanity/sanity-utils";
import { LogoTextureSvg } from "../Utils/LogoTextureSvg";
import Link from "next/link";
import { socialLink } from "@/app/types/SocialLink";

export default async function Footer() {
  const site = await getSiteSettings();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-24 xl:mt-36">
      <div className="px-2 lg:px-4 2xl:px-6 ~-mb-1/3">
        <LogoTextureSvg />
      </div>

      <div className="bg-noise-30 bg-primary text-cream container py-7 flex flex-col gap-4 lg:grid md:grid-cols-12 uppercase tracking-widest text-sm">
        <p className="col-start-1">&copy; {currentYear}</p>
        {site.socials && (
          <ul className="col-start-3 flex gap-4">
            {site.socials.map((social: socialLink) => (
              <li key={`footer-${social.platform}`}>
                <Link href={social.url}>{social.platform}</Link>
              </li>
            ))}
          </ul>
        )}
        <p className="-col-end-1 justify-self-end lg:whitespace-nowrap">
          {site.address}
        </p>
      </div>
    </footer>
  );
}
