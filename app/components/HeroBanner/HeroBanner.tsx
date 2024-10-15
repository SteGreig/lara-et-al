

const HeroBanner = ({headline}: {headline: string}) => {
  return (
    <div className="bg-primary bg-noise-30 ~pt-20/40 text-cream">
      <h1 className="text-[13vw] font-bold -tracking-wider leading-[1.2] container">{headline}</h1>
    </div>
  )
}

export default HeroBanner