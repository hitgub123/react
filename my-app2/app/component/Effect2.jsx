"use client";
import { useEffect, useState } from "react";
const url = "https://react.docschina.org/learn/you-might-not-need-an-effect";

export default function Effect1() {
  const [a, setA] = useState("a");
  const [data, setData] = useState(666);

  function useData(url) {
    useEffect(() => {
      let ignore = false;
      fetch(url).then(() => {
        if (!ignore) {
          setData("application");
        }
      });
      console.log("data: ", data);
      return () => {
        ignore = true;
      };
    }, [url]);
    // return data;
  }

  return (
    <>
      <p>useData(url):{useData(url)}</p>
      <p>data:{data}</p>
      <button onClick={() => setA(a + "1")}>modify a={a}</button>
    </>
  );
}
