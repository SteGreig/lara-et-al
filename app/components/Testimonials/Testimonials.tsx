import { getTestimonials } from "@/sanity/sanity-utils";
import { Testimonial as TestimonialType } from "../../types/Testimonial";
import Slider from "../Utils/Slider/Slider";

export default async function Testimonials({className, blurb}: {className: string, blurb: string}) {
  const testimonials = await getTestimonials();

  return (
    <div className={`pl-spacing pr-spacing xs:pr-0 flex flex-col xl:flex-row xl:justify-between ${className}`}>
      <div className="pr-spacing xl:pr-0 w-full xl:w-5/12 max-w-screen-sm xl:max-w-[480px]">
        <h3 className="large-headline">Testimonials</h3>
        {blurb && (
          <p className="~text-base/xl mt-2 xl:mt-4">{blurb}</p>
        )}
      </div>
      <div className="w-full xl:w-7/12 mt-6 xl:mt-0">
        <Slider>
          {testimonials.map((testimonial: TestimonialType, i: number) => (
            <div key={i} className="flex snap-start rounded-3xl border-2 border-primary hover:brightness-50 transition ~p-4/10 w-full max-w-96 lg:max-w-[480px] flex-none last:mr-6">
              <blockquote className="flex flex-col">
                <p className="text-base/snug md:text-lg/snug mb-4">&quot;{testimonial.quote}&quot;</p>
                <cite className="not-italic mt-auto block">
                  <span className="text-base/snug md:text-lg/snug font-bold">{testimonial.person}</span>
                  {testimonial.detail && <span className="text-base/snug font-medium block">{testimonial.detail}</span>}
                </cite>
              </blockquote>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
