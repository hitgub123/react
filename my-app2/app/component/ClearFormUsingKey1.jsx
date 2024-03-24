"use client";
import { useState } from "react";

function TextFieldWillNotReset() {
  const [text, setText] = useState("");
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

export default function ClearFormUsingKey1() {
  const [counter, setCounter] = useState(0);
  function TextFieldWillReset() {
    const [text, setText] = useState("");
    return <input value={text} onChange={(e) => setText(e.target.value)} />;
  }

  return (
    <>
      <TextFieldWillNotReset />
      <TextFieldWillReset />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times in P1
      </button>
    </>
  );
}
