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
import ProductCartInModal from "./ProductCartInModal";

const Products = () => {
  const {generalIndex,list,setList} = useContext(CountVar)
  const [sizeindex, setIndex] = useState(0)//sizeIndex is for setting size in modal & setIndex is for setting it with getIndex callback fn
  const[cartOnPic,toggleCartOnPic] = useModal(false)


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

  //callback for get index of Size component
  const getIndex = (index)=>{
    setIndex(index)
    // console.log('index in products',index);
  } 


const setFn=()=>{
  toggleCartOnPic()//set isOpen true or false for send it to modal to open and close it
}

  return (
      <div className="w-full flex flex-wrap justify-between gap-y-4">
        {list.map((item)=>{//for show all the products in index page
            return (
                <ProductCart
                  checkIsModal={false}//if its true it means modal is open so stars shouldnt change and it drills  to star component
                  // cartIndex={item.productIndex} //it send to pictureProduct to set generalIndex
                  onClickSvg={()=>setFn()} //onclicksvg send to pictureproduct for open modal
                  item={item}//for sending it to Star Component for changing rateStar 
                  pictureProductClass={'w-full h-2/3 md:w-[60%] sm:w-[60%]'} 
                  explanationProductClass={'w-full md:w-[80%] sm:w-[90%] '} 
                  productClass={'w-[21%] flex flex-col rounded md:items-center md:w-[40%] md:p-3 sm:w-[50%] sm:p-3 sm:items-center'} 
                  // productCartId={item.id} 
                  // key={item.id} 
                  // src={item.url} 
                  // productName={item.name}
                  // material={item.material} 
                  // cost={item.cost}  
                />
            )
          })
        }
        {list?.map((item,index)=>{//create one modal with 8 different product
            if(item?.id === generalIndex){//if id of each product (which set in pictureProduct) is equal to the id, modal will open
              return (createPortal(
              <Modal 
                item={item} //for sending it to Modal Component for changing counterProduct and size 
                sizeIndex={sizeindex} // send to modal component for update size in size list with index
                id={item.id} 
                isOpen={cartOnPic} //send to modal so if its true modal shows unless it returns null
                toggleOpen={toggleCartOnPic} 
                isCartOnPic={true} //is for modal that has add to cart and cancle button if it false it means this modal is cart on navitem
                positionModalContainer={"justify-end items-start"} 
                positionModal={'w-[30%] h-[95%] justify-between flex-row-reverse lg:justify-between lg:flex lg:w-[40%] lgh:h-[70%] md:justify-between md:flex md:w-[40%] md:h-[70%] sm:justify-between sm:flex sm:w-[70%] sm:h-[70%]'} 
                positionModalHeader={'items-start'} 
              >
                <ProductCartInModal
                  checkIsModal={true}//if its true it means modal is open so stars shouldnt change and it drills  to star component
                  isOpen={true}//isOpen send to pictureProduct so product doesnt have any hover things in modal
                  itemData={item}//for sending it to Star Component for changing rateStar 
                  productClass={'w-[60%] flex flex-col rounded md:w-[65%] sm:w-full'} 
                  pictureProductClass={'md:w-full sm:w-[60%]'}
                />
              <HandleCount/>{/* number of each product that user choose */}
              <Size onClick={getIndex}/>{/* call back fn that get index from size list in size component and set sizeIndex in it and send it to modal for update list*/}
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