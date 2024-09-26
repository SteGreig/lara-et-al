import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import {
  getHomePage,
  getStandardPageData,
} from "@/sanity/sanity-utils";

import HeroSlider from "./components/HeroSlider/HeroSlider";
import Testimonials from "./components/Testimonials/Testimonials";

export default async function Home() {
  const page = await getStandardPageData("pageHome");
  const home = await getHomePage();

  return (
    <div>
      <div className="container">
        <HeroSlider
          slides={home.heroSlides}
          heroHeadline={page.heroHeadline}
          heroSubline={home.heroSubline}
        />
      </div>

      <main className="container">
        <h1>{home.contentHeadline}</h1>
        <div className="flex flex-col md:flex-row">
          {page.contentImage && (
            <aside className="w-full md:w-5/12">
              <Image
                src={page.contentImage}
                alt={page.contentImageAlt}
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

      <Testimonials />

      {/* {projects.map((project: ProjectType) => (
        <p>{project.name}</p>
      ))} */}
    </div>
  );
}
