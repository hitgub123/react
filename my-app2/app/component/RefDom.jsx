"use client";
import { useRef } from "react";
export default function RefDom() {
  const myRef1 = useRef(null);
  function func1(target) {
    console.log("func1", target.value);
    console.log("func2", myRef1.current.value);
    myRef1.current.focus();
  }
  return (
    <>
      <input onChange={(e) => func1(e.target)}></input>
      <br />
      <input ref={myRef1}></input>
      <br />
    </>
  );
}
