"use client";
import { useRef, useState } from "react";
//use useState to modify items

const ulStyle = {
  height: "auto",
  overflow: "hidden",
  overflowX: "auto",
  whiteSpace: "nowrap",
  width: "auto",
};
const liStyle = {
  display: "inline-block",
};

export default function RefDomCallback() {
  const itemsRef = useRef(new Map());
  const [items, setItems] = useState(catList);

  function scrollToId(itemId) {
    const node = itemsRef.current.get(itemId);
    console.log(node);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        {items.map((cat) => (
          <button key={cat.id} onClick={() => scrollToId(cat.id)}>
            {"go to "} {cat.id}
          </button>
        ))}
      </nav>
      <div>
        <ul style={ulStyle}>
          {items.map((cat) => (
            <li
              style={liStyle}
              key={cat.id}
              ref={(node) => {
                if (node) {
                  itemsRef.current.set(cat.id, node);
                } else {
                  itemsRef.current.delete(cat.id);
                }
              }}
            >
              <img src={cat.imageUrl} alt={"Cat #" + cat.id} />
              <button
                key={cat.id}
                onClick={() =>
                  setItems(items.filter((item) => item.id !== cat.id))
                }
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
