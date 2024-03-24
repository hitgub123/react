// "use server"
/* eslint react/no-unescaped-entities */
import Accordion1 from "./component/Accordion1";
import Accordion2 from "./component/Accordion2";
import ClearFormUsingKey1 from "./component/ClearFormUsingKey1";
import ClearFormUsingKey2 from "./component/ClearFormUsingKey2";
import ClearFormUsingKey3 from "./component/ClearFormUsingKey3";
import Gallery from "./component/Gallery";
import IfElseCom from "./component/IfElseDemo";
import ListCom from "./component/ListDemo";
import Snapshot from "./component/Snapshot";
import ToolBar from "./component/ToolBar";
import UseImmerList from "./component/UseImmerList";
import UseImmerObj from "./component/UseImmerObj";
import UseStateDemo1 from "./component/UseStateDemo1";
import UseStateListAdd from "./component/UseStateListAdd";
import UseStateListAll from "./component/UseStateListAll";
import UseStateListDel from "./component/UseStateListDel";
import UseStateObj from "./component/UseStateObj";
import UseStateObjNest from "./component/UseStateObjNest";
import TestVariableChangeAfterRender from "./component/TestVariableChangeAfterRender";
import RefDom from "./component/RefDom";
import RefDomCallback from "./component/RefDomCallback";
import RefDomCallback2 from "./component/RefDomCallback2";
export default function Gallery1() {
  const title1 = "New My Lily()";
  const style1 = { color: "red" };
  const js1 = { name: "aaa", age: 11 };
  function formatDate(date: number | Date | undefined) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }
  function hello() {
    alert("hello");
  }
  return (
    <>
      <h1>################style################</h1>
      <ul>
        <li style={{ color: "green" }}>{title1}</li>
        <li style={style1}>today is {formatDate(new Date())}</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <h1>################Gallery################</h1>
      <a href="https://nextjs.org">Next.js!</a>
      <Gallery person={js1} sex="female" />

      <h1>################IfElseCom################</h1>
      <section>
        <ul>
          <IfElseCom name={"name1"} flg={true} />
          <IfElseCom name={"name2"} flg={false} />
        </ul>
      </section>
      <h1>################ListCom################</h1>
      <ListCom exclude="c" />
      <h1>################ToolBar################</h1>
      <ToolBar />
      <h1>################UseStateDemo1################</h1>
      <UseStateDemo1 />
      <h1>################Snapshot################</h1>
      <Snapshot />
      <h1>################UseStateObj################</h1>
      <UseStateObj />
      <h1>################UseStateObjNest################</h1>
      <UseStateObjNest />
      <h1>################UseImmerObj################</h1>
      <UseImmerObj />
      <h1>################UseStateListAdd################</h1>
      <UseStateListAdd />
      <h1>################UseStateListDel################</h1>
      <UseStateListDel />
      <h1>################UseStateListAll################</h1>
      <UseStateListAll />
      <h1>################UseImmerList################</h1>
      <UseImmerList />
      <h1>################Accordion1################</h1>
      <Accordion1 />
      <h1>################Accordion2################</h1>
      <Accordion2 />
      <h1>################ClearFormUsingKey1################</h1>
      <ClearFormUsingKey1 />
      <h1>################ClearFormUsingKey2################</h1>
      <ClearFormUsingKey2 />
      <h1>################ClearFormUsingKey3################</h1>
      <ClearFormUsingKey3 />
      <h1>################TestVariableChangeAfterRender################</h1>
      <TestVariableChangeAfterRender />
      <h1>################RefDom################</h1>
      <RefDom />
      <h1>################RefDomCallback################</h1>
      <RefDomCallback />
      <h1>################RefDomCallback2################</h1>
      <RefDomCallback2 />
    </>
  );
}
