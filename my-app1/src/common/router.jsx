import { Form, Link, Outlet, useLoaderData } from "react-router-dom";
import { getContacts, getTvs } from "../data/db";

export async function loader() {
  const contacts = await getContacts();
  const tvs = await getTvs();
  return { contacts: contacts.data, tvs: tvs.data };
}

export async function action(request, params) {
  // let formData = await request.formData();
  // let name = formData.get("name");
  console.log('router action');
  return null;
}

export default function Router() {
  const { contacts, tvs } = useLoaderData();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form method="post" action="/a">
            <input type="text" name="name" defaultValue={tvs[0].name} />
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
                  <Link to={`contact/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
