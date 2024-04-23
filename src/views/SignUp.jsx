import React from 'react'
import { NavLink } from 'react-router-dom'
import Register from '../components/base/Register'
import Header from '../components/Header'
import bigShop from '../assets/Images/happy_tiny_man_and_woman_with_shopping_bags_and_huge_gift_boxes.jpg'


const SignUp = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
        <header className='w-full'>
            <Header/>
        </header>
        <main className='w-full flex flex-col bg-contain bg-no-repeat h-screen items-end px-[10%] justify-center gap-y-2' style={{backgroundImage : `url(${bigShop})`}}>
          <Register/>
        </main>
    </div>
    // <div className='w-full flex flex-col bg-contain bg-no-repeat h-screen items-end px-[10%] justify-center gap-y-2' style={{backgroundImage : `url(${bigShop})`}}>
    //   <Register/>
    // </div>

  )
}

export default SignUp