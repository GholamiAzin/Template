import React, { useContext, useEffect, useReducer, useState } from "react";
import IconSpan from "./IconSpan";
// import UseFetch from "../../hooks/UseFetch";
import { CountVar } from "../../views/Home"
import { getProduct, updateProduct } from "../../services/productsServices";
import { reducer, updateReducer } from "../../reducers/reducer";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { dataBase } from "../../config/firebase";



const Modal = ({children,item,isOpen,toggleOpen,isCartOnPic,positionModalContainer,positionModal,positionModalHeader,positionModalContent,id,sizeIndex}) => {
    const {list,color,counter,setCounter,size,productCost,setProductCost,setColor,addToCart,setAddToCart}=useContext(CountVar)
    const [state, setState] = useState(item)
    // const [newAddToCart, setNewAddToCart] = useState()
    const [stateUpdate, dispatchUpdate] = useReducer(updateReducer, list)

    useEffect(() => {
        setState(item)
    }, [item])

    // let jsonData = {}
    // useEffect(() => {
    //    const data = localStorage.getItem('addToCart_updatedData')
    //    jsonData = JSON.parse(data)
    //    if(jsonData !== null){
    //     setNewAddToCart(jsonData)
    //     }
    //     else{
    //         setNewAddToCart([])
    //     }
    // }, [newAddToCart])
    

    
const EditList=async()=>{
    if (counter == 0 || color == -1) {
        alert('please add a size and counter...')
    }
    else{
        // update cart
        const data = await updateProduct({...state,counterProduct:counter,size:size[sizeIndex],isAddToCart:true},id)
        // const data = await updateProduct({...itemData?.data,counterProduct:counter,size:size[sizeIndex]},id)
        // dispatch for update
        dispatchUpdate({type:'update',data:data.data})
        // console.log("list",list);
        addToCart.push(data.data)
        setAddToCart(addToCart)
        localStorage.setItem('addToCart_updatedData',JSON.stringify(addToCart))
        // newAddToCart?.push(data.data)
        // setNewAddToCart(newAddToCart)
        // localStorage.setItem('addToCart_updatedData',JSON.stringify(newAddToCart))
        handleSvgClose()
    }
}
// console.log('list',list);
// console.log('addToCart',addToCart);
    
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

    // console.log('list',list);
    
    if(!isOpen) return null;

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




//for update counter of products and size of each id
// const AddToCart = async (id) =>{
//         try {
//         const productCounter = doc(dataBase,'product-data',id)
//         await updateDoc(productCounter,{counterProduct:counter,size:size[sizeIndex]})
//         const get = await getDoc(productCounter)
//         addToCart.push(get?.data())
//         setAddToCart(addToCart)
//         // console.log('lengh of addToCart',addToCart);
//         } catch (error) {
//             console.log('error',error);
//         }
//     }
    
// const updateCart = async (id) =>{
//     const productCounter = doc(dataBase,'product-data',id)
//     await updateDoc(productCounter,{counterProduct:counter,size:size[sizeIndex]})
    
//     // console.log('cachedList',cachedList);
// }
// const AddToCart=async(id)=>{
//     try {
//         const data = doc(dataBase,'product-data',id)
//         const get = await getDoc(data)
//         addToCart.push(get?.data())
//         setAddToCart(addToCart)
//         // console.log('AddToCart',addToCart);
//     } catch (error) {
//         console.log('error',error);
//     }
// }

// const testState1 = 'test1'
// const testState2 = {testId:1,testName:'test1'}


// const initialState = async()=>{
//     try {
//         const idData = await getProduct(id)
//         console.log('idData',idData.data);
//         // console.log('idData without .data :',idData);
//         setItemInModal(idData.data)
//         // console.log('state',state);
//     } catch (error) {
//         console.log('error',error);
//     }
// };
// initialState()

    // console.log("item",item);


//this useEffect is for fetching the data from database for storing it in a state 
// useEffect(() => {
//     const fetchData = async ()=>{
//       try {
//         const {data : dataProduct} = await getProduct(id)
//         console.log('dataProduct',dataProduct);
//         setFetchedData(dataProduct)
//         // setState(prevState => ({
//         //     ...prevState,
//         //     [fetchedData.key]: fetchedData.value
//         // }));
//         // console.log('fetchedData :',fetchedData);
//       } catch (error) {
//         console.log('error',error);
//       }
//     }
//     fetchData()
//   }, [id])

//   useEffect(() => {
//     const fetchData = async ()=>{
//       try {
//         const {key , value} = await getProduct(id)
//         // console.log('dataProduct',dataProduct);
//         // setFetchedData(dataProduct)
//         setState(prevState => ({
//             ...prevState,
//             [key]: value
//         }));
//         // console.log('fetchedData :',fetchedData);
//       } catch (error) {
//         console.log('error',error);
//       }
//     }
//     fetchData()
//   }, [list])

  //this useEffect is gonna fill state with current value of fetchedData
  //why?
// useEffect(() => {
//     setState(prevState => ({
//         ...prevState,
//         [fetchedData.key]: fetchedData.value
//     }));
//     console.log('state in second useEffect',state);
//     console.log('fetchedData :',fetchedData);

// }, [fetchedData])

// console.log('state',state);
//it is gonna set the chaned value into state and fill the global list for cart in navItem
// const setCart = () =>{
   
    // console.log('state1 :',state);
    // setState({...state,
    //     counterProduct:counter,size:size[sizeIndex]}    
    //     )
    // console.log('state2 :',state);
    // addToCart.push(fetchedData)
    // setAddToCart(addToCart)
    // console.log('addToCart',addToCart);
    // }
    
//update value and set to fetchedData
    // const updateCart = async () =>{
    //     try {
    //         // console.log('sizeIndex',sizeIndex);
    //         const idIndex = state.findIndex((item)=>{return item.id === id})
    //         console.log('idIndex',idIndex);
    //         const data = await updateProduct({...state[idIndex],counterProduct:counter,size:size[sizeIndex]},id)
    //         // const data = await updateProduct({...fetchedData,counterProduct:counter,size:size[sizeIndex]},id)
    //         // setState(data)
    //         const newData = await getProduct(id)
    //         const {key , value} = newData.data
    //         setState(prevState => ({
    //             ...prevState,
    //             [key]: value
    //         }));
    //         console.log('state',state);
    //         // addToCart.push(data.data)
    //         // setAddToCart(addToCart)
    //         console.log('data',newData.data);
    //         // console.log('fetchedData',fetchedData);
    //         // console.log('addToCart',addToCart);
    //     } catch (error) {
    //         console.log('error',error);
    //     }
    // }
    // const updateCart = async () =>{
    //     try {
    //         console.log('sizeIndex',sizeIndex);
    //         const data = await updateProduct({...fetchedData,counterProduct:counter,size:size[sizeIndex]},id)
    //         // setState(data)
    //         setFetchedData(prevState => ({
    //             ...prevState,
    //             ...data.data
    //         }));
    //         addToCart.push(data.data)
    //         // setAddToCart(addToCart)
    //         console.log('data',data.data);
    //         console.log('fetchedData',fetchedData);
    //         // console.log('addToCart',addToCart);
    //     } catch (error) {
    //         console.log('error',error);
    //     }
    // }