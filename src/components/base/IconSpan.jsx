// import clsx from "clsx"

const IconSpan = ({children,text,clickFunc,variables,iconSpanClass,divSpanClass,explainSpanClass}) => {
  return (
    <div className="flex items-center gap-x-2" onClick={clickFunc}>
        {children}
        <div className={`${divSpanClass}`}>
          <span className={`${iconSpanClass}`}>{variables}</span>
          <span className={`${explainSpanClass} sm:hidden `}>{text}</span>
        </div>
    </div>
  )
}

export default IconSpan