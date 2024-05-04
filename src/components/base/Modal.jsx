import React, { useContext, useEffect, useReducer, useState } from "react";
import IconSpan from "./IconSpan";
import { CountVar } from "../../views/Home"
import { updateUser } from "../../services/usersServices";
import { updateProduct } from "../../services/productsServices";
import { updateReducer } from "../../reducers/reducer";
import { logInData } from "../../App";
import Swal from "sweetalert2";


const Modal = ({children,item,isOpen,toggleOpen,isCartOnPic,positionModalContainer,positionModal,positionModalHeader,positionModalContent,sizeIndex}) => {
    const {list,color,counter,setCounter,size,productCost,setProductCost,setColor}=useContext(CountVar)
    const [state, setState] = useState(item)
    const [stateUpdate, dispatchUpdate] = useReducer(updateReducer, list)
    const {logedInUser,setLogedInUser}=useContext(logInData)


    useEffect(() => {
        setState(item)
    }, [item])

    if(!isOpen) return null;//for open and close modal 
    
const EditList=async()=>{
    if (counter === 0 || color === -1) {
        alert('please add a size and counter...')
    }
    else if(logedInUser?.id){
        // update cart
        const data = await updateProduct({...state,counterProduct:counter,size:size[sizeIndex]},item.id)
        // dispatch for update
        dispatchUpdate({type:'update',data:data.data})
        logedInUser?.basketList?.push(data?.data)
        await updateUser(logedInUser,logedInUser?.id).then(result=>{//when we wanna udate user and right after that set to logedInUser it didnt work so we use then/catch to udate the database and after the update it set to logedInUser
            setLogedInUser(result?.data)
        }).catch(err=>console.log('error ',err))
        handleSvgClose()
    }else{
        // alert('please sign in first!!!')
        Swal.fire({//sweet alert error for login first
            position: "center",
            icon: "error",
            title: `Please Sign In First!!!`,
            showConfirmButton: false,
            timer: 1800
          });
    }
}    
    //for cost in footer of modal
    const handleCost=()=>{
        setProductCost(counter*item?.cost)
        return productCost
    }
    //for the close button top of modal
    const handleSvgClose=()=>{
        toggleOpen()
        setCounter(0)
        setColor(-1)
    }
    //for cancel in footer of modal that just reset the size and counter of each id
    const handleCancle=()=>{
        setCounter(0)
        setColor(-1)
    }
    //for close the container that overlay the page
    const handleClose = (e)=>{
        const includeClass = String(e?.target?.className)//
        if (includeClass?.includes('modal-container')) {
            toggleOpen()
            setCounter(0)
            setColor(-1)
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
                        {/* <button onClick={()=>{return AddToCart(id),updateCart(id)}} className="mr-4 font-semibold border border-orange-500 text-orange-500 rounded-full px-3">Add to Cart</button> */}
                        <button onClick={()=>{EditList()}} className="mr-4 font-semibold border border-orange-500 text-orange-500 rounded-full px-3">Add to Cart</button>
                        <button onClick={()=>{handleCancle()}} className="text-gray-500">Cancel</button>
                    </div>
                    <IconSpan parentDivClass={'gap-x-2'} variables={`${handleCost()}$`} text={''} iconSpanClass={'text-gray-500'}>
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