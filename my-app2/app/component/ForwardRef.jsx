"use client";
import { forwardRef, useRef } from "react";

const MyInput = forwardRef(function forwardRefMyInput(props, ref) {
  return <input {...props} ref={ref} />;
});

// Function components cannot be given refs.
//Attempts to access this ref will fail.Did you mean to use React.forwardRef() ?
// const MyInput = (props) => <input {...props} />;

export default function ForwardRef() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
