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
      <div className="container h-[80vh] max-h-[1200px] xl:h-auto">
        <HeroSlider
          slides={home.heroSlides}
          heroHeadline={page.heroHeadline}
          heroSubline={home.heroSubline}
        />
      </div>

      {/* <main className="container">
        <h1>{home.contentHeadline}</h1>
        <div className="flex flex-col md:flex-row">
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
      </main> */}

      {/* <Testimonials /> */}
    </div>
  );
}
