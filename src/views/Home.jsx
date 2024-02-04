import React, { createContext, useState } from 'react'
import PrimaryLayout from '../components/PrimaryLayout'
import Main from '../components/Main'
// import useModal from '../hooks/useModal'

export const CountVar = createContext({generalIndex:0, setGeneralIndex:()=>{},itemID:'', setItemID: ()=>{}, rateStar:0, setRateStar:()=>{},color:0,setColor:()=>{},productCost:0,setProductCost:()=>{},size:[],setSizeToDB:()=>{},count:0,increase:()=>{},decrease:()=>{},counter:0,setCounter:()=>{},increaseCounter:()=>{}, decreaseCounter:()=>{},addToCart:[],setAddToCart:()=>{}})
// cartOnPic:false, toggleCartOnPic:()=>{} ,
const Home = () => {
  const [itemID, setItemID] = useState('')
  const [productCost, setProductCost] = useState(0)
  const [color, setColor] = useState()//use in Size Component for 
  const [addToCart, setAddToCart] = useState([])
  const [rateStar, setRateStar] = useState(0)
  const [generalIndex, setGeneralIndex] = useState(0) //this state fill with item.productIndex in productCart for finding index
  // const [cartOnPic,toggleCartOnPic] = useModal(false)

  //counter is for add to cart
  const [counter, setCounter] = useState(0)
  const increaseCounter =()=>{
    setCounter(counter+1)
  }
  const decreaseCounter =()=>{
      if (counter>0) {
        
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
    <CountVar.Provider value={{generalIndex, setGeneralIndex,itemID, setItemID, rateStar, setRateStar,color,setColor,productCost,setProductCost,size,setSizeToDB,count,increase,decrease,counter,setCounter,increaseCounter,decreaseCounter,addToCart,setAddToCart}}>
    {/* cartOnPic,toggleCartOnPic, */}
      <PrimaryLayout>
        <Main/>
      </PrimaryLayout>
    </CountVar.Provider>
    </>
  )
}

export default Home