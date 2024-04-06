import { Form, useLoaderData, redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log("edit page action@updates:", updates);
  console.log("edit page action@params:", params);
  return redirect(`/contact/${params.contactId}`);
}

export default function EditContact() {
  const { contact } = useLoaderData();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <div>
        <label>
          <span>Twitter</span>
          <input
            type="text"
            name="twitter"
            placeholder="@jack"
            defaultValue={contact.twitter}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Avatar URL</span>
          <input
            placeholder="https://example.com/avatar.jpg"
            aria-label="Avatar URL"
            type="text"
            name="avatar"
            defaultValue={contact.avatar}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Notes</span>
          <textarea name="notes" defaultValue={contact.notes} rows={6} />
        </label>
      </div>
      <p>
        <button type="submit">
          Save
        </button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}
