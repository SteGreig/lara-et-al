

const HeroBanner = ({headline}: {headline: string}) => {
  return (
    <div className="bg-primary bg-noise-30 ~pt-20/40 text-cream">
      <h1 className="text-[12vw] font-bold -tracking-wider leading-[.9] container">{headline}</h1>
    </div>
  )
}

export default HeroBanner