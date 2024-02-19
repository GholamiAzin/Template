// import clsx from "clsx"

const IconSpan = ({children,text,clickFunc,variables,parentDivClass,iconSpanClass,divSpanClass,explainSpanClass}) => {
  return (
    <div className={`flex items-center ${parentDivClass}`} onClick={clickFunc}>
        {children}
        <div className={`${divSpanClass}`}>
          <span className={`${iconSpanClass}`}>{variables}</span>
          <span className={`${explainSpanClass} sm:hidden `}>{text}</span>
        </div>
    </div>
  )
}

export default IconSpan