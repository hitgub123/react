"use client";
import { useState } from "react";
let nextNo = 100;
export default function UseStateListAll() {
  const [name, setName] = useState("");
  const [sortByNoFlg, setSortByNoFlg] = useState(true);
  const [artists, setArtists] = useState([]);

  function delArtist(idx) {
    setArtists(artists.filter((a, i) => idx !== i));
  }

  function updateArtist(idx) {
    setArtists(
      artists.map((a, i) => {
        if (idx !== i) return a;
        //ok,but never use it because changing the value,
        //if someone else use the value,it will lead to a bug
        // a.name = a.name + "up!";
        // return a;
        return { ...a, name: a.name + "up!" }; //ok
      })
    );
  }

  function addArtist(idx, name) {
    setArtists([
      ...artists.slice(0, idx),
      // New item:
      { No: nextNo++, name: name },
      // Items after the insertion point:
      ...artists.slice(idx),
    ]);
  }

  function upArtist(idx) {
    if (idx === 0) return;
    setArtists([
      ...artists.slice(0, idx - 1),
      artists[idx],
      artists[idx - 1],
      ...artists.slice(idx + 1),
    ]);
  }

  function downArtist(idx) {
    if (idx === artists.length - 1) return;
    setArtists([
      ...artists.slice(0, idx),
      artists[idx + 1],
      artists[idx],
      ...artists.slice(idx + 2),
    ]);
  }

  function sortByNo() {
    let artistsTmp = [...artists];
    let sortByNoFlgTmp = !sortByNoFlg;
    if (sortByNoFlgTmp) {
      artistsTmp.sort((a, b) => a.No - b.No);
    } else {
      artistsTmp.sort((a, b) => -a.No + b.No);
    }
    setArtists(artistsTmp);
    setSortByNoFlg(sortByNoFlgTmp);
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { No: nextNo++, name: name }]);
          // setArtists(artists.concat([{ No: nextNo++, name: name }]));
        }}
      >
        Add
      </button>{" "}
      <button onClick={sortByNo}>
        SortByNo<b>{sortByNoFlg ? "↑" : "↓"}</b>
      </button>{" "}
      <ul>
        {artists.map((artist, i) => (
          <li key={i}>
            {artist.No} {":"} {artist.name}
            <button onClick={() => delArtist(i)}>del</button>{" "}
            <button onClick={() => updateArtist(i)}>update</button>{" "}
            <button onClick={() => addArtist(i, name)}>add</button>{" "}
            <button onClick={() => upArtist(i)}>↑up</button>{" "}
            <button onClick={() => downArtist(i)}>↓down</button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
