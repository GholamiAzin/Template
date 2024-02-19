import Image from './base/Image'
import icons from '../assets/Images/icons.png'

const Discount = () => {
  return (
    <div className="bg-orange-500 h-[200px] md:h-[170px] sm:h-[130px] w-full flex justify-between mb-4 bg-contain bg-no-repeat bg-center" style={{backgroundImage : `url(${icons})`}}>{/**background-image */}
      <div className='w-1/5 h-full flex sm:hidden'>
        <Image src={require('../assets/Images/left-image.png')}/>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <span className='text-white text-lg hidden sm:flex ml-2'>Get 50%  Off </span>
        <span className='text-white text-lg sm:hidden '>Get 50%  Off on </span>
        <span className='text-white text-lg sm:hidden'>Selected categories</span>
        <button className='text-rose-600 bg-white rounded-full px-2 text-xs font-semibold mt-4 sm:mt-0'>Shop Now</button>
      </div>
      <div className='w-1/5 h-full flex justify-end'>
        <Image src={require('../assets/Images/right-image.png')}/>
      </div>
    </div>
  )
}

export default Discount