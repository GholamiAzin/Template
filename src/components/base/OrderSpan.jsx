import React from 'react'

const OrderSpan = ({pTitle,pExp,spanExp}) => {
  return (
    <div className='flex flex-col py-1 '>
        <div className='flex items-center'>
          <p className='text-sm'>{pTitle}</p><span className='text-xs text-gray-500'>{spanExp}</span>
        </div>
        <p className='text-xs text-gray-500'>{pExp}</p>
    </div>
  )
}

export default OrderSpan