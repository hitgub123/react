"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:3001/scripts";

export default function Effect1() {
  const [a, setA] = useState("a");
  const [data, setData] = useState(666);

  async function fetchData() {
    let ignore = false;
    const res = await axios.get(url);
    console.log("2 Effect2 useDataAsync: ", res.data);
    if (!ignore) {
      setData(res.data.dev);
    }
    return () => {
      ignore = true;
    };
  }

  function useDataAsync(url) {
    useEffect(() => {
      fetchData();
      console.log("3 Effect2");
    }, [url]);
    console.log("1 Effect2 useDataAsync: ", data);
    // return data;
  }

  function useData(url) {
    useEffect(() => {
      let ignore = false;
      axios.get(url).then((res) => {
        console.log("2 Effect2 useData: ", res.data);
        if (!ignore) {
          setData(res.data.dev);
        }
      });
      console.log("3 Effect2");
      return () => {
        ignore = true;
      };
    }, [url]);
    console.log("1 Effect2 useData: ", data);
    // return data;
  }

  return (
    <>
      <p>useData(url):{useDataAsync(url)}</p>
      <p>data:{data}</p>
      <button onClick={() => setA(a + "1")}>modify a={a}</button>
    </>
  );
}
