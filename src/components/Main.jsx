import React from 'react'
import NavComponent from './NavComponent'
import Discount from './Discount'
import Products from './Products'
const Main = () => {
  
  return (
    <div className='bg-gray-100 w-full px-6 py-3 '>
        <NavComponent/>
        <Discount/>
        <Products/>
    </div>
  )
}

export default Main