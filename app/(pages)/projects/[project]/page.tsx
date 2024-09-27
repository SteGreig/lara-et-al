import { Metadata } from "next";
import { getProject, getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

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

  return (
    <main className="fixed inset-0 bg-primary bg-noise-30 z-40 text-cream flex flex-col lg:flex-row p-4 xl:p-10 3xl:p-14 4xl:p-20">
      <article className="lg:flex-1">
        <Link href="/projects/">All Projects</Link>
        <h1 className="font-bold text-5xl">{project.name}</h1>
        <PortableText value={project.description} />
        {project.services.map(service => (
          <p>{service.serviceName}</p>
        ))}
      </article>
      <aside className="lg:flex-1">
        images
      </aside>
    </main>
  );
}
