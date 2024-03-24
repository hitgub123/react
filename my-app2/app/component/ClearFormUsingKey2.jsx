"use client";
import { useState } from "react";
import ClearFormUsingKey1 from "./ClearFormUsingKey1";

export default function ClearFormUsingKey2() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <ClearFormUsingKey1 />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times in P2
      </button>
    </>
  );
}
