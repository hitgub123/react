"use client";
import { useRef, useState } from "react";

const ulStyle = {
  height: "auto",
  overflow: "hidden",
  "overflow-x": "auto",
  "white-space": "nowrap",
  width: "auto",
};
const liStyle = {
  display: "inline-block",
};

export default function RefDomCallback() {
  const itemsRef = useRef(null);
  const [ignored, setIgnored] = useState(0);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function forceUpdate() {
    setIgnored(ignored + 1);
  }

  return (
    <>
      <nav>
        {catList.map((cat) => (
          <button key={cat.id} onClick={() => scrollToId(cat.id)}>
            {"go to "} {cat.id}
          </button>
        ))}
      </nav>
      <div>
        <ul style={ulStyle}>
          {catList.map((cat) => (
            <li
              style={liStyle}
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img src={cat.imageUrl} alt={"Cat #" + cat.id} />
              <button
                key={cat.id}
                onClick={() => {
                  catList = catList.filter((item) => item.id !== cat.id);
                  forceUpdate();
                }}
              >
                del {"id=cat "} {cat.id}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

let catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl:
      "https://konachan.net/data/preview/9c/47/9c4749a49aa0c34af7f6fcfba3543ed8.jpg",
  });
}
