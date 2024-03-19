'use client'
import { useState } from 'react';
function Snapshot() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);console.log(number) //0
        setNumber(number + 1);console.log(number) //0
        setNumber(number + 1);console.log(number) //0
      }}>+3_NG</button><hr/>
      <button onClick={() => {
        setNumber(num=>num+1);console.log(number) //0
        setNumber(num=>num+1);console.log(number) //0
        setNumber(num=>num+1);console.log(number) //0
      }}>+3_OK</button>    
    </>
  )
}
export default Snapshot;



