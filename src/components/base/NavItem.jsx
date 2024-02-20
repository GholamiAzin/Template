import { createPortal } from "react-dom"
import IconSpan from "./IconSpan"
import Modal from "./Modal"
import useModal from "../../hooks/useModal"
import ProductCart from "../ProductCart"
import { useContext, useEffect } from "react"
import { CountVar } from "../../views/Home"
import OrderSpan from "./OrderSpan"
import DeliveryPolicy from "./DeliveryPolicy"

const NavItem = ({parentClass,hamburgerClass,categoriesClass,accountClass}) => {
  const [openCart,toggleOpenCart] = useModal(false)
  const [isHamburgerMenu,toggleIsHamburgerMenu] = useModal(false)
  const {addToCart,setAddToCart}=useContext(CountVar)
  const address={
    name:'Wade  John Smith',
    city:'New Zealand',
    street:'2nd Cross',
    alley:'Cross raod',
    NO:'Po 25698',
    country:'United States'
  }

  // useEffect(() => {
  //   const data = localStorage.getItem('addToCart_updatedData')
  //   const jsonData = JSON.parse(data)
  //   if( jsonData !== addToCart){
  //     console.log('addToCart',addToCart);
  //     setAddToCart(jsonData)
  //   }
  //   else{
  //     console.log('hi NavItem');
  //   }
  // }, [addToCart])
  
  // console.log('addToCart',typeof addToCart);
  const numberOfAddedProducts=()=>{
    let sum = 0
    addToCart?.forEach(element => {
      sum += element.counterProduct
    });
    // console.log('sum',sum);
    return sum
  }
  
  const toggleModal =()=>{
    // const data = localStorage.getItem('addToCart_updatedData')
    // setAddToCart(JSON.parse(data))
    // if there is items in addToCart so it opens modal
    if (addToCart?.length !== 0) {
      toggleOpenCart()
    }
    //if there is no items in cart to show
    else{
      alert('Your Cart is Empty!!! Please Add Items And Try Again.')
    }
  }
  const handleHamburgerMenu =()=>{
    toggleIsHamburgerMenu()
  }
  return (
    <>
    <div className={`${parentClass}`}>
        <nav className={`list-none ${categoriesClass}`}>
            <li className="sm:hover:bg-gray-200 sm:w-full sm:p-1 sm:rounded">Categories</li>
            <li className="sm:hover:bg-gray-200 sm:w-full sm:p-1 sm:rounded">Deals</li>
            <li className="sm:hover:bg-gray-200 sm:w-full sm:p-1 sm:rounded">What’s New</li>
            <li className="sm:hover:bg-gray-200 sm:w-full sm:p-1 sm:rounded">Delivery</li>
        </nav>
        <nav className={`list-none ${accountClass}`}>
            <IconSpan parentDivClass={'justify-end sm:hover:bg-gray-200 sm:w-full sm:p-1 sm:rounded'} text={'Account'} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
            </IconSpan>
            <li className="sm:hover:bg-gray-200 sm:w-full sm:p-1 sm:rounded sm:text-end" onClick={()=>toggleModal()}>Cart</li>
        </nav>
    </div>
    <div className={`${hamburgerClass}`}>{/**hamburger menu */}
      <button className="bg-slate-200 rounded-md" onClick={()=>{handleHamburgerMenu()}}>{/** set onClick for modal */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
    </div>
    {createPortal(
      <Modal
        isOpen={isHamburgerMenu}
        toggleOpen={toggleIsHamburgerMenu}
        isCartOnPic={false} 
        positionModalContainer={'justify-end items-start'} 
        positionModalHeader={'justify-end'} 
        positionModal={'w-[48%] flex flex-col flex-row-reverse h-fit justify-start'} 
        positionModalContent={'flex-col h-[95%] justify-end my-2'}
      >
        <NavItem
          parentClass = {'flex-col w-full flex items-end gap-y-2'}
          accountClass = {'w-full flex flex-col items-end gap-y-2'}
          categoriesClass={'w-full flex flex-col text-end gap-y-2'}
          hamburgerClass = {'hidden'}
        />
      </Modal>
    ,document.body)}

    {createPortal(
        <Modal 
          isOpen={openCart} 
          toggleOpen={toggleOpenCart} 
          isCartOnPic={false} 
          positionModalContainer={'justify-center items-center'} 
          positionModalHeader={'justify-end'} 
          positionModal={'w-[48%] flex-col h-[80vh] lg:w-[55%] md:w-[80%] sm:w-[85%] '} 
          positionModalContent={'flex h-[95%]'}
        >
          <div className="flex px-2 pt-1 gap-x-2 h-full">
            <div className="left-div flex flex-col gap-y-2 w-[65%] h-full">
              <div className="top-Left w-full h-2/3 overflow-y-scroll pl-2 pt-1 flex flex-col border-2 border-gray rounded-md">
                <p className="mb-1">Cart Details</p>
                {addToCart?.map((item,index)=>{
                  return  <ProductCart 
                            starRate={item?.rate} 
                            productCartId={addToCart[index].id} 
                            item={item}//for sending it to Star Component for changing rateStar 
                            checkIsModal={true}
                            isOpen={true} 
                            src={item?.url} 
                            cost={item?.cost*item?.counterProduct} 
                            productName={item?.name}
                            material={item?.material} 
                            productClass={'w-[80%] mb-3 flex gap-x-3 relative rounded sm:w-full'} 
                            pictureProductClass={'w-1/3 md:w-full sm:w-full'} 
                            explanationProductClass={'w-full justify-between md:w-[90%] sm:hidden'} 
                            starClass={' sm:hidden'}
                          >
                      <div className="rounded-full w-5 h-5 bg-gray-300 text-orange-500 absolute top-[75%] left-[20%] flex justify-center items-center md:left-[45%] md:top-[85%] sm:left-[40%] sm:top-[80%] "><span>{item?.counterProduct}</span></div>
                    </ProductCart>
                })}
              </div>
              <div className="bottom-left h-1/3 w-full p-3 flex border-2 border-gray justify-between rounded-md">
                <div className="flex flex-col w-full">
                  <p>DElivery Information</p>
                  <div className="text-xs text-gray-600 my-2">
                    <p>{address.name}</p>
                    <p>{`${address.city} - ${address.street}`}</p>
                    <p className="my-2">{`${address.alley} - ${address.NO}`}</p>
                    <p>{address.country}</p>
                  </div>
                </div>
                <div>
                  <button className=" text-xs font-semibold border border-orange-500 text-orange-500 rounded-full px-4"> Edit</button>
                </div>
              </div>
            </div>
            <div className="right-div pt-2 flex flex-col justify-between w-[35%] h-full border-2 border-gray rounded-md">
              <div className="pl-2">
                <p >Oreder Summary</p>
                <div className="py-2">
                  <OrderSpan pTitle={'Products added'} pExp={numberOfAddedProducts()}/>
                  <OrderSpan pTitle={'GST'} pExp={'1.25%'}/>
                  <OrderSpan pTitle={'S-GST'} pExp={'1.25%'}/>
                  <OrderSpan pTitle={'Total Cost Value '} spanExp={' (in $)'} pExp={'779$'}/>
                  <OrderSpan pTitle={'Discount '} spanExp={' (in %)'} pExp={'7.5%'}/>
                </div>
              </div>
              <div className="">
                  <DeliveryPolicy DeliveryPolicyClass={'bg-gray-200 rounded-md pl-2'}/>
              </div>
            </div>
          </div>
        </Modal>
      ,document.body)
    }
    </>
  )
}

export default NavItem