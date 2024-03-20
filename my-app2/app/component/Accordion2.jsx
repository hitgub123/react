"use client";
import { useState } from "react";

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>
        {title}{" "}
        <button onClick={onShow}>
          {isActive ? "hide" : "show"}
        </button>
      </h3>
      {isActive && <p>{children}</p>}
    </section>
  );
}

export default function Accordion2() {
  const [isActive, setIsActive] = useState(false);
  const switchActiveInChild = () => setIsActive(!isActive);

  return (
    <>
      <Panel title="P2-1" isActive={isActive} onShow={switchActiveInChild}>
        One goes home
      </Panel>
      <Panel title="P2-2" isActive={isActive} onShow={switchActiveInChild}>
        Two is an apple.
      </Panel>
      <Panel title="P2-3" isActive={!isActive} onShow={switchActiveInChild}>
        Three dogs bark.
      </Panel>
    </>
  );
}
