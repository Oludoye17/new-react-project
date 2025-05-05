import React, { useEffect, useState } from "react";

const UseEffects = () => {
  useEffect(() => {
    alert("component mounted");
  },[]);

  const [count, setCount] = useState(0);

  const handleclick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      UseEffects
      <button onClick={handleclick}> increment</button>
    </div>
  );
};

export default UseEffects;
