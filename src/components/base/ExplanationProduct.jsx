// import Star from "./Star"

const ExplanationProduct = ({cost,productName,productMaterial,expClass}) => {

  return (
    <div className={`flex justify-between ${expClass}`}>
      <div className="flex flex-col">
        <span className="text-xs font-semibold w-4/5">{productName}</span>
        <span className="text-[9px] text-gray-500 font-semibold">{productMaterial}</span>
      </div>
      <div className="flex ">
        <span className="text-[14px] font-semibold">{cost}$</span>
      </div>
    </div>
  )
}

export default ExplanationProduct