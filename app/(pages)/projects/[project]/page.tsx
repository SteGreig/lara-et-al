import { Metadata } from "next";
import { getProject, getProjects } from "@/sanity/sanity-utils";

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
    <div>
      <p>hello</p>
      {project.name}
    </div>
  );
}
