import { Metadata } from "next";
import { generatePageMetadata } from "@/app/helpers/generatePageMetadata";
import { getServices, getStandardPageData, getSEODefaults } from "@/sanity/sanity-utils";
import { Service as ServiceType } from "@/app/types/Service";
import HeroBanner from "@/app/components/HeroBanner/HeroBanner";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { GoArrowDown } from "react-icons/go";


export async function generateMetadata(): Promise<Metadata> {
  const page = await getStandardPageData("pageServices");
  const defaults = await getSEODefaults();
  return generatePageMetadata(page, defaults);
}

const pageServices = async () => {
  const services = await getServices();

  const page = await getStandardPageData("pageServices");

  return (
    <main>
      <HeroBanner headline={page.heroHeadline} />

      <article className="mt-8 lg:mt-16">
        {services &&
          services.map((service: ServiceType, i: number) => (
            <details
              key={i}
              className="border-t last:border-b border-primary"
            >
              <summary className="service-trigger ~text-2xl/5xl cursor-pointer py-4 container flex justify-between items-center [[open]_&>span]:rotate-180 relative hover:text-primary-700 transition">
                <h2>{service.title}</h2>
                <span><GoArrowDown /></span>
                <Image
                  src={
                    service.image
                      ? urlFor(service.image)
                          .width(230)
                          .height(164)
                          .fit("crop")
                          .url()
                      : "https://picsum.photos/230/164"
                  }
                  alt={service.title}
                  width={230}
                  height={164}
                  className="absolute top-1/2 right-[20%] -translate-y-1/2 hidden"
                />
              </summary>
              <div className="flex flex-col md:flex-row mt-2 pb-6 container">
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
