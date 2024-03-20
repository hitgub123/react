"use client";
import { useState } from "react";
let nextId = 0;
export default function UseStateListAdd() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]); //add at end
          // setArtists(artists.concat([{ id: nextId++, name: name }])); //add at end
          // setArtists([{ id: nextId++, name: name }, ...artists]); //add at first
          // setArtists([{ id: nextId++, name: name }].concat(artists));//add at first
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
