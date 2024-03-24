"use client";
import { useState,useMemo } from "react";

export default function Effect2UseMemo() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  // let c = func2(b);
  let c = useMemo(() => func2(b), [b]);

  function func2(x) {
    const res = x ** 2;
    console.log("func2 called", res);
    return res;
  }

  return (
    <>
      <button onClick={() => setA(a + 1)}>set a</button>
      <p>{c}</p>
      <button onClick={() => setB(b + 1)}>set b</button>
    </>
  );
}
