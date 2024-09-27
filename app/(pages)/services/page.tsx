import { Metadata } from "next";
import { getServices, getStandardPageData } from "@/sanity/sanity-utils";
import { Service as ServiceType } from "@/app/types/Service";
import HeroBanner from "@/app/components/HeroBanner/HeroBanner";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export const metadata: Metadata = {
  title: "Team",
  description: "Team page",
};

const pageServices = async () => {
  const services = await getServices();

  const page = await getStandardPageData("pageServices");

  return (
    <main>
      <HeroBanner headline={page.heroHeadline} />

      <article className="mt-16">
        {services &&
          services.map((service: ServiceType, i: number) => (
            <details
              key={i}
              className="border-t last:border-b border-primary container"
            >
              <summary className="text-3xl cursor-pointer py-4">
                <h2>{service.title}</h2>
              </summary>
              <div className="flex mt-2 pb-6">
                <div className="copy mb-4 md:w-1/2">
                  <PortableText value={service.description} />
                </div>

                <div className="md:w-1/3 mx-auto">
                  <Image
                    src={
                      service.image
                        ? urlFor(service.image)
                            .width(800)
                            .height(572)
                            .fit("crop")
                            .url()
                        : "https://picsum.photos/800/572"
                    }
                    alt={service.title}
                    width={800}
                    height={572}
                  />
                </div>
              </div>
            </details>
          ))}
      </article>
    </main>
  );
};

export default pageServices;
