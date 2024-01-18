import logo from '../../assets/SVG/logo.svg'
import Image from './Image'

const Logo = () => {
  return (
    <div className='flex items-center text-xl font-semibold w-1/3 gap-x-4'>
        {/* <img src={require('../../assets/SVG/logo.svg')} alt="" /> */}
        <Image src={logo} width={'40px'} height={'40px'}/>
        {/* <img width={40} height={40} src={logo} alt="" /> */}
        <p  className='text-orange-400 sm:hidden'>Minimal <span className='text-rose-500'>Shop</span>ping</p>
    </div>
  )
}

export default Logo