import { HeroSlide } from "../../types/HeroSlide";
import Link from "next/link";
import Image from "next/image";

type HeroSlider = {
  slides: HeroSlide[];
  heroHeadline?: string;
  heroSubline?: string;
};

const HeroSlider = ({ slides, heroHeadline, heroSubline }: HeroSlider) => {
  return (
    <div className="relative h-full w-full">
      {heroHeadline && (
        <div className="absolute bottom-0 left-0 z-10">
          <p className="text-3xl text-white">{heroHeadline}</p>
          {heroSubline && <p>{heroSubline}</p>}
        </div>
      )}

      {slides.map((slide, i: number) => {
        const SlideEl = ({
          children,
        }: Readonly<{ children: React.ReactNode }>) =>
          slide.projectSlug ? (
            <Link className="block w-full h-full" href={`/projects/${slide.projectSlug}/`}>{children}</Link>
          ) : (
            <div className="w-full h-full">{children}</div>
          );

        return (
          <div
            key={i}
            className={`hero-slide w-full h-full ${i === 0 ? "relative" : "absolute top-0 left-0 opacity-0"}`}
          >
            <SlideEl>
              <Image
                src={slide.image}
                alt={slide.imageAlt ?? slide.caption}
                width={2500}
                height={1412}
                className="w-full h-full object-cover"
              />
            </SlideEl>

            <div className="w-full absolute top-full left-0 flex items-center">
              {slide.caption && (
                <p className="flex items-center">
                  <span>Featured</span>
                  <span></span>
                  <span>{slide.caption}</span>
                </p>
              )}
              <Link className="ml-auto" href={`/projects/`}>
                Gallery
              </Link>
            </div>
          </div>
        );
      })}

      <nav className="flex items-center justify-center absolute z-10 bottom-0 w-full">
        <button>prev</button>
        <p className="flex items-center">
          <span>{1}</span>
          <span>--</span>
          <span>{6}</span>
        </p>
        <button>next</button>
      </nav>
    </div>
  );
};

export default HeroSlider;
