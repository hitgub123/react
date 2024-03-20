// "use server"
import Gallery from "./component/Gallery";
import IfElseCom from "./component/IfElseDemo";
import ListCom from "./component/ListDemo";
import Snapshot from "./component/Snapshot";
import ToolBar from "./component/ToolBar";
import UseStateDemo1 from "./component/UseStateDemo1";
import UseStateObj from "./component/UseStateObj";
import UseStateObjNest from "./component/UseStateObjNest";
import UseImmerObj from "./component/UseImmerObj";
import UseStateListAll from "./component/UseStateListAll";
import UseStateListAdd from "./component/UseStateListAdd";
import UseStateListDel from "./component/UseStateListDel";
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
      <h1>Hedy Lamarr's Todos</h1>

      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      ></img>

      <ul>
        <li style={{ color: "green" }}>{title1}</li>
        <li style={style1}>today is {formatDate(new Date())}</li>
        <li>Improve the spectrum technology</li>
      </ul>

      <a href="https://nextjs.org">Next.js!</a>
      <Gallery person={js1} sex="female" />

      <section>
        <ul>
          <IfElseCom name={"name1"} flg={true} />
          <IfElseCom name={"name2"} flg={false} />
        </ul>
      </section>

      <ListCom exclude="c" />

      <ToolBar />

      <UseStateDemo1 />

      <Snapshot />

      <UseStateObj />
      <UseStateObjNest />
      <UseImmerObj />

      <UseStateListAdd />
      <UseStateListDel />
      <UseStateListAll />
    </>
  );
}
