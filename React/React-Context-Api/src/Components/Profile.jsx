import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
export default function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Profile Page</h1>
      {user && (
        <>
          <h1>Username: {user.username}</h1>
        </>
      )}
    </>
  );
}
