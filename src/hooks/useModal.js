import { useState } from "react"


const useModal = () => {
    const [open, toggleOpen] = useState(false)
    function toggleModal(){
        toggleOpen(!open)
    }
  return [open,toggleModal]
}

export default useModal