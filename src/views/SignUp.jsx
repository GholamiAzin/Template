import React from 'react'
import Register from '../components/base/Register'
import Header from '../components/Header'
import bigShop from '../assets/Images/happy_tiny_man_and_woman_with_shopping_bags_and_huge_gift_boxes.jpg'


const SignUp = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
        <header className='w-full'>
            <Header/>
        </header>
        <main className='w-full flex flex-col bg-contain md:bg-[length:70%_40%] xl:bg-left xl:bg-[length:70%_90%] md:bg-[center_top] bg-no-repeat h-screen items-end sm:items-center md:items-center px-[10%] justify-center sm:justify-start gap-y-2' style={{backgroundImage : `url(${bigShop})`}}>
          <Register/>
        </main>
    </div>
    // <div className='w-full flex flex-col bg-contain bg-no-repeat h-screen items-end px-[10%] justify-center gap-y-2' style={{backgroundImage : `url(${bigShop})`}}>
    //   <Register/>
    // </div>

  )
}

export default SignUp