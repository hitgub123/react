"use client";
function hello() {
  alert("hello");
}
function world() {
  alert("world");
}
function Button1({ callBack, children }) {
  return <button onClick={callBack}>{children}</button>;
}
function ToolBar() {
  return (
    <div>
      <Button1 callBack={hello}> say hello</Button1> <br />
      <Button1 callBack={world}>{"say world"}</Button1> <br />
    </div>
  );
}
export default ToolBar;
