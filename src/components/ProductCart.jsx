import ExplanationProduct from "./base/ExplanationProduct"
import PictureProduct from "./base/PictureProduct"
import Star from "./base/Star"

const ProductCart = ({children,cartIndex,onClickSvg,isOpen,src,cost,productName,material,productClass,productCartId,starRate,explanationProductClass,pictureProductClass,starClass}) => {

  // console.log("starRate",starRate);

  return (
    <div className={`${productClass} `}>
        <PictureProduct picIndex={cartIndex} openCart={onClickSvg} isOpen={isOpen} picClass={pictureProductClass} src={src} pictureProductId={productCartId}/>
        <div className="w-full">
          <ExplanationProduct expClass={explanationProductClass} explanationProductId={productCartId} productMaterial={material} cost={cost} productName={productName}/>
            <div className="flex justify-start gap-x-2 mt-1">
              <Star starClass={starClass} starId={productCartId} rateIndex={starRate}/>
            </div>
        </div>
        {children}
    </div>
  )
}

export default ProductCart