import { useContext, useEffect, useState } from "react"
import IconSpan from "./base/IconSpan"
import { CountVar } from "../views/Home"
import { logInData } from "../App"

const Footer = () => {
  const {count,setCount} = useContext(CountVar)
  const {logedInUser}=useContext(logInData)
  const [footerLength, setFooterLength] = useState(0)

  
  useEffect(() => {
    if (logedInUser?.id) {
        setCount(logedInUser?.wishList?.length)
        setFooterLength(logedInUser?.basketList?.length)
    }else{
      setFooterLength(0)
      setCount(0)
    }
  }, [logedInUser?.wishList,logedInUser?.basketList])
  
  const calculateCost=()=>{
    let sum = 0
    if (logedInUser?.id) {
      // if addToCart is not empty then map over it and calculate the total price
      if (logedInUser?.basketList?.length !== 0) {
        logedInUser?.basketList?.map((item)=>{
          sum += item?.counterProduct*item?.cost
        })
    }
    }
  return sum
}
    
  return (
    <div className="flex bg-orange-500 w-full px-2 py-1 justify-between text-white ">
        <div className="flex justify-between w-1/3 sm:mr-4">
          {/* the number of items that added in cart */}
            <IconSpan parentDivClass={'gap-x-2'} explainSpanClass={'ml-2'} variables={`${footerLength}`} text={`Items added to Cart`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
            </IconSpan>
            {/* the number of items that user liked */}
            <IconSpan parentDivClass={'gap-x-2'} explainSpanClass={'ml-2'} variables={count} text={`Wish list`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
            </IconSpan>
        </div>
        <div className="flex items-center">
          {/* total price of items in cart */}
            <IconSpan parentDivClass={'gap-x-2'} variables={`${calculateCost()}$`} text={''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
            </IconSpan>
        </div>
    </div>
  )
}

export default Footer