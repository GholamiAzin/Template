import ExplanationProduct from "./base/ExplanationProduct"
import PictureProduct from "./base/PictureProduct"
import Star from "./base/Star"

const ProductCart = ({checkIsModal,item,cartIndex,onClickSvg,isOpen,productClass,starRate,explanationProductClass,pictureProductClass,starClass}) => {
  
  return (
    <div className={`${productClass} `}>
        <PictureProduct picIndex={cartIndex} openCart={onClickSvg} isOpen={isOpen} picClass={pictureProductClass} src={item.url} pictureProductId={item.id}/>
        <div className="w-full flex flex-col md:items-center md:mt-2 sm:items-center sm:mt-2 ">
          <ExplanationProduct expClass={explanationProductClass} explanationProductId={item.id} productMaterial={item.material} cost={item.cost} productName={item.name}/>
            <div className="flex w-full justify-start gap-x-2 mt-1 md:w-[80%] sm:w-[90%]">
              <Star checkIsModal={checkIsModal} starClass={starClass} starId={item.id} rateIndex={starRate}/>
            </div>
        </div>
    </div>
  )
}

export default ProductCart