
const Svg = ({children ,myClass,svgOnClick}) => {
  return (
    <div className={` w-5 h-5 rounded-full flex justify-center items-center ${myClass}`} onClick={svgOnClick}>{/**should set onClick on this div */}
        {children}
    </div>
  )
}

export default Svg