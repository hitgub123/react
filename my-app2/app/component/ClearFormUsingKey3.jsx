"use client";
import { useState } from "react";

export default function ClearFormUsingKey3() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  const [isPlayerC, setIsPlayerC] = useState(true);
  const [key1, setKey1] = useState("key1");
  return (
    <>
      <div>
        {isPlayerA ? <Counter person="Alisa" /> : <Counter person="Bush" />}
        <button
          onClick={() => {
            setIsPlayerA(!isPlayerA);
          }}
        >
          Next player!
        </button>
      </div>
      <hr />
      <div>
        {isPlayerC ? (
          <Counter person="Cater" key="Cater" />
        ) : (
          <Counter person="Dog" key="Dog" />
        )}
        <button
          onClick={() => {
            setIsPlayerC(!isPlayerC);
          }}
        >
          Next player!
        </button>
      </div>
      <hr />
      <div>
        <Counter person="key-name1" key={key1} />
        <button
          onClick={() => {
            setKey1(key1 + "1");
          }}
        >
          modify key1
        </button>
      </div>
    </>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>
        {person}'s score: {score}
      </h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
