"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function HeroForm() {
  const [username, setUsername] = useState("");

  async function handleSubmit(ev) {
    ev.preventDefault();
    console.log({ username });
    if (username.length > 0) {
      window.localStorage.setItem("desiredUsername", username);
      signIn("google");
    }
    // another way to file input data
    // const form_data = ev.target;
    // const input = form_data.querySelector("input");
    // console.log(input.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center shadow-lg shadow-gray-700/20"
    >
      <span className="bg-white py-4 pl-4">linkhub.to/</span>
      <input
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        type="text"
        className="py-4"
        placeholder="username"
      />
      <button type="submit" className="bg-blue-500 text-white px-6 py-4">
        Join for Free
      </button>
    </form>
  );
}
