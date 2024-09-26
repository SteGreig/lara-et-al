

const HeroBanner = ({headline}: {headline: string}) => {
  return (
    <div className="bg-primary bg-noise-30 pt-28 text-cream">
      <h1 className="text-8xl">{headline}</h1>
    </div>
  )
}

export default HeroBanner