import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { getHomePage, getStandardPageData } from "@/sanity/sanity-utils";
import { urlFor } from "@/sanity/sanity-utils";

import HeroSlider from "./components/HeroSlider/HeroSlider";
import Testimonials from "./components/Testimonials/Testimonials";

export default async function Home() {
  const page = await getStandardPageData("pageHome");
  const home = await getHomePage();

  const imageUrl = urlFor(page.contentImage)
    .width(1000) // Resize width to 800px
    .height(800) // Optionally set height (cropping may be needed)
    .fit("crop") // Optionally crop to fit
    .url(); // Get the final URL

  return (
    <div>
      
      <HeroSlider
        slides={home.heroSlides}
        heroHeadline={page.heroHeadline}
        heroSubline={home.heroSubline}
      />

      <main className="container ~mt-24/28">
        <h1 className="large-headline 2xl:w-11/12 ~mb-4/20">{home.contentHeadline}</h1>
        <div className="flex flex-col md:flex-row ~gap-6/20">
          {page.contentImage && (
            <aside className="w-full md:w-5/12">
              <Image
                src={imageUrl}
                alt={page.contentImageAlt ?? home.contentHeadline}
                width={1000}
                height={800}
              />
            </aside>
          )}
          {page.contentCopy && (
            <article className="copy w-full md:w-7/12">
              <PortableText value={page.contentCopy} />
              <Link href={`/team/`}>Our Team</Link>
            </article>
          )}
        </div>
      </main>

      <Testimonials className="~mt-16/40" />
    </div>
  );
}
