import { HeroSlide } from "../../types/HeroSlide";
import Link from "next/link";

type HeroSlider = {
  slides: HeroSlide[];
};

const HeroSlider = ({ slides }: HeroSlider) => {
  return (
    <div>
      {slides.map((slide, i: number) => {
        const Wrapper = ({
          children,
        }: Readonly<{ children: React.ReactNode }>) =>
          slide.projectSlug ? (
            <Link href={`/projects/${slide.projectSlug}`}>{children}</Link>
          ) : (
            <div>{children}</div>
          );

        return (
          <Wrapper key={i}>
            <p>{slide.caption}</p>
            <img src={slide.image} alt="" />
            {slide.projectSlug}
          </Wrapper>
        );
      })}
    </div>
  );
};

export default HeroSlider;
