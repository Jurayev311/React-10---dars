import React from 'react'
import Child from './Child'

const Parent = () => {
   console.log("Parent render");
   
  return (
    <div>
        <h2>Parent</h2>
        <Child/>
    </div>
  )
}

export default React.memo(Parent)