import React from 'react'
import Header from '../components/Header'
import bigShop from '../assets/Images/happy_tiny_man_and_woman_with_shopping_bags_and_huge_gift_boxes.jpg'
import '../../src/index.css'
import SignInForm from '../components/base/SignInForm'

const SignIn = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
        <header className='w-full'>
            <Header/>
        </header>
        {/* <main className='w-full relative flex flex-col bg-contain bg-no-repeat bg-center h-screen items-center justify-center gap-y-2' style={{backgroundImage : `url(${bigShop})`}}> */}
        <main className='w-full flex flex-col bg-contain bg-no-repeat md:bg-[length:70%_40%] xl:bg-left xl:bg-[length:70%_90%] h-screen items-end sm:items-center md:items-center px-[10%] justify-center gap-y-2' style={{backgroundImage : `url(${bigShop})`}}>
          {/* <div className="absolute rounded-lg inset-0 bg-white opacity-50"></div> */}
          <SignInForm/>
        </main>
        {/* <footer className='w-full h-[40%]'> */}
            {/* <div className='w-full h-full relative bg-contain bg-repeat-x before:content-none before:inset-0 before:bg-gradient-to-b before:from-white before:from-[50%] before:to-orange-500 before:absolute ' style={{backgroundImage : `url(${icons})`}}></div> */}
            {/* <img src={require('../assets/Images/icons-croped.png')} alt="" className='w-full h-full bg-contain bg-repeat-x' /> */}
            {/* <div className='w-full h-full bg-contain bg-repeat-x ' style={{backgroundImage : `url(${icons})`}}></div> */}
        {/* </footer> */}
    </div>
  )
}

export default SignIn