import React from 'react'
import { useState } from 'react'

const WelcomeHook =() =>{ 
    const [name, setName] = useState("olumide");
  return(
    <div>
        <h1>WelcomeHook {name}!</h1>
    <button onClick={()=> setName("ayomide")} className='bg-amber-500 rounded-3xl shadow-2xl p-2 font-bold'>change name</button>
    </div>
  );
};

export default WelcomeHook;