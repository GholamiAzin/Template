import ExplanationProduct from "./base/ExplanationProduct"
import PictureProduct from "./base/PictureProduct"
import Star from "./base/Star"

const ProductCart = ({children,checkIsModal,item,cartIndex,onClickSvg,isOpen,src,cost,productName,material,productClass,productCartId,starRate,explanationProductClass,pictureProductClass,starClass}) => {

  return (
    <div className={`${productClass} `}>
        <PictureProduct picIndex={cartIndex} openCart={onClickSvg} isOpen={isOpen} picClass={pictureProductClass} src={src} pictureProductId={productCartId}/>
        <div className="w-full flex flex-col md:items-center md:mt-2 sm:items-center sm:mt-2 ">
          <ExplanationProduct expClass={explanationProductClass} explanationProductId={productCartId} productMaterial={material} cost={cost} productName={productName}/>
            <div className="flex w-full justify-start gap-x-2 mt-1 md:w-[80%] sm:w-[90%]">
              <Star checkIsModal={checkIsModal} starClass={starClass} itemStar={item} starId={productCartId} rateIndex={starRate}/>
            </div>
        </div>
        {children}
    </div>
  )
}

export default ProductCart