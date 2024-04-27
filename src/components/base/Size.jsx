import { useContext } from "react"
import { clsx } from 'clsx';
import { CountVar } from "../../views/Home";


const Size = ({onClick}) => {
  const {size,color,setColor} = useContext(CountVar)
    // const [color, setColor] = useState(0)
    // const [size, setSize] = useState('')
    // const sizeList = [
    //   {id:0,content:'S'},
    //   {id:1,content:'M'},
    //   {id:2,content:'L'},
    //   {id:3,content:'XL'},
    //   {id:4,content:'XXL'},
    // ]
    // const sizeList = ['S','M','L','XL','XXL']
    // const sendColor = (props) =>{
    //     setColor(!props)
    //     console.log('color',props);
    // }

    // const btnColor=(e)=>{
    //   // console.log("sizeList",Object.keys(sizeList).length);
    //   const elementValue = e.target.value
    //   for (const item in sizeList) {
    //     if (elementValue===sizeList[item].content) {
    //       // console.log('sizeList.id',sizeList.id);
    //       console.log('elementValue',elementValue);
    //       setColor(!color)
    //     }
    //   }

    // const btnColor=(colorNum)=>{
    //   setColor(colorNum)
    //   // setSizeToDB(chosenSize)
    //   // console.log('chosenSize',chosenSize);
    // }

      
    // }
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
           {color==index?<button className={clsx(` border border-orange-500 rounded w-full text-xs font-semibold py-2 bg-orange-500 text-white`)}>{size[index]}</button>
            :<button className={clsx(` border border-orange-500 rounded text-orange-500 w-full text-xs font-semibold py-2`)}>{size[index]}</button>}
        </div>
        )
        })}
    </div>
        
  )
}

export default Size