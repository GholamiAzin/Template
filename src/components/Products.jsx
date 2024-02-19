// import UseFetch from "../hooks/UseFetch";
import ProductCart from "./ProductCart"
import {getAllProducts} from '../services/productsServices'
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CountVar } from "../views/Home";
import Modal from "./base/Modal";
import HandleCount from "./base/HandleCount";
import Size from "./base/Size";
import DeliveryPolicy from "./base/DeliveryPolicy";
import useModal from "../hooks/useModal";
// import { storage } from "../config/firebase"
// import { ref ,listAll ,getDownloadURL } from "firebase/storage";

const Products = () => {
  // const [list, setList] = useState([])
  const {itemID,generalIndex,list,setList} = useContext(CountVar)
  const [sizeindex, setIndex] = useState(0)
  const[cartOnPic,toggleCartOnPic] = useModal()
  // const [itemInModal, setItemInModal] = useState({})



  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const {data : dataProducts} = await getAllProducts()
        setList(dataProducts)
      } catch (error) {
        console.log('error',error);
      }
    }
    fetchData()
  }, [])
  // const [cachedList] = UseFetch([])
  
  // const imageListRef = ref(storage ,'Images/' )//for get data from storage
  // const [imageList, setImageList] = useState([])//for get data from storage


  //this is for getting url from storage 

  // useEffect(() => {
  //   listAll(imageListRef).then((response)=>{
  //     response.items.forEach((item)=>{
  //       getDownloadURL(item).then((url)=>{
  //         setImageList((prev)=>([...prev ,url ]))
  //       })
  //     })
  //   })
  // }, [])

  //callback for get index of Size component
  const getIndex = (index)=>{
    setIndex(index)
    // console.log('index in products',index);
  } 

  // console.log('index',index);
  
  // const handleOpen =(bool)=>{
  //     // setCallBool(bool)
  //     // if (callBool) {
  //     //   console.log('salam');
  //     // }
  //     // console.log('callBool',callBool);

  //   // return callBackBool
  //   // console.log('bool',bool);
  // }
const setFn=(props)=>{
  toggleCartOnPic()
  // setItemInModal(props)
}
  return (
      <div className="w-full flex flex-wrap justify-between gap-y-4">
        {
          list.map((item)=>{
            return (
              item.isAddToCart ? //if the item added into addToCart in Modal Before it will show
                <ProductCart
                  checkIsModal={false} 
                  cartIndex={item.productIndex} 
                  // onClickSvg={()=>setFn(item)} //for open and close modal
                  // item={item}//for sending it to Star Component for changing rateStar 
                  pictureProductClass={'w-full h-2/3 md:w-[60%] sm:w-[60%]'} 
                  explanationProductClass={'w-full md:w-[80%] sm:w-[90%] '} 
                  productClass={'w-[21%] flex flex-col rounded md:items-center md:w-[40%] md:p-3 sm:w-[50%] sm:p-3 sm:items-center'} 
                  productCartId={item.id} 
                  key={item.id} 
                  src={item.url} 
                  productName={item.name}
                  material={item.material} 
                  cost={item.cost}  />:
                <ProductCart
                  checkIsModal={false} 
                  cartIndex={item.productIndex} 
                  onClickSvg={()=>setFn(item)} //for open and close modal
                  // item={item}//for sending it to Star Component for changing rateStar 
                  pictureProductClass={'w-full h-2/3 md:w-[60%] sm:w-[60%]'} 
                  explanationProductClass={'w-full md:w-[80%] sm:w-[90%] '} 
                  productClass={'w-[21%] flex flex-col rounded md:items-center md:w-[40%] md:p-3 sm:w-[50%] sm:p-3 sm:items-center'} 
                  productCartId={item.id} 
                  key={item.id} 
                  src={item.url} 
                  productName={item.name}
                  material={item.material} 
                  cost={item.cost}  />

            )
          })
        }
        {list.map((item,index)=>{
          // if(callBool && index == list[index].productIndex - 1){
            if(index == generalIndex - 1){
            return (createPortal(
              <Modal 
                item={item} //for sending it to Modal Component for changing counterProduct and size 
                sizeIndex={sizeindex} 
                id={list[index].id} 
                isOpen={cartOnPic} 
                toggleOpen={toggleCartOnPic} 
                isCartOnPic={true} 
                positionModalContainer={"justify-end items-start"} 
                positionModal={'w-[30%] h-[95%] justify-between flex-row-reverse lg:justify-between lg:flex lg:w-[40%] md:justify-between md:flex md:w-[40%] sm:justify-between sm:flex sm:w-[70%] sm:h-[60%]'} 
                positionModalHeader={'items-start'} 
                positionModalContent={''}
              >
                  <ProductCart
                    checkIsModal={true}
                    isOpen={true}
                    item={item}//for sending it to Star Component for changing rateStar 
                    productCartId={list[index].id} 
                    starRate={item?.rate} 
                    src={item?.url} 
                    cost={item?.cost} 
                    productName={item?.name}
                    material={item?.material} 
                    productClass={'w-[60%] flex flex-col rounded md:w-[65%] sm:w-full'} 
                    pictureProductClass={'md:w-full sm:w-[60%]'}
                    explanationProductClass={''}
                  />
                  <HandleCount/>
                  <Size onClick={getIndex}/>
                  <DeliveryPolicy DeliveryPolicyClass={'mt-[15%] md:mt-2 sm:mt-2'}/>
              </Modal>
            ,document.body))
          }
        })
        }
      </div>
      
  )
}

export default Products