import React, { createContext, useState } from 'react'
import PrimaryLayout from '../components/PrimaryLayout'
import Main from '../components/Main'

export const CountVar = createContext({rateStar:0, setRateStar:()=>{},color:0,setColor:()=>{},productCost:0,setProductCost:()=>{},size:[],setSizeToDB:()=>{},count:0,increase:()=>{},decrease:()=>{},counter:1,setCounter:()=>{},increaseCounter:()=>{}, decreaseCounter:()=>{},addToCart:[],setAddToCart:()=>{}})

const Home = () => {
  const [productCost, setProductCost] = useState(0)
  const [color, setColor] = useState(0)
  const [addToCart, setAddToCart] = useState([])
  const [rateStar, setRateStar] = useState(0)

  //counter is for add to cart
  const [counter, setCounter] = useState(1)
  const increaseCounter =()=>{
    setCounter(counter+1)
  }
  const decreaseCounter =()=>{
      if (counter>=1) {
        
        setCounter(counter-1)
      }
  } 
  //size is for modal on pic and add to cart to database
  const [size, setSizeToDB] = useState(['S','M','L','XL','XXL'])
  // const setSizeToDB=()=>{
  //   setSize(size)
  // }
  //count is for wish list
  const [count, setCount] = useState(0)
  const increase=()=>{
    setCount(count+1)
  }
  const decrease=()=>{      
      setCount(count-1)
  }
  return (
    <>
    <CountVar.Provider value={{rateStar, setRateStar,color,setColor,productCost,setProductCost,size,setSizeToDB,count,increase,decrease,counter,setCounter,increaseCounter,decreaseCounter,addToCart,setAddToCart}}>
      <PrimaryLayout>
        <Main/>
      </PrimaryLayout>
    </CountVar.Provider>
    </>
  )
}

export default Home