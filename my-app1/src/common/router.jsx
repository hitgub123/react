import {
  Form,
  Link,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { getContacts, getTvs } from "../data/db";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  console.log("root q=", q);
  const contacts = await getContacts();
  const tvs = await getTvs();
  return { contacts: contacts.data, tvs: tvs.data, q: q };
}

export async function action() {
  return redirect(`/b`);
}

export default function Root() {
  const { contacts, tvs, q } = useLoaderData();
  const navigation = useNavigation();
  const doSubmit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  return (
    <>
      <div id="sidebar">
        <h1>React Root Contacts</h1>
        <div>
          {/* <Form method="post" action="/a"> */}
          <Form method="get">
            <input
              type="text"
              name="q"
              className={searching ? "loading" : ""}
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                doSubmit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching} //添加hidden
            />
            <button type="submit">GET</button>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contact/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
        <div>{navigation.state}</div>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet context={{ q: q }} />
      </div>
    </>
  );
}
