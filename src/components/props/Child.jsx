import { useStateValue } from '@/context'
import React from 'react'

const Child = () => {
  const {setCount} = useStateValue()
  console.log("child render");
  
  return (
    <div>
      <h2>Child</h2>
      <button onClick={()=> setCount(p=>p+1)}>increment</button>
    </div>
  )
}

export default React.memo(Child) 