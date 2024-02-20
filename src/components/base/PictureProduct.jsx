import { useContext, useEffect, useReducer, useState } from "react"
import Image from "./Image"
import Svg from "./Svg"
import { CountVar } from "../../views/Home"
import { reducer, updateReducer } from "../../reducers/reducer"
import { getProduct, updateProduct } from "../../services/productsServices"


const PictureProduct = ({src,picIndex,pictureProductId,picClass,isOpen,openCart}) => {

  const [state, setState] = useState(false)
  const{increase,decrease,list,setGeneralIndex,setAddToCart,addToCart} = useContext(CountVar)
  const [showSvg, setShowSvg] = useState(false)
  const [stateUpdate, dispatchUpdate] = useReducer(updateReducer,list)
  // const [stateDelete, dispatchDelete] = useReducer(reducer,addToCart)
  const [isAdd, setIsAdd] = useState({})
  // const [newAddToCart, setNewAddToCart] = useState()

  // const [stateAddToCart, setStateAddToCart] = useState(addToCart)
  // console.log('list[picIndex-1]?.isAddToCart',list[picIndex-1]?.isAddToCart);
  
  
  useEffect(() => {//it is for running the second ternary to check if an item is deleted bg-green will show on image without any mouseEnteror mouseLeave 
    const fetchProduct = async ()=>{
      const data = await getProduct(pictureProductId)
      setIsAdd(data.data)
    }
    fetchProduct()
  }, [isAdd])  
  
  // useEffect(() => {
  //   const data = localStorage.getItem('addToCart_updatedData')
  //   const jsonData = JSON.parse(data)
  //   if( jsonData !== addToCart){
  //     console.log('addToCart',addToCart);
  //     setAddToCart(jsonData)
  //   }
  //   else{
  //     console.log('hi PictureProduct');
  //   }
  // }, [addToCart])

//   useEffect(() => {
//     const data = localStorage.getItem('addToCart_updatedData')
//     const jsonData = JSON.parse(data)
//     if(jsonData !== null){
//      setNewAddToCart(jsonData)
//      }
//      else{
//          setNewAddToCart([])
//      }
//  }, [newAddToCart])

//   useEffect(() => {
//   const data = localStorage.getItem('addToCart_updatedData')
//   setAddToCart(JSON.parse(data))
// }, [addToCart])

  const handleColor=()=>{
    state?decrease():increase()
  }
  const handleSvg = () =>{
    setShowSvg(!showSvg)
  }
//callback for get index of Size component
  // const getIndex = (index)=>{
  //   setIndex(index)
  // }

  //set an index for each cart individualy in this callback function for open the modal in Products Components
  const handleModal =(cartIndex)=>{
    setGeneralIndex(cartIndex)
  }

  const updateList =async()=>{
    const data = await getProduct(pictureProductId)
    const newData = await updateProduct({...data.data,isAddToCart:false},pictureProductId)
    dispatchUpdate({type:'update',data:newData.data})
    // console.log('newData',newData.data);
  }

  const deleteItem = async()=>{
    updateList()
    // const data = await getProduct(pictureProductId)
    // console.log('deleteStateIndex',deleteStateIndex);
    // const itemIndex = addToCart.findIndex((item)=>{return item.id == pictureProductId})
    // addToCart.splice(itemIndex , 1)
    // handleSvg()
    // setShowSvg(false)

    setAddToCart((prevCart) => prevCart.filter((item) => item.id !== pictureProductId));
    // setAddToCart(addToCart)
    localStorage.setItem('addToCart_updatedData',JSON.stringify(addToCart))
    // console.log('addToCart',addToCart);
    // dispatchDelete({type:'delete',data:data.data})
    // const itemIndex = addToCart.findIndex((item)=>{return item.id == pictureProductId})
    // // console.log('itemIndex',itemIndex);
    // addToCart.map((product)=>{
    //   if (pictureProductId == product.id) {
    //     addToCart.splice(itemIndex,1)
    //   }
    // })
    // console.log('addToCart in deleteItem : ',addToCart);
  }

  return (
    <>
    <div className={`${picClass} flex relative`} onMouseEnter={handleSvg} onMouseLeave={()=>setShowSvg(false)}>
        {/* isOpen tells that if it is on modal then it doesnt have any hover things  */}
        {!isOpen?
              //it checks if the item is added to AddToCart it will set the green opacity and the trash-can svg
              isAdd?.isAddToCart ?
              //item has added to AddToCart
              <><Image src={src} imageClass={"w-full h-full"}/>
              {/* for hover effect over the imege */}
              <div className="absolute rounded-lg inset-0 bg-green-600 opacity-25"></div>
              {/* the trash icon over the image */}
              <div className="absolute top-3 right-3 cursor-pointer  " onClick={()=>{deleteItem()}}>
                <Svg myClass={"top-1 right-1 absolute bg-rose-500"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="white" className="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                </Svg>
              </div>
              {/* the check icon shows over on image */}
                <Svg myClass={'top-[45%] right-[45%] absolute bg-white'} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="lightGreen" className="bi bi-check2-circle" viewBox="0 0 16 16">
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                    </svg>
                </Svg>
                </> :
              //item is not into AddToCart and it has the hover effect and heart and cart svg on it
              <><Image src={src} imageClass={"w-full h-full"}/>
                {/* for hover effect over the imege */}
                <div className="absolute rounded-lg inset-0 hover:bg-black hover:opacity-25"></div>
                {/* the heart over the image */}
                <div className="absolute top-3 right-3 cursor-pointer  " onClick={()=>{ return setState(!state) , handleColor()}}>
                  {/**if the state is true means user clicked on a heart and it turns red */}
                  {state?<Svg myClass={"top-1 right-1 absolute bg-white"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="red" className="bi bi-suit-heart" viewBox="0 0 16 16">
                          <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                      </svg>
                  </Svg>: 
                  //the state is false so user does not click on a heart and it is gray
                  <Svg myClass={"top-1 right-1 absolute bg-white"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" className="bi bi-suit-heart" viewBox="0 0 16 16">
                          <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                      </svg>
                  </Svg>}
                </div>
                {/* the cart icon shows over on hover */}
                  {showSvg?<Svg myClass={'top-[45%] right-[45%] cursor-pointer absolute bg-white'} svgOnClick={()=>{return openCart(),handleModal(picIndex)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" className="bi bi-cart2" viewBox="0 0 16 16">
                          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>
                  </Svg>:null}</>:
                  //it is the image in modal that does not have any hover
              <><Image src={src} imageClass={"w-full h-full  "}/></> 
      }
          {/* click on cart icon opens the modal */}
        {/* {createPortal(
          <Modal sizeIndex={index} id={pictureProductId} isOpen={cartOnPic} toggleOpen={toggleCartOnPic} isCartOnPic={true} positionModalContainer={"justify-end items-start"} positionModal={'w-[30%] h-[95%] justify-between flex-wrap flex-row-reverse lg:justify-between lg:flex lg:w-[40%] md:justify-between md:flex md:w-[40%] sm:justify-between sm:flex sm:w-[70%]'} positionModalHeader={'items-start'} positionModalContent={''}>
            <ProductCart isOpen={true} productCartId={pictureProductId} starRate={cachedList[pictureProductId-1]?.rate} src={cachedList[pictureProductId-1]?.url} cost={cachedList[pictureProductId-1]?.cost} productName={cachedList[pictureProductId-1]?.name}
        material={cachedList[pictureProductId-1]?.material} productClass={'w-[60%] flex flex-col rounded md:w-[65%] sm:w-full'} pictureProductClass={'md:w-full sm:w-[60%]'}/>
            <HandleCount/>
            <Size onClick={getIndex}/>
            <DeliveryPolicy DeliveryPolicyClass={'mt-[15%] md:mt-0'}/>
          </Modal>
        ,document.body)} */}
    </div>
    </>
  )
}

export default PictureProduct