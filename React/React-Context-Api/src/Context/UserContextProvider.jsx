import { useState } from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  console.log("childrens", children);
  const [user, setUser] = useState({});
  const theme = "dark";
  return (
    <UserContext.Provider value={{ user, setUser, theme }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
