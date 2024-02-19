import React from 'react'
import Logo from './base/Logo'
import NavItem from './base/NavItem'

const NavComponent = () => {
  return (
    <div className='flex w-full items-center mb-3 sm:justify-between'>
        <Logo/>
        <NavItem 
          parentClass={'flex items-center justify-between w-2/3 text-xs sm:hidden'}
          hamburgerClass={'hidden sm:flex'}
          categoriesClass={'flex gap-x-3 justify-start cursor-pointer '}
          accountClass={'flex gap-x-3 justify-end cursor-pointer'}
        />
    </div>
  )
}

export default NavComponent