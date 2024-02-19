import { useContext, useEffect, useState } from "react"
import { CountVar } from "../../views/Home"
import Svg from "./Svg"

const HandleCount = () => {
    let {counter,setCounter,increaseCounter,decreaseCounter} = useContext(CountVar)
    const [inputValue, setInputValue] = useState(counter)

    useEffect(() => {
      setInputValue(counter)
    }, [counter])
    

    const handeleDecrease=()=>{
        decreaseCounter()
        setInputValue(counter)
    }
    const handeleIncrease=()=>{
        increaseCounter()
        setInputValue(counter)
        // console.log('inputValue',inputValue);
    }
    // console.log('counter',counter);
    
    const handeleInputChange=(event)=>{
        const newValue = Number(event.target.value)
        if (isNaN(newValue)) {//if they type non-numeric in input alert will shown 
            alert('number is invalid...')
            
        } else {
            
            setCounter(newValue)
        }
        
    }

  return (
    <div className="flex rounded-lg border border-gray-300 mt-4 w-[30%] h-[8%] items-center ">
        <button className="flex w-1/3 items-center justify-center border-r-[1px] border-gray-300 h-full">
            <Svg myClass={''} svgOnClick={handeleDecrease}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
            </svg>
            </Svg>
        </button>
        {/* <span className="flex justify-center text-gray-600 text-sm w-1/3">{counter}</span> */}
        <input 
            type="text" 
            className="flex text-center outline-none justify-center text-gray-600 text-sm w-1/3"
            name="counterInput" 
            value={inputValue} 
            onChange={handeleInputChange}>
        </input>
        <button className="flex w-1/3 items-center justify-center border-l-[1px] border-gray-300 h-full">
            <Svg myClass={''} svgOnClick={handeleIncrease}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
            </Svg>
        </button>
    </div>
  )
}

export default HandleCount