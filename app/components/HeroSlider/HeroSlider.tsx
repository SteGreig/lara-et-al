import { HeroSlide } from "../../types/HeroSlide";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

type HeroSlider = {
  slides: HeroSlide[];
  heroHeadline?: string;
  heroSubline?: string;
};

const HeroSlider = ({ slides, heroHeadline, heroSubline }: HeroSlider) => {
  return (
    <div className="hero-slider container h-[80vh] max-h-[1100px] xl:h-auto flex">
      <div className="relative h-auto w-full">
        {/* HERO TEXT CONTENT */}
        {heroHeadline && (
          <div className="absolute bottom-0 left-0 z-10 ~p-6/20 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 text-cream pointer-events-none">
            <p className="~text-3xl/7xl leading-none text-balance">
              {heroHeadline}
            </p>
            {heroSubline && <p className="~text-xl/3xl mt-4">{heroSubline}</p>}
          </div>
        )}

        {/* SLIDES */}
        {slides.map((slide, i: number) => {

          { /* Make slide a link if slide image is linked to a project, otherwise a div */}
          const SlideEl = ({
            className,
            children,
          }: Readonly<{ className: string; children: React.ReactNode }>) =>
            slide.projectSlug ? (
              <Link
                className={className}
                href={`/projects/${slide.projectSlug}/`}
              >
                {children}
              </Link>
            ) : (
              <div className={className}>{children}</div>
            );

          return (
            <div
              key={i}
              className={`hero-slide w-full h-full ${i === 0 ? "relative" : "absolute top-0 left-0 opacity-0"}`}
            >
              <SlideEl className="block w-full h-full after:absolute after:inset-0 after:pointer-events-none after:bg-gradient-to-tr after:from-black/40 after:via-transparent">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt ?? slide.caption}
                  width={2500}
                  height={1412}
                  className="hero-slide-img w-full h-full object-cover transition duration-700"
                />
              </SlideEl>

              {/* Caption text underneath image */}
              <div className="w-full absolute top-full left-0 flex items-center mt-4">
                {slide.caption && (
                  <p className="flex items-center">
                    <span className="text-xs uppercase tracking-widest font-bold">
                      Featured
                    </span>
                    <span className="h-px w-10 mx-2 bg-primary"></span>
                    <span className="text-sm">{slide.caption}</span>
                  </p>
                )}
                <Link className="ml-auto" href={`/projects/`}>
                  Gallery
                </Link>
              </div>
            </div>
          );
        })}

        {/* Next/Prev Controls */}
        <nav className="hero-slider-nav flex items-center justify-center absolute z-10 bottom-0 w-full text-cream py-1 font-medium bg-gradient-to-t from-black/30">
          <button className="flex-1 p-4 group">
            <MdOutlineArrowBackIos className="ml-auto transition group-hover:scale-125 group-hover:-translate-x-1" />
          </button>
          <p className="flex items-center">
            <span>{1}</span>
            <span className="h-px w-4 mx-1 bg-white"></span>
            <span>{6}</span>
          </p>
          <button className="flex-1 p-4 group">
            <MdOutlineArrowForwardIos className="mr-auto transition group-hover:scale-125 group-hover:translate-x-1" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default HeroSlider;
