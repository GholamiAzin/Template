
const Image = ({src,width,height,imageClass}) => {
  return (
    <>
        <img src={src} alt="" width={width} height={height} className={`${imageClass}`} />
    </>
  )
}
//className='w-[140px] h-[220px] '
export default Image