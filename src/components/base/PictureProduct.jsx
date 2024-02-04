import { useContext, useState } from "react"
import Image from "./Image"
import Svg from "./Svg"
import { CountVar } from "../../views/Home"
import useModal from "../../hooks/useModal"
import { createPortal } from "react-dom"
import Modal from "./Modal"
import ProductCart from "../ProductCart"
import HandleCount from "./HandleCount"
import UseFetch from "../../hooks/UseFetch"
import Size from "./Size"
import DeliveryPolicy from "./DeliveryPolicy"


const PictureProduct = ({src,picIndex,pictureProductId,picClass,isOpen,openCart}) => {

  const [state, setState] = useState(false)
  const{increase,decrease,setItemID,generalIndex,setGeneralIndex} = useContext(CountVar)
  const [showSvg, setShowSvg] = useState(false)
  // const[cartOnPic,toggleCartOnPic] = useModal()
  const [index, setIndex] = useState(0)


  // const [cachedList] = UseFetch([])

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

  //set an index for each cart individualy in this callback function for open the modal
  const handleModal =(cartIndex)=>{
    // console.log('item',item);
    // setItemID(pictureProductId)
    setGeneralIndex(cartIndex)
    // toggleCartOnPic(!cart)
    console.log("cartIndex",cartIndex);
    // return cartIndex
  }
  // console.log('rate',cachedList[pictureProductId-1]?.rate);

  return (
    <>
    <div className={`${picClass} flex relative`} onMouseEnter={handleSvg} onMouseLeave={()=>setShowSvg(false)}>
        {/* isOpen tells that if it is on modal then it doesnt have any hover things  */}
        {!isOpen?
            <><Image src={src} imageClass={"w-full h-full"}/>
            {/* for hover effect over the imege */}
            <div className="absolute rounded-lg inset-0 hover:bg-black hover:opacity-25"></div>
            {/* the heart over the image */}
            <div className="absolute top-3 right-3 cursor-pointer  " onClick={()=>{ return setState(!state) , handleColor()}}>
              {state?<Svg myClass={"top-1 right-1 absolute"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="red" className="bi bi-suit-heart" viewBox="0 0 16 16">
                      <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                  </svg>
              </Svg>: <Svg myClass={"top-1 right-1 absolute"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" className="bi bi-suit-heart" viewBox="0 0 16 16">
                      <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                  </svg>
              </Svg>}
            </div>
            {/* the cart icon shows over on hover */}
              {showSvg?<Svg myClass={'top-[45%] right-[45%] cursor-pointer absolute'} svgOnClick={()=>{return openCart(),handleModal(picIndex)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" className="bi bi-cart2" viewBox="0 0 16 16">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
              </Svg>:null}</> :
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