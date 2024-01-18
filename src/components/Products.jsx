import UseFetch from "../hooks/UseFetch";
import ProductCart from "./ProductCart"
// import { storage } from "../config/firebase"
// import { ref ,listAll ,getDownloadURL } from "firebase/storage";

const Products = () => {
  const [cachedList] = UseFetch([])
  
  // const imageListRef = ref(storage ,'Images/' )//for get data from storage
  // const [imageList, setImageList] = useState([])//for get data from storage


  //this is for getting url from storage 

  // useEffect(() => {
  //   listAll(imageListRef).then((response)=>{
  //     response.items.forEach((item)=>{
  //       getDownloadURL(item).then((url)=>{
  //         setImageList((prev)=>([...prev ,url ]))
  //       })
  //     })
  //   })
  // }, [])
  

  return (
      <div className="w-full flex flex-wrap justify-between gap-y-4">
        {
          cachedList.map((item)=>{
            // const imgURL = imageList[index]//if you have two array you can do this for the second one
            // console.log('id',item.id);
            return <ProductCart pictureProductClass={'w-full h-2/3'} productClass={'w-[23%] flex flex-col rounded md:w-[45%] sm:w-full'} productCartId={item.id} key={item.id} src={item.url} productName={item.name}
              material={item.material} cost={item.cost}  />
          })

        }
        {/*<ProductCart src={require('../assets/Images/Rectangle 4.png')} productClass={'w-[23%]'} productName={'Rounded neck - T shirt 100% Cotton'}
        material={'Organic Cotton, Fair Trade quality'} cost={85} />
         <ProductCart src={require('../assets/Images/Rectangle 5.png')} productClass={'w-[23%]'} productName={'Rounded neck - T shirt 100% Cotton'}
        material={'Organic Cotton, Fair Trade quality'} cost={85} />
        <ProductCart src={require('../assets/Images/Rectangle 6.png')} productClass={'w-[23%]'} productName={'Rounded neck - T shirt 100% Cotton'}
        material={'Organic Cotton, Fair Trade quality'} cost={85} />
        <ProductCart src={require('../assets/Images/Rectangle 7.png')} productClass={'w-[23%]'} productName={'Rounded neck - T shirt 100% Cotton'}
        material={'Organic Cotton, Fair Trade quality'} cost={85} />
        <ProductCart src={require('../assets/Images/Rectangle 8.png')} productClass={'w-[23%]'} productName={'Rounded neck - T shirt 100% Cotton'}
        material={'Organic Cotton, Fair Trade quality'} cost={85} />
        <ProductCart src={require('../assets/Images/Rectangle 9.png')} productClass={'w-[23%]'} productName={'Rounded neck - T shirt 100% Cotton'}
        material={'Organic Cotton, Fair Trade quality'} cost={85} />
        <ProductCart src={require('../assets/Images/Rectangle 10.png')} productClass={'w-[23%]'} productName={'Rounded neck - T shirt 100% Cotton'}
        material={'Organic Cotton, Fair Trade quality'} cost={85} />
        <ProductCart src={require('../assets/Images/Rectangle 11.png')} productClass={'w-[23%]'} productName={'Rounded neck - T shirt 100% Cotton'}
        material={'Organic Cotton, Fair Trade quality'} cost={85} /> */}
      </div>
      
  )
}

export default Products