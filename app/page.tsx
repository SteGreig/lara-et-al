import Image from "next/image";
import { getProjects } from '@/sanity/sanity-utils'
import { Project as ProjectType } from "./types/Project";

export default async function Home() {

  const projects = await getProjects();
  
  return (
    <div>

      <h1>Lara et al</h1>
      
      {projects.map((project: ProjectType) => (
        <p>{project.name}</p>
      ))}

    </div>
  );
}
