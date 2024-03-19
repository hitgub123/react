'use client'
import { useState } from 'react';
function Snapshot() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {    //+1
        setNumber(number + 1);console.log(number) //0
        setNumber(number + 1);console.log(number) //0
      }}>+1</button><hr/>
      <button onClick={() => {    //+2
        setNumber(num=>num+1);console.log(number) //0
        setNumber(num=>num+1);console.log(number) //0
      }}>+2</button><hr/>   
        <button onClick={() => {    //+2
        setNumber(number + 1);console.log(number) //0
        setNumber(number + 1); console.log(number) //0
        setNumber(num=>num+1);console.log(number) //0
      }}>+2</button><hr/><hr/>
      <button onClick={() => {    //+1
        setNumber(num=>num+1);console.log(number) //0
        setNumber(num => num + 1); console.log(number) //0
        setNumber(number + 1);console.log(number) //0
      }}>+1</button><hr/>
    </>
  )
}
export default Snapshot;



