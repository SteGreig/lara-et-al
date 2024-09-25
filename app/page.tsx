import Image from "next/image";
import {
  getProjects,
  getSiteSettings,
  getHomePage,
  getStandardPageData,
} from "@/sanity/sanity-utils";
import { Project as ProjectType } from "./types/Project";
import HeroSlider from "./components/HeroSlider/HeroSlider";

export default async function Home() {
  const projects = await getProjects();

  const site = await getSiteSettings();
  const page = await getStandardPageData("pageHome");
  const home = await getHomePage();

  return (
    <div>
      <h1>{page.heroHeadline}</h1>
      <p>{home.heroSubline}</p>
      <p>{page.seo.metaTitle}</p>

      <HeroSlider
        slides={home.heroSlides}
        heroHeadline={page.heroHeadline}
        heroSubline={home.heroSubline}
      />

      {/* {projects.map((project: ProjectType) => (
        <p>{project.name}</p>
      ))} */}
    </div>
  );
}
