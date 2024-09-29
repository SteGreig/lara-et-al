import { Metadata } from "next";
import { getProject, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { GalleryImage } from "@/app/types/GalleryImage";
import BtnArrow from "@/app/components/Utils/BtnArrow";

type Props = {
  params: { project: string };
};

// Generate these projects as static pages (using an array of project slugs) rather than dynamically rendered
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(({ slug }: { slug: string }) => slug);
}

// Generate the dynamic meta data for this page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project = await getProject(slug);
  return {
    title: `${project.name}`,
    description: `${project.excerpt}`,
    openGraph: {
      title: `${project.name}`,
      description: `${project.excerpt}`,
      images: {
        url: `${project.mainImage}`,
        width: 1920,
        height: 960,
      },
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <main className="container absolute top-0 left-0 min-h-screen bg-primary bg-noise-30 bg-fixed z-40 text-cream flex flex-col lg:flex-row lg:gap-8 2xl:gap-20 4xl:gap-32">
      <article className="lg:flex-[5] lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col">
        <BtnArrow
          className="inline-flex mt-spacing mb-6"
          href="/projects/"
          label="All Projects"
          direction="left"
          theme="light"
        />

        <div className="flex-1 overflow-y-auto flex flex-col items-start gap-6 pb-8 hide-scrollbar scroll-smooth">
          <h1 className="~text-4xl/6xl leading-tight font-medium">{project.name}</h1>

          {project.description && (
            <div className="copy mb-4">
              <PortableText value={project.description} />
            </div>
          )}

          {project.squareFootage && (
            <p className="font-medium">{project.squareFootage.toLocaleString()} sqft</p>
          )}

          {project.services && (
            <ul>
              {project.services.map((service: { serviceName: string }, i: number) => (
                <li key={i} className="font-medium">{service.serviceName}</li>
              ))}
            </ul>
          )}
        </div>
      </article>

      <aside className="lg:flex-[7] mt-spacing mb-spacing flex flex-col gap-4">
        {project.gallery &&
          project.gallery.map((img: GalleryImage, i: number) => {
            return (
              <Image
                key={i}
                src={img.url}
                alt={img.alt}
                width={img.metadata.dimensions.width}
                height={img.metadata.dimensions.height}
              />
            );
          })}
      </aside>
    </main>
  );
}
