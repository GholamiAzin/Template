import { doc, updateDoc } from "firebase/firestore"
import {  useState } from "react"
import { dataBase } from "../../config/firebase"

const Star = ({starId,rateIndex,checkModal,starClass}) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(null)

  const rateMyStar = async (itemIndex)=>{
    try {
      setRating(itemIndex)
      const rateStart = doc(dataBase,'product-data',starId)
      await updateDoc(rateStart,{rate:itemIndex})
    } 
    catch (error) {
      console.log('error',error);
    }
  }

  // const handleCheck=()=>{
          // console.log('rateIndex',rateIndex);
  return (
    <>
      {/* {[...Array(5)].map((star, index) => {
        if (!checkModal) {
          
          index += 1;
          return(
            <div className="cursor-pointer" key = {index} onClick={()=>rateMyStar(index)} onMouseEnter={()=>setHover(index)} onMouseLeave={()=>setHover(null)}>
              {index <=(hover || rating) ?<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#FE8A00" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>:
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#FE8A00" className="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
          </svg>}
            </div>
          )

        }
        else{

          rateIndex += 1;
          return(
            <div className="cursor-pointer" key = {rateIndex} onClick={()=>rateMyStar(rateIndex)} onMouseEnter={()=>setHover(rateIndex)} onMouseLeave={()=>setHover(null)}>
              {rateIndex <=(hover || rating) ?<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#FE8A00" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>:
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#FE8A00" className="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
          </svg>}
            </div>
          )

        }
      })} */}

{[...Array(5)].map((star, index) => {
        index += 1;
          return(
            <div className={`cursor-pointer ${starClass}`} key = {index} onClick={()=>rateMyStar(index)} onMouseEnter={()=>setHover(index)} onMouseLeave={()=>setHover(null)}>
              {index <=(hover || rating) ?<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#FE8A00" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>:
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#FE8A00" className="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
          </svg>}
            </div>
          )
      })}
      {/* {handleCheck()} */}
    </>
  )
}

export default Star


// const Star = () => {
//   const [star, setStar] = useState(false)
//   return (
//     <div className="cursor-pointer" onClick={()=>setStar((props) => !props)}>
//     {star ? <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#FE8A00" className="bi bi-star-fill" viewBox="0 0 16 16">
//               <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//             </svg> :
//             <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#FE8A00" className="bi bi-star" viewBox="0 0 16 16">
//             <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
//           </svg>}
//     </div>
//   )
// }