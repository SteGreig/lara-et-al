import { getTestimonials } from "@/sanity/sanity-utils";
import { Testimonial as TestimonialType } from "../../types/Testimonial";
import Slider from "../Utils/Slider/Slider";

export default async function Testimonials() {

  const testimonials = await getTestimonials();

  return (
    <div className="container flex flex-col xl:flex-row">
      <div className="w-full xl:w-5/12">
        <h3>Testimonials</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
          libero at erat tristique, sed venenatis urna varius.
        </p>
      </div>
      <div className="w-full xl:w-7/12">
        <Slider>
          {testimonials.map((testimonial: TestimonialType) => (
            <div>
              <blockquote>
                <p>{testimonial.quote}</p>
                <cite>
                  <span>{testimonial.person}</span>
                  {testimonial.detail && <span>{testimonial.detail}</span>}
                </cite>
              </blockquote>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}