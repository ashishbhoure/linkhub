"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function LogOutButton() {
  return (
    <button className="flex items-center gap-2 border p-2 px-4 " onClick={() => signOut()}>
      <span>Logout</span>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
}
