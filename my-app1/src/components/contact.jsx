import { useEffect, useState } from "react";
import { Form, useFetcher, useLoaderData } from "react-router-dom";

import { getContact } from "../data/db";

export async function loader({ params }) {
  let contact;
  try {
    contact = await getContact(params.contactId);
  } catch (e) {
    console.log("await getContact Error");
  }
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found Contact",
    });
  }
  return { contact: contact.data };
}

export async function action({ request, params }) {
  let formData = await request.formData();
  console.log("Contact action favorite:", formData.get("favorite"));
  return null;
}

export default function Contact(props) {
  const { contact } = useLoaderData();
  //useState(contact.favorite) does not work,should use useEffect
  // const [favor, setFavor] = useState(contact.favorite);
  const [favor, setFavor] = useState();
  // console.log(contact, favor);

  useEffect(() => {
    setFavor(contact.favorite);
  }, [contact.favorite, contact.id]);

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          {/* <Favorite contact={contact} /> */}
          <Favorite favor={favor} cb={setFavor} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form method="post" action="destroy">
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite(props) {
  const fetcher = useFetcher();
  console.log("favorite", props.favor);

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={props.favor ? "false" : "true"}
        onClick={() => props.cb(!props.favor)}
        aria-label={props.favor ? "Remove from favorites" : "Add to favorites"}
      >
        {props.favor ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
// function Favorite({ contact }) {
//   let favorite = contact.favorite;
//   return (
//     <Form method="post">
//       <button
//         name="favorite"
//         value={favorite ? "false" : "true"}
//         aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
//       >
//         {favorite ? "★" : "☆"}
//       </button>
//     </Form>
//   );
// }
