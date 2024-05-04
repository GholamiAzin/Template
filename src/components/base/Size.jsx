import { useContext } from "react"
import { clsx } from 'clsx';
import { CountVar } from "../../views/Home";


const Size = ({onClick}) => {
  const {size,color,setColor} = useContext(CountVar)

  
    //this function returns index to products component
    const handleIndex=(index)=>{
      setColor(index)
      return index
    }

  return (
    <div className="flex w-3/5 gap-x-1 mt-4">
    {[...Array(5)].map((btn,index)=>{
        return(
        <div key={index} className="w-1/5 flex justify-between items-center"onClick={()=>onClick(handleIndex(index))}>
           {color===index?<button className={clsx(` border border-orange-500 rounded w-full text-xs font-semibold py-2 bg-orange-500 text-white`)}>{size[index]}</button>
            :<button className={clsx(` border border-orange-500 rounded text-orange-500 w-full text-xs font-semibold py-2`)}>{size[index]}</button>}
        </div>
        )
        })}
    </div>
        
  )
}

export default Size