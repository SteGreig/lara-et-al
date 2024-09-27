import { Metadata } from "next";
import { getStandardPageData, getSiteSettings } from "@/sanity/sanity-utils";
import HeroBanner from "@/app/components/HeroBanner/HeroBanner";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { socialLink } from "@/app/types/SocialLink";

export const metadata: Metadata = {
  title: "Team",
  description: "Team page",
};

const pageContact = async () => {

  const page = await getStandardPageData("pageContact");
  const site = await getSiteSettings();

  return (
    <main>
      <HeroBanner headline={page.heroHeadline} />

      <div className="mt-16 container flex flex-col md:flex-row gap-8 xl:gap-16 2xl:gap-24">

        <article className="md:flex-1">
          <div className="copy">
            <PortableText value={page.contentCopy} />
          </div>

          <div className="font-medium text-xl flex flex-col gap-2 mt-8">
            {site.phone && <p>{site.phone}</p>}
            {site.email && <p>{site.email}</p>}
            {site.address && <p>{site.address}</p>}
          </div>

          {site.socials && (
            <ul className="font-medium text-xl mt-8 flex gap-4">
              {site.socials.map((social: socialLink) => (
                <li key={`footer-${social.platform}`}>
                  <Link href={social.url}>{social.platform}</Link>
                </li>
              ))}
            </ul>
          )}
        </article>

        <aside className="md:flex-1">
          <Image
            src={
              page.contentImage
                ? urlFor(page.contentImage)
                    .width(1000)
                    .height(800)
                    .fit("crop")
                    .url()
                : "https://picsum.photos/1000/800"
            }
            alt={page.contentImageAlt}
            width={1000}
            height={800}
          />
        </aside>

      </div>

    </main>
  );
};

export default pageContact;
