import React from 'react'
import NavComponent from './NavComponent'
import Discount from './Discount'
import Products from './Products'
const Main = () => {
  
  return (
    <div className='bg-gray-100 w-4/6 px-6 py-3 h-fit xl:h-fit xl:w-[80%] lg:h-screen lg:w-[80%] md:w-5/6 md:h-fit sm:px-3 sm:py-1 sm:w-full sm:h-fit'>
        <NavComponent/>
        <Discount/>
        <Products/>
    </div>
  )
}

export default Main