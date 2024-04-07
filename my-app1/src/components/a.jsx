import { useOutletContext } from "react-router-dom";

export async function actionA(request, params) {
  console.log(request.params, "A action@params:", params);
  if (request.params.contactId === "2") throw new Error("actionA error!");
  return null;
}

export default function A() {
  const { q } = useOutletContext();
  console.log("A",q)
  return (
    <>
      <h1>AAA page</h1>
      <p >the parameter is {q}</p>
    </>
  );
}
