import React, { forwardRef } from 'react'

const User = (props,ref) => {
  return (
    <div>
        
      <input ref={ref} type="text" placeholder="Enter Number" />
   </div>
  )
}

export default forwardRef(User);