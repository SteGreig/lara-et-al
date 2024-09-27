import { Metadata } from "next";
import { getProject, getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity-utils";
import { GalleryImage } from "@/app/types/GalleryImage";

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
    //description: `${project.content}`,
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  console.log(project.gallery)

  return (
    <main className="container absolute top-0 left-0 min-h-screen bg-primary bg-noise-30 z-40 text-cream flex flex-col lg:flex-row lg:gap-8 2xl:gap-20 4xl:gap-32">

      <article className="lg:flex-[5] lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col">
        
        <Link className="inline-flex mt-4 xl:mt-10 3xl:mt-14 4xl:mt-20 mb-6" href="/projects/">All Projects</Link>

        <div className="flex-1 overflow-y-auto flex flex-col items-start gap-6 pb-8 hide-scrollbars">

          <h1 className="text-6xl font-medium">{project.name}</h1>

          {project.description && (
            <div className="copy mb-4">
              <PortableText value={project.description} />
            </div>
          )}

          {project.squareFootage && (
            <p className="font-medium">{project.squareFootage} sqft</p>
          )}

          {project.services && (
            <ul>
              {project.services.map((service: { serviceName: string }) => (
                <li className="font-medium">{service.serviceName}</li>
              ))}
            </ul>
          )}
        </div>
      </article>

      <aside className="lg:flex-[7] lg:py-4 xl:py-10 3xl:py-14 4xl:py-20 flex flex-col gap-4">
        {project.gallery && project.gallery.map((img: GalleryImage, i: number) => {
        return (
          <Image
            key={i}
            src={img.url}
            alt={img.alt}
            width={img.metadata.dimensions.width}
            height={img.metadata.dimensions.height}
          />
        )})}
      </aside>

    </main>
  );
}
