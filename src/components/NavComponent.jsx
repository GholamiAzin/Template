import React from 'react'
import Logo from './base/Logo'
import NavItem from './base/NavItem'

const NavComponent = () => {
  return (
    <div className='flex w-full items-center mb-3 sm:justify-between'>
        <Logo/>
        <NavItem/>
    </div>
  )
}

export default NavComponent