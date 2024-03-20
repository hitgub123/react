'use client'
function hello() { alert('hello') }
function world(){alert('world')}
function Button1({ callBack, children }) {
  return (<button onClick={callBack}>{children}</button>);
}
function ToolBar() {
  return (
    <div>
      <Button1 callBack={hello} children="say hello"/><br/>
      <Button1 callBack={world} children="say world"/><br/>
    </div>
  )
}
export default ToolBar;