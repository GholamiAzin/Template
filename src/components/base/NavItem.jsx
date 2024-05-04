import { createPortal } from "react-dom"
import IconSpan from "./IconSpan"
import Modal from "./Modal"
import useModal from "../../hooks/useModal"
import { useContext, useEffect, useState } from "react"
import { logInData } from "../../App"
import OrderSpan from "./OrderSpan"
import DeliveryPolicy from "./DeliveryPolicy"
import { useNavigate } from "react-router-dom"
import ProductCartInModal from "../ProductCartInModal"
import Swal from "sweetalert2"

const NavItem = ({ parentClass, hamburgerClass, categoriesClass, accountClass }) => {
  const [openCart, toggleOpenCart] = useModal(false)
  const [isHamburgerMenu, toggleIsHamburgerMenu] = useModal(false)
  const { logedInUser, setLogedInUser } = useContext(logInData)
  const [isUser, setIsUser] = useState('')//its set wether the user name or account
  const [isLogedOut, setIsLogedOut] = useState(true)
  const [statusMenu, setStatusMenu] = useState(true)
  const [windowWidth, setWindowWidth] = useState(0)
  const [classMenu, setClassMenu] = useState('hidden')
  const navigate = useNavigate()

  const address = {
    name: 'Wade  John Smith',
    city: 'New Zealand',
    street: '2nd Cross',
    alley: 'Cross raod',
    NO: 'Po 25698',
    country: 'United States'
  }

  useEffect(() => {
    const userWidth = () => {
      setWindowWidth(window.innerWidth)
    }
    userWidth()
  }, [window.innerWidth])


  //this function checks if user loged in so the name shows instead of account if not the account shows
  useEffect(() => {
    const showName = () => {
      if (logedInUser?.id) {
        setIsUser(logedInUser?.name)
        setIsLogedOut(false)
      } else {
        setIsUser('Account')
        setIsLogedOut(true)
      }
    }
    showName()
  }, [logedInUser?.name])


  const numberOfAddedProducts = () => {
    let sum = 0
    logedInUser?.basketList?.forEach(element => {
      sum += element.counterProduct
    });
    return sum
  }

  const toggleModal = () => {
    if (logedInUser?.id) {
    // if there is items in addToCart so it opens modal
    if (logedInUser?.basketList?.length !== 0) {
      toggleOpenCart()
    }
    //if there is no items in cart to show
    else {
      Swal.fire({//sweet alert error for login first
        position: "center",
        icon: "warning",
        title: `Your Cart is Empty!!! Please Add Items And Try Again.`,
        showConfirmButton: true,
        confirmButtonColor: "#FF7518"
      });
    }
    }else{
      Swal.fire({//sweet alert error for login first
        position: "center",
        icon: "error",
        title: `Please Sign In First!!!`,
        showConfirmButton: false,
        timer: 1800
      });
    }
  }
  const handleHamburgerMenu = () => {
    toggleIsHamburgerMenu()
  }

  const toggleMenu = () => {//to toggle adiv that when user click on user name the div will have flex display that has logout on it and when click on name again display will be hidden
    setStatusMenu(!statusMenu)
    statusMenu ? setClassMenu('flex') : setClassMenu('hidden')
  }

  const handleLogOut = () => {
    setLogedInUser({})
    localStorage.clear();
    Swal.fire({
      position: "center",
      width:300,
      imageHeight: 200,
      icon: "success",
      title: `goodbye ${logedInUser?.name}`,
      showConfirmButton: false,
      timer: 1300
    });
    navigate('/signIn')
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
          {/*if isLogedOut is true it shows that user is out and the text on iconSpan is Account so the div for log out shouldnt show */}
          {isLogedOut ?
            <IconSpan
              parentDivClass={'account relative justify-end sm:hover:bg-gray-200 sm:w-full sm:p-1 sm:rounded'}
              text={`${isUser}`}
              clickFunc={() => navigate('/signIn')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </IconSpan>
            :
            windowWidth <= 768 ?//in mobile view if width is <= 768 
              <div className="flex justify-end">
                <span className="" onClick={() => handleLogOut()}>Logout</span>
              </div>
              :
              <IconSpan
                parentDivClass={'account relative justify-end sm:hover:bg-gray-200 sm:w-full sm:p-1 sm:rounded'}
                text={`${isUser}`}
                clickFunc={() => toggleMenu()}
              >
                <div onClick={() => handleLogOut()} className={`menu absolute rounded-s-md rounded-ee-md ${classMenu} min-w-[60px] top-5 shadow-[0px_5px_15px_0px_rgba(0,0,0,0.4)] bg-white flex-col items-center justify-center`}>
                  <span className="p-2 w-full rounded-s-md rounded-ee-md text-center hover:bg-zinc-300">Log out</span>
                  {/* <span></span> */}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </IconSpan>
          }
          <li className="sm:hover:bg-gray-200 sm:w-full sm:p-1 sm:rounded sm:text-end" onClick={() => toggleModal()}>Cart</li>
        </nav>
      </div>
      <div className={`${hamburgerClass}`}>{/**hamburger menu */}
        <button className="bg-slate-200 rounded-md" onClick={() => { handleHamburgerMenu() }}>{/** set onClick for modal */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
      </div>
      {/* create modal for hamburger menu */}
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
          <div className="font-semibold w-full border-b-2 border-zinc-400">{isUser}</div>
          <NavItem
            parentClass={'flex-col w-full flex items-end gap-y-2'}
            accountClass={'w-full flex flex-col items-end gap-y-2'}
            categoriesClass={'w-full flex flex-col text-end gap-y-2'}
            hamburgerClass={'hidden'}
          />
        </Modal>
        , document.body)}

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
                {logedInUser?.basketList?.map((item, index) => {
                  return <ProductCartInModal
                    itemData={item}//for sending it to Star Component for changing rateStar 
                    checkIsModal={true}
                    isOpen={true}
                    productClass={'w-[80%] mb-3 flex gap-x-3 relative rounded sm:w-full'}
                    pictureProductClass={'w-1/3 md:w-full sm:w-full'}
                    explanationProductClass={'w-full justify-between md:w-[90%] sm:hidden'}
                    starClass={' sm:hidden'}
                  >
                    <div className="rounded-full w-5 h-5 bg-gray-300 text-orange-500 absolute top-[75%] left-[20%] flex justify-center items-center md:left-[45%] md:top-[85%] sm:left-[40%] sm:top-[80%] "><span>{item?.counterProduct}</span></div>
                  </ProductCartInModal>
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
                  <OrderSpan pTitle={'Products added'} pExp={numberOfAddedProducts()} />
                  <OrderSpan pTitle={'GST'} pExp={'1.25%'} />
                  <OrderSpan pTitle={'S-GST'} pExp={'1.25%'} />
                  <OrderSpan pTitle={'Total Cost Value '} spanExp={' (in $)'} pExp={'779$'} />
                  <OrderSpan pTitle={'Discount '} spanExp={' (in %)'} pExp={'7.5%'} />
                </div>
              </div>
              <div className="">
                <DeliveryPolicy DeliveryPolicyClass={'bg-gray-200 rounded-md pl-2'} />
              </div>
            </div>
          </div>
        </Modal>
        , document.body)
      }
    </>
  )
}

export default NavItem