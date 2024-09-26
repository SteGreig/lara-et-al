
const Slider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <div className="flex">
        {children}
      </div>
      <nav>
        <button>left</button>
        <button>right</button>
      </nav>
    </div>
  )
}

export default Slider