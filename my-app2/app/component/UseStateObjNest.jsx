"use client";
import { useState } from "react";

export default function UseStateObjNest() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    profile: { age: 11, email: "bhepworth@sculpture.com" },
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeProfile(e) {
    setPerson({
      ...person,
      profile: {
        ...person.profile,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          name="age"
          value={person.profile.age}
          onChange={handleChangeProfile}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.profile.email}
          onChange={handleChangeProfile}
        />
      </label>
      <p>
        {person.firstName} {person.lastName} {person.profile.age}
        {" years "}({person.profile.email})
      </p>
    </>
  );
}
