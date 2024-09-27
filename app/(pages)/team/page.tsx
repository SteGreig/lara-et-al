import { Metadata } from "next";
import { getTeamMembers, getStandardPageData } from "@/sanity/sanity-utils";
import { TeamMember } from "@/app/types/TeamMember";
import HeroBanner from "@/app/components/HeroBanner/HeroBanner";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Team",
  description: "Team page",
};

const pageTeam = async () => {
  const teamMembers = await getTeamMembers();

  const page = await getStandardPageData("pageTeam");

  return (
    <main>
      <HeroBanner headline={page.heroHeadline} />

      <div className="container mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((person: TeamMember, i: number) => (
          <div className="relative col-span-1 flex flex-col" key={i}>
            <Image
              src={
                person.profileImage
                  ? urlFor(person.profileImage)
                      .width(800)
                      .height(815)
                      .fit("crop")
                      .url()
                  : "https://picsum.photos/800/815"
              }
              alt={person.name}
              width={800}
              height={815}
              className="transition duration-500 ease-out grayscale hover:grayscale-0 mb-4"
            />
            <h2 className="text-3xl">{person.name}</h2>
            <p className="font-medium">{person.jobTitle}</p>
            {person.bio && <p className="mt-3">{person.bio}</p>}
          </div>
        ))}
      </div>
    </main>
  );
};

export default pageTeam;
