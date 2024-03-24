"use client";
import { useState } from "react";

let b = 22;

export default function TestVariableChangeAfterRender() {
  const [isActive, setIsActive] = useState(false);
  const [c, setC] = useState(33);
  let a = 11;
  function adda() {
    console.log("a,before:", a); //11,11
    console.log("b,before:", b); //22,23
    console.log("c,before:", c); //33,34
    a++;
    b++;
    setC(c + 1);
    setIsActive(!isActive);
    console.log("a,after:", a); //12,12
    console.log("b,after:", b); //23,24
    console.log("c,after:", c); //33,34
  }
  return (
    <>
      <button onClick={adda}>adda</button>
    </>
  );
}
