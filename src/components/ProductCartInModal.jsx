import ExplanationProduct from "./base/ExplanationProduct"
import PictureProduct from "./base/PictureProduct"
import StarInModal from "./base/StarInModal"

const ProductCartInModal = ({children,itemData,cartIndex,onClickSvg,isOpen,productClass,explanationProductClass,pictureProductClass,starClass}) => {
  
  return (
    <div className={`${productClass} `}>
        <PictureProduct picIndex={cartIndex} openCart={onClickSvg} isOpen={isOpen} picClass={pictureProductClass} src={itemData?.url} pictureProductId={itemData?.id}/>
        <div className="w-full flex flex-col md:items-center md:mt-2 sm:items-center sm:mt-2 ">
          <ExplanationProduct expClass={explanationProductClass} explanationProductId={itemData?.id} productMaterial={itemData?.material} cost={itemData?.cost} productName={itemData?.name}/>
          <div className="flex w-full justify-start gap-x-2 mt-1 md:w-[80%] sm:w-[90%]">
          <StarInModal starClass={starClass} starId={itemData?.id}/>
          </div>
          {children}
        </div>
    </div>
  )
}

export default ProductCartInModal