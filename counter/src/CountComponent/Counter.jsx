import React from 'react'
import './Counter.css'
import { useState } from 'react'
export default function Counter() {
    const [counter , setCounter] = useState(0);

  return (
    <div className="container">
        <h1 className="counter">Counter App</h1>
        <p>Count: {counter}</p>
        <button onClick={()=>setCounter((prev)=>prev+1)}>Increment</button>
        <button onClick={()=>setCounter((curr)=>curr-1)}>Decrement</button>
    </div>
  )
}
