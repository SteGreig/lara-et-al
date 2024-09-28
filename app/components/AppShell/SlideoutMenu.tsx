"use client";

import { useState } from "react";
import pages from "@/sanity/schemas/pages";
import Link from "next/link";

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
        className="aspect-square bg-primary rounded-full text-cream inline-flex ~/2xl:~w-[2.375rem]/[3.75rem] ~/2xl:~px-3/[1.15rem] ~/2xl:~py-3/[1.3rem] group hover:shadow-lg hover:shadow-primary/20 transition duration-300"
      >
        <div className="flex flex-col justify-between items-end w-full h-full transition">
          <span className="h-[2px] w-full rounded bg-cream block"></span>
          <span className="h-[2px] w-3/4 group-hover:w-full transition-all rounded bg-cream block"></span>
          <span className="h-[2px] w-5/12 group-hover:w-full transition-all rounded bg-cream block"></span>
        </div>
      </button>

      {/* Off-canvas menu */}
      <div className={`${isOpen ? "opacity-100 block" : "opacity-0 hidden"}`}>
        <button className="" onClick={toggleMenu}>
          X
        </button>
        <nav className="fixed top-0 right-0 h-screen w-11/12 max-w-screen-xs bg-primary bg-noise-30 z-50">
          <ul>
            {pages.map((page) => (
              <li>
                <Link className="text-cream text-6xl" href={`/${page.slug}/`}>{page.menuTitle}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop for when menu is open */}
      <div
        className="fixed inset-0 bg-primary-900/90 z-40 backdrop-blur-sm transition hidden"
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default SlideoutMenu;
