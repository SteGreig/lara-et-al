import { Metadata } from "next";
import { getProjects, getStandardPageData } from "@/sanity/sanity-utils";
import { Project as ProjectType } from "@/app/types/Project";
import HeroBanner from "@/app/components/HeroBanner/HeroBanner";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects page",
};

const pageProjects = async () => {
  const projects = await getProjects();

  const page = await getStandardPageData("pageProjects");

  return (
    <main>
      <HeroBanner headline={page.heroHeadline} />

      <div className="my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2px]">
        {projects.map((project: ProjectType, i: number) => (
          <Link
            className="relative col-span-1 overflow-hidden group after:absolute after:inset-0 after:bg-gradient-to-tr after:from-black/20"
            href={`/projects/${project.slug}/`}
            key={i}
          >
            <Image
              src={urlFor(project.image)
                .width(1000)
                .height(648)
                .fit("crop")
                .url()}
              alt={project.name}
              width={1000}
              height={648}
              className="group-hover:scale-110 transition duration-700 ease-out grayscale group-hover:grayscale-0"
            />
            <h2 className="absolute bottom-0 left-0 text-sm p-2 text-cream/80 group-hover:text-cream transition duration-500 leading-tight z-20">
              {project.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default pageProjects;
