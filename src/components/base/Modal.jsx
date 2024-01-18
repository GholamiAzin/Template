import { useContext } from "react";
import IconSpan from "./IconSpan";
import UseFetch from "../../hooks/UseFetch";
import { CountVar } from "../../views/Home"
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { dataBase } from "../../config/firebase";



const Modal = ({children,isOpen,toggleOpen,isCartOnPic,positionModalContainer,positionModal,positionModalHeader,positionModalContent,id,sizeIndex}) => {
    const {counter,setCounter,size,productCost,setProductCost,setColor,addToCart,setAddToCart}=useContext(CountVar)
    const[cachedList]=UseFetch([])
    if(!isOpen) return null;

//for update counter of products and size of each id
const AddToCart = async (id) =>{
        try {
        const productCounter = doc(dataBase,'product-data',id)
        await updateDoc(productCounter,{counterProduct:counter,size:size[sizeIndex]})
        const get = await getDoc(productCounter)
        addToCart.push(get?.data())
        setAddToCart(addToCart)
        // console.log('lengh of addToCart',addToCart);
        } catch (error) {
            console.log('error',error);
        }
    }
    //for cost in footer of modal
    const handleCost=()=>{
        setProductCost(counter*cachedList[id-1]?.cost)
        return productCost

    }
    //for the close button top of modal
    const handleSvgClose=()=>{
        toggleOpen()
        setCounter(1)
        setColor(0)
    }
    //for cancel in footer of modal that just reset the size and counter of each id
    const handleCancle=()=>{
        setCounter(1)
        setColor(0)
    }
    //for close the container that overlay the page
    const handleClose = (e)=>{
        const includeClass = String(e?.target?.className)
        if (includeClass?.includes('modal-container')) {
            toggleOpen()
            setCounter(1)
            setColor(0)
        }

    }
    return (
        <div onClick={handleClose} className={`modal-container bg-black bg-opacity-25 inset-0 fixed flex ${positionModalContainer}`}> 
            <div className={`modal relative p-3 bg-white flex m-3 rounded-lg ${positionModal}`}>
                <div className={`modal-header flex items-start ${positionModalHeader}`}>
                    <button onClick={()=>{handleSvgClose()}} className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-x-circle-fill text-black" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                    </button>
                </div>
                <div className={`modal-content ${positionModalContent}`}>
                    {children}
                </div>
                {isCartOnPic && <div className="modal-footer flex items-center justify-between w-[95%] h-fit absolute bottom-3">
                    <div className="text-xs">
                        <button onClick={()=>AddToCart(id)} className="mr-4 font-semibold border border-orange-500 text-orange-500 rounded-full px-3">Add to Cart</button>
                        <button onClick={()=>{handleCancle()}} className="text-gray-500">Cancel</button>
                    </div>
                    <IconSpan variables={`${handleCost()}$`} text={''} iconSpanClass={'text-gray-500'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>
                    </IconSpan>
                </div>}
            </div>
        </div>
    )
}

export default Modal

