// import { dataBase } from "../config/firebase"
// import { getDocs,collection } from "firebase/firestore"
// import { useEffect, useMemo, useState } from "react"


// const UseFetch = ()=>{
//     const [list, setList] = useState([])
//     const dataCollectionRef = collection(dataBase,'product-data')//set database to collection and the name of that
//     useEffect(() => {
//         const fetchData = async ()=>{
//           try {
//             const data = await getDocs(dataCollectionRef)
//             const filteredData = data.docs.map((doc)=>({
//             ...doc.data(),
//             id:doc.id,
//           }))
//           setList(filteredData)
//           } catch (error) {
//             console.log('error',error);
//           }
//         }
//         fetchData()
//       }, [])
//       //cache the list for not reading it from database every time
//       const cachedList = useMemo(() => list, [list])
//       return [cachedList]
// }

// export default UseFetch