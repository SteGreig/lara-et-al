

const HeroBanner = ({headline}: {headline: string}) => {
  return (
    <div className="bg-primary bg-noise-30 ~pt-28/64 text-cream">
      <h1 className="text-[15vw] font-bold -tracking-wider leading-[0.63] container">{headline}</h1>
    </div>
  )
}

export default HeroBanner