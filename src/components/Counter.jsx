import React, { useState } from 'react'

const Counter =() =>{
    const[count, setCount] = useState(0);

    const increment =() =>{
        setCount(count +1);
    }

    const decrement =() =>{
        setCount(count ===0 ? 0:count -1);
    
    }

    const reset =() =>{
        setCount(0); 
    }
    const multiply =() =>{
        setCount(count * 2);
    }
    const divide =() =>{
        setCount(count / 2);
    }


  return (
    <div className=''>
      <h2>Counter:{count}</h2>
      <button onClick={decrement} className='bg-amber-200 rounded-2xl p-2 mb-2 font-bold' >minus - </button>
      <br />
      <button onClick={increment} className='bg-green-500 rounded-2xl p-2 mb-2 font-bold'>plus + </button>
      <br />
      <button onClick={reset} className='bg-red-600 rounded-2xl p-2 mb-2 font-bold' >Reset</button>
      <br />
      <button onClick={multiply} className='bg-blue-500 rounded-2xl p-2 mb-2 font-bold'>Multiply</button>
      <br />
      <button onClick={divide} className='bg-purple-500 rounded-2xl p-2 font-bold'>Divided</button>
    </div>
  )
}

export default Counter
