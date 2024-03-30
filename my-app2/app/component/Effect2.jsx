"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:3001/scripts";

export default function Effect1() {
  const [a, setA] = useState("a");
  const [data, setData] = useState(666);

  function useData(url) {
    useEffect(() => {
      let ignore = false;
      axios.get(url).then((res) => {
        // console.log("Effect2 res: ", res.data);
        if (!ignore) {
          // setData("application");
          setData(res.data.dev);
        }
      });
      // console.log("data: ", data);
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
