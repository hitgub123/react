'use client'
import { useState } from 'react';
function UseStateObj() {
  const [obj, setObj] = useState({ id: 1, name: 'no.1' });
  function modifyObj() { 
    let id = obj.id;
    setObj({ id: id+1, name: 'no.'+(id+1) });
  };
  return (
    <>
      <button onClick={modifyObj}>modify obj</button>
      <p>{obj.id}{' >>> '}{obj.name}</p>
    </>
  )
}
export default UseStateObj;



