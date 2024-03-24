"use client";
/* eslint react/no-unescaped-entities */
import Link from "next/link";
import {
  Link as ReactLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Accordion1 from "./component/Accordion1";
import Accordion2 from "./component/Accordion2";
import ClearFormUsingKey1 from "./component/ClearFormUsingKey1";
import ClearFormUsingKey2 from "./component/ClearFormUsingKey2";
import ClearFormUsingKey3 from "./component/ClearFormUsingKey3";
import Effect1 from "./component/Effect1";
import Effect2 from "./component/Effect2";
import Effect2UseMemo from "./component/Effect2UseMemo";
import ForwardRef from "./component/ForwardRef";
import Gallery from "./component/Gallery";
import IfElseCom from "./component/IfElseDemo";
import ListCom from "./component/ListDemo";
import ModifyStateImmediatetly from "./component/ModifyStateImmediatetly";
import RefDom from "./component/RefDom";
import RefDomCallback from "./component/RefDomCallback";
import RefDomCallback2 from "./component/RefDomCallback2";
import TestVariableChangeAfterRender from "./component/TestVariableChangeAfterRender";
import ToolBar from "./component/ToolBar";
import UseImmerList from "./component/UseImmerList";
import UseImmerObj from "./component/UseImmerObj";
import UseStateDemo1 from "./component/UseStateDemo1";
import UseStateListAdd from "./component/UseStateListAdd";
import UseStateListAll from "./component/UseStateListAll";
import UseStateListDel from "./component/UseStateListDel";
import UseStateObj from "./component/UseStateObj";
import UseStateObjNest from "./component/UseStateObjNest";

export default function showAllPage() {
  const title1 = "New My Lily()";
  const style1 = { color: "red" };
  const js1 = { name: "aaa", age: 11 };
  function formatDate(date: number | Date | undefined) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }
  return (
    <>
      <Link href="/showAll">GO to showAll Page</Link> <hr />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <ReactLink to="/">Home</ReactLink>
              </li>
              <li>
                <ReactLink to="/Accordion1">Accordion1</ReactLink>
              </li>
              <li>
                <ReactLink to="/Accordion2">Accordion2</ReactLink>
              </li>
              <li>
                <ReactLink to="/ClearFormUsingKey1">
                  ClearFormUsingKey1
                </ReactLink>
              </li>
              <li>
                <ReactLink to="/ClearFormUsingKey2">
                  ClearFormUsingKey2
                </ReactLink>
              </li>
              <li>
                <ReactLink to="/ClearFormUsingKey3">
                  ClearFormUsingKey3
                </ReactLink>
              </li>
              <li>
                <ReactLink to="/Effect1">Effect1</ReactLink>
              </li>
              <li>
                <ReactLink to="/Effect2">Effect2</ReactLink>
              </li>
              <li>
                <ReactLink to="/Effect2UseMemo">Effect2UseMemo</ReactLink>
              </li>
              <li>
                <ReactLink to="/ForwardRef">ForwardRef</ReactLink>
              </li>
              <li>
                <ReactLink to="/Gallery">Gallery</ReactLink>
              </li>
              <li>
                <ReactLink to="/IfElseCom">IfElseCom</ReactLink>
              </li>
              <li>
                <ReactLink to="/ListCom">ListCom</ReactLink>
              </li>
              <li>
                <ReactLink to="/ModifyStateImmediatetly">
                  ModifyStateImmediatetly
                </ReactLink>
              </li>
              <li>
                <ReactLink to="/RefDom">RefDom</ReactLink>
              </li>
              <li>
                <ReactLink to="/RefDomCallback">RefDomCallback</ReactLink>
              </li>
              <li>
                <ReactLink to="/RefDomCallback2">RefDomCallback2</ReactLink>
              </li>
              <li>
                <ReactLink to="/TestVariableChangeAfterRender">
                  TestVariableChangeAfterRender
                </ReactLink>
              </li>
              <li>
                <ReactLink to="/ToolBar">ToolBar</ReactLink>
              </li>
              <li>
                <ReactLink to="/UseImmerList">UseImmerList</ReactLink>
              </li>
              <li>
                <ReactLink to="/UseImmerObj">UseImmerObj</ReactLink>
              </li>
              <li>
                <ReactLink to="/UseStateDemo1">UseStateDemo1</ReactLink>
              </li>
              <li>
                <ReactLink to="/UseStateListAdd">UseStateListAdd</ReactLink>
              </li>
              <li>
                <ReactLink to="/UseStateListAll">UseStateListAll</ReactLink>
              </li>
              <li>
                <ReactLink to="/UseStateListDel">UseStateListDel</ReactLink>
              </li>
              <li>
                <ReactLink to="/UseStateObj">UseStateObj</ReactLink>
              </li>
              <li>
                <ReactLink to="/UseStateObjNest">UseStateObjNest</ReactLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <ul>
                  <li style={{ color: "green" }}>{title1}</li>
                  <li style={style1}>today is {formatDate(new Date())}</li>
                  <li>Improve the spectrum technology</li>
                </ul>
              }
            />
            <Route path="/Accordion1" element={<Accordion1 />} />
            <Route path="/Accordion2" element={<Accordion2 />} />
            <Route
              path="/ClearFormUsingKey1"
              element={<ClearFormUsingKey1 />}
            />
            <Route
              path="/ClearFormUsingKey2"
              element={<ClearFormUsingKey2 />}
            />
            <Route
              path="/ClearFormUsingKey3"
              element={<ClearFormUsingKey3 />}
            />
            <Route path="/Effect1" element={<Effect1 />} />
            <Route path="/Effect2" element={<Effect2 />} />
            <Route path="/Effect2UseMemo" element={<Effect2UseMemo />} />
            <Route path="/ForwardRef" element={<ForwardRef />} />
            <Route
              path="/Gallery"
              element={<Gallery person={js1} sex="female" />}
            />
            <Route
              path="/IfElseCom"
              element={
                <section>
                  <ul>
                    <IfElseCom name={"name1"} flg={true} />
                    <IfElseCom name={"name2"} flg={false} />
                  </ul>
                </section>
              }
            />
            <Route path="/ListCom" element={<ListCom exclude="c" />} />
            <Route
              path="/ModifyStateImmediatetly"
              element={<ModifyStateImmediatetly />}
            />
            <Route path="/RefDom" element={<RefDom />} />
            <Route path="/RefDomCallback" element={<RefDomCallback />} />
            <Route path="/RefDomCallback2" element={<RefDomCallback2 />} />
            <Route
              path="/TestVariableChangeAfterRender"
              element={<TestVariableChangeAfterRender />}
            />
            <Route path="/ToolBar" element={<ToolBar />} />
            <Route path="/UseImmerList" element={<UseImmerList />} />
            <Route path="/UseImmerObj" element={<UseImmerObj />} />
            <Route path="/UseStateDemo1" element={<UseStateDemo1 />} />
            <Route path="/UseStateListAdd" element={<UseStateListAdd />} />
            <Route path="/UseStateListAll" element={<UseStateListAll />} />
            <Route path="/UseStateListDel" element={<UseStateListDel />} />
            <Route path="/UseStateObj" element={<UseStateObj />} />
            <Route path="/UseStateObjNest" element={<UseStateObjNest />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
