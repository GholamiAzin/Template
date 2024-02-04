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
    //this function returns index to parent component
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
        // {/* <button id={0} className={clsx(`flex items-center justify-center border border-orange-500 rounded text-orange-500 w-1/5 text-xs font-semibold py-2`,color && "bg-orange-500 text-white")}onClick={(e)=>btnColor(e)} value={'S'}>S</button>
        // <button id={1} className={clsx(`flex items-center justify-center border border-orange-500 rounded text-orange-500 w-1/5 text-xs font-semibold py-2`,color && "bg-orange-500 text-white")}onClick={(e)=>btnColor(e)} value={'M'}>M</button>
        // <button id={2} className={clsx(`flex items-center justify-center border border-orange-500 rounded text-orange-500 w-1/5 text-xs font-semibold py-2`,color && "bg-orange-500 text-white")}onClick={(e)=>btnColor(e)} value={'L'}>L</button>
        // <button id={3} className={clsx(`flex items-center justify-center border border-orange-500 rounded text-orange-500 w-1/5 text-xs font-semibold py-2`,color && "bg-orange-500 text-white")}onClick={(e)=>btnColor(e)} value={'XL'}>XL</button>
        // <button id={4} className={clsx(`flex items-center justify-center border border-orange-500 rounded text-orange-500 w-1/5 text-xs font-semibold py-2`,color && "bg-orange-500 text-white")}onClick={(e)=>btnColor(e)} value={'XXL'}>XXL</button> */}
        // {/* {sizeList.map((item,index)=>{
        //   if (item.id==index) {
            
        //     return  <Button key={index} id={item.id} btnColor={sendColor} newColor={color} content={item.content}/>
        //   }
        //   else{
        //     console.log('item.id',item.id);
        //     return  <Button key={index} id={item.id} newColor={color} content={item.content}/>
        //   }
        // })} */}

        // {/* <Button btnColor={sendColor} newColor={color} content={'S'}/>
        // <Button btnColor={sendColor} newColor={color} content={'M'}/>
        // <Button btnColor={sendColor} newColor={color} content={'L'}/>
        // <Button btnColor={sendColor} newColor={color} content={'XL'}/>
        // <Button btnColor={sendColor} newColor={color} content={'XXL'}/> */}
  )
}

export default Size