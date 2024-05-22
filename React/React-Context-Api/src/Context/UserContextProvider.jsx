import { useState } from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  console.log("childrens", children);
  const [user, setUser] = useState("");

  const updateUserValue = (newUserName) => {
    setUser(newUserName);
  };
  return (
    <UserContext.Provider value={{ user, updateUserValue }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
