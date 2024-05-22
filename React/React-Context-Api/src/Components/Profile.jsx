import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
export default function Profile() {
  const { user } = useContext(UserContext);
  console.log("user", user);
  useEffect(() => {
    console.log("user", user);
  }, [user]);
  return (
    <>
      <h1>Profile Page</h1>
      {user && (
        <>
          <h1>Username: {user}</h1>
        </>
      )}
    </>
  );
}
