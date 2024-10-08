"use client";

import { useState } from "react";
import pages from "@/sanity/schemas/pages";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";

const SlideoutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Trigger */}
      <button
        onClick={toggleMenu}
        className="aspect-square bg-primary rounded-full text-cream inline-flex ~/2xl:~w-[2.375rem]/[3.23rem] group hover:bg-primary-600 transition duration-300"
      >
        <div className="flex flex-col justify-between items-end transition m-auto w-[39%] h-[26%]">
          <span className="h-px w-full rounded bg-cream block"></span>
          <span className="h-px w-3/4 group-hover:w-full transition-all rounded bg-cream block"></span>
          <span className="h-px w-5/12 group-hover:w-full transition-all rounded bg-cream block"></span>
        </div>
      </button>

      {/* Off-canvas menu */}
      <div
        className={`${isOpen ? "shadow-2xl translate-x-0" : "translate-x-full"} fixed top-0 right-0 h-screen w-full max-w-screen-xs bg-primary bg-noise-30 z-50 transition duration-300`}
      >
        <div className="flex items-center ~py-3/4 pr-spacing">
          <span className="h-px flex-1 bg-cream"></span>
          <button className="~/2xl:~w-[2.375rem]/[3.23rem] aspect-square bg-cream rounded-full text-primary text-lg flex justify-center items-center group" onClick={toggleMenu}>
            <AiOutlineClose className="group-hover:scale-125 transition" />
          </button>
        </div>
        <nav className="">
          <ul className="flex flex-col ~px-8/14">
            {pages.map((page, i) => (
              <li key={i}>
                <Link
                  onClick={toggleMenu}
                  className="text-cream ~text-4xl/6xl ~py-3/5 flex gap-2 items-end group leading-none transition-all duration-300 menu-item"
                  href={`/${page.slug}/`}
                >
                  <span>{page.menuTitle}</span>
                  <GoArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-90 group-hover:translate-x-0 transition ~text-2xl/5xl" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop for when menu is open */}
      <div
        className={`${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed inset-0 bg-primary-900/80 z-40 backdrop-blur-sm transition duration-1000`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default SlideoutMenu;
