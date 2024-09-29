"use client";

import React, { useRef } from 'react';
// import { HiArrowLongRight } from "react-icons/hi2";
// import { HiArrowLongLeft } from "react-icons/hi2";
import LongArrow from '../LongArrow/LongArrow';

const Slider = ({ children }: Readonly<{ children: React.ReactNode }>) => {

  const sliderRef = useRef<HTMLDivElement | null>(null); // Ref to the slider container

  const scrollNext = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.firstChild as HTMLDivElement | null;
      if (itemWidth) {
        sliderRef.current.scrollBy({ left: itemWidth.offsetWidth, behavior: 'smooth' }); // Scroll right by one item width
      }
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.firstChild as HTMLDivElement | null;
      if (itemWidth) {
        sliderRef.current.scrollBy({ left: -itemWidth.offsetWidth, behavior: 'smooth' }); // Scroll left by one item width
      }
    }
  };

  return (
    <div>
      <div ref={sliderRef} className="flex gap-6 overflow-x-auto hide-scrollbar snap-mandatory snap-x scroll-smooth">{children}</div>
      <nav className='w-full flex justify-center xs:justify-end px-4 mt-4'>
        <button className='px-2 py-4 text-4xl hover:brightness-50 transition' onClick={scrollPrev}>
          <LongArrow direction='left' />
        </button>
        <button className='px-2 py-4 text-4xl hover:brightness-50 transition' onClick={scrollNext}>
          <LongArrow />
        </button>
      </nav>
    </div>
  );
};

export default Slider;
