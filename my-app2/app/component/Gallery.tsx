import React from "react";
import Profile from "./Profile";
interface GalleryProps {
  person: { name?: string; age?: number };
  sex?: string;
}
const js1 = { name: "bbb", age: 22 };
const prop1 = { person: js1  ,sex:'girl' };
const Gallery: React.FC<GalleryProps> = (prop: GalleryProps = prop1) => {
  return (
    <>
      <h2 style={{ color: "red" }}>{"name:" + prop.person.name}</h2>
      <h2>{"age:" + prop.person.age}</h2>
      <hr />
      <h2>{"sex:" + prop.sex}</h2>
      <Profile />
    </>
  );
};
export default Gallery;
