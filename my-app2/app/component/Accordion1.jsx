"use client";
import { useState } from "react";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>
        {title}{" "}
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? "hide" : "show"}
        </button>
      </h3>
      {isActive && <p>{children}</p>}
    </section>
  );
}

export default function Accordion1() {
  return (
    <>
      <Panel title="P1-1">One goes home</Panel>
      <Panel title="P1-2">Two is an apple.</Panel>
    </>
  );
}
