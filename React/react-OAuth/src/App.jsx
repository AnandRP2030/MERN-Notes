import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  console.log("user", user);
  const responseMsg = (response) => {
    console.log(response);
  };
  const errMsg = (err) => {
    console.log(err);
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login failed", error),
  });
  const logout = () => {
    googleLogout();
    setProfile(null);
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      );

      console.log("data", res.data);
      setProfile(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      {profile ? (
        <>
          <img src={profile.picture} alt="pro-pic" />
          <h2>{profile.name} </h2>
          <h2>{profile.email} </h2>

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={login}>Login with google</button>
        </>
      )}
      {/* <div>
        <button> Login with google </button>
        <GoogleLogin onSuccess={responseMsg} onError={errMsg} />
      </div> */}
    </>
  );
}

export default App;
