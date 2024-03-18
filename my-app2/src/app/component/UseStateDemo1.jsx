'use client'
import { useState } from "react";
const students = [
  {
    name: 'John',
    detail: 'John is a fisher',
  },  {
    name: 'Lucy',
    detail: 'Lucy likes fish',
  },  {
    name: 'Smith',
    detail: 'Smith is sleeping...',
  },  {
    name: 'Marie',
    detail: 'Marie is fishing',
  }
];

function UseStateDemo1() {
  const [showDetail, setShowDetail] = useState(true);
  const [index,setIndex]=useState(0);
  function hendleShowDetail () {
    setShowDetail(!showDetail)
  }
  function handleIndex () {
    setIndex((index+1)%(students.length))
  }
  return (
    <div>
      <button onClick={handleIndex}>next</button><br />
      <p>{'No.'+ (index+1)+' is:'+ students[index].name}</p>
      <button onClick={hendleShowDetail}>{!showDetail ? 'show' : 'hide'}</button><br />
      <p>{showDetail&&  students[index].detail}</p>
    </div>
  )
}
export default UseStateDemo1;