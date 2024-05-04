// import { useState } from "react"
import { clsx } from 'clsx';
import { useState } from 'react';


const Button = ({id,content,btnColor,newColor}) => {
    const [color, setBtnColor] = useState(newColor)
    // const [key, setKey] = useState(0)
    // const clsxWithColor ={}
    // const clsxWithoutColor ={}
    const handleColor = () =>{
      setBtnColor(!color)
      console.log("color id",id)

      return color
    }    
    

  return (
    <div className="flex justify-center w-1/5 ">
        <button className={clsx(`flex items-center justify-center border border-orange-500 rounded text-orange-500 w-full text-xs font-semibold py-2`,newColor && "bg-orange-500 text-white")}onClick={()=>btnColor(handleColor())}>{content}</button>
    </div>
  )
}

export default Button