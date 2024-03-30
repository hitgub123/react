"use client";

function Son(props) {
  return <div>this is son,{props.children}</div>;
}
export default function Children1() {
  return (
    <Son>
      <span>from parent1</span>
      <span>from parent2</span>
    </Son>
  );
}
