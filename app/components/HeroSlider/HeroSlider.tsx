"use client";

import { useState } from "react";
import { HeroSlide } from "../../types/HeroSlide";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity-utils";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import BtnArrow from "../Utils/BtnArrow";

type HeroSlider = {
  slides: HeroSlide[];
  heroHeadline?: string;
  heroSubline?: string;
};

const HeroSlider = ({ slides, heroHeadline, heroSubline }: HeroSlider) => {
  const [activeNum, setActiveNum] = useState<number>(1); // Initialize the state with 0
  const max = slides.length; // Set the maximum value

  const handleNext = () => {
    setActiveNum((prev) => (prev === max ? 1 : prev + 1)); // If current is max, go to 1, otherwise increment
  };

  const handlePrev = () => {
    setActiveNum((prev) => (prev === 1 ? max : prev - 1)); // If current is 0, go to max, otherwise decrement
  };

  return (
    <div className="hero-slider container h-[80dvh] max-h-[1100px] xl:h-auto flex">
      <div className="relative h-auto w-full">
        {/* HERO TEXT CONTENT */}
        {heroHeadline && (
          <div className="absolute bottom-0 left-0 z-10 ~p-6/20 mb-10 md:mb-6 2xl:mb-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 text-cream pointer-events-none">
            <p className="~text-3xl/7xl leading-none text-balance">
              {heroHeadline}
            </p>
            {heroSubline && <p className="~text-xl/3xl ~mt-2/4">{heroSubline}</p>}
          </div>
        )}

        {/* SLIDES */}
        {slides.map((slide, i: number) => {
          {
            /* Make slide a link if slide image is linked to a project, otherwise a div */
          }
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
              className={`hero-slide w-full h-full transition duration-500 ${i + 1 === activeNum ? "relative pointer-events-auto" : "absolute top-0 left-0 opacity-0 pointer-events-none"}`}
            >
              <SlideEl className="block w-full h-full after:absolute after:inset-0 after:pointer-events-none after:bg-gradient-to-t md:after:bg-gradient-to-tr after:from-black/60 after:via-transparent">
                <Image
                  src={urlFor(slide.image)
                    .width(2500)
                    .height(1412)
                    .fit("crop")
                    .url()}
                  alt={slide.imageAlt ?? slide.caption}
                  width={2500}
                  height={1412}
                  className="hero-slide-img w-full h-full object-cover transition duration-700"
                />
              </SlideEl>

              {/* Caption text underneath image */}
              <div className="w-full absolute top-full left-0 flex flex-col sm:flex-row sm:items-center mt-4">
                {slide.caption && (
                  <p className="flex items-center">
                    <span className="text-xs uppercase tracking-widest font-bold">
                      Featured
                    </span>
                    <span className="h-px w-4 sm:w-10 mx-2 bg-primary"></span>
                    <span className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">{slide.caption}</span>
                  </p>
                )}
                <BtnArrow className={`sm:ml-auto mt-2 sm:mt-0`} href={`/projects/`} label="Gallery" />
              </div>
            </div>
          );
        })}

        {/* Next/Prev Controls */}
        <nav className="hero-slider-nav flex items-center justify-center absolute z-10 bottom-0 w-full text-cream py-2 font-medium bg-gradient-to-t from-black/30">
          <button onClick={handlePrev} className="flex-1 p-4 group">
            <MdOutlineArrowBackIos className="ml-auto transition group-hover:scale-125 group-hover:-translate-x-1" />
          </button>
          <p className="flex items-center">
            <span>{activeNum}</span>
            <span className="h-px w-4 mx-1 bg-white"></span>
            <span>{max}</span>
          </p>
          <button onClick={handleNext} className="flex-1 p-4 group">
            <MdOutlineArrowForwardIos className="mr-auto transition group-hover:scale-125 group-hover:translate-x-1" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default HeroSlider;
