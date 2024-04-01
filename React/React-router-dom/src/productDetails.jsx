import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export const UserDetails = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    getuser();
  }, []);
  const getuser = async () => {
    try {
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      setUserData(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  console.log("id", userData);
  return (
    <div>
      <h1> User details </h1>
      {!userData && <h1> Loading..</h1>}
      <h1> Name: {userData?.name} </h1>
      <h1> Name: {userData?.username} </h1>
      <h1> Email: {userData?.email} </h1>
      <h1> number: {userData?.phone} </h1>
      <h1> Name: {userData?.website} </h1>
    </div>
  );
};
