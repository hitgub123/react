"use client";
import { useState } from "react";
function useHook1() {
  const [v, setV] = useState(0);
  const addV = (x) => setV(Number(x) + v);
  return [v, addV];
}

export default function UseHook() {
  const [a, b] = useHook1();
  const [c, setC] = useState(1);
  return (
    <>
      <p>this is {a}</p>
      <input onChange={(e)=>setC(e.target.value)} value={c} />
      <button onClick={() => b(c)}>bbb</button>
    </>
  );
}
