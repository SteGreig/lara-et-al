import { Metadata } from 'next';
import { getProjects, getStandardPageData } from "@/sanity/sanity-utils";
import { Project as ProjectType } from '@/app/types/Project';
import HeroBanner from '@/app/components/HeroBanner/HeroBanner';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects page',
};

const pageProjects = async () => {

  const projects = await getProjects();

  const page = await getStandardPageData('pageProjects');

  return (
    <div>

      <HeroBanner headline={page.heroHeadline} />
      
      {projects.map((project: ProjectType) => (
        <p>{project.name}</p>
      ))}

    </div>
  )
}

export default pageProjects