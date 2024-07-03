import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [count, setCount] = useState(0);
  const [myFile, setMyFile] = useState(null);

  const handleChanges = (e) => {
    const file = e.target.files[0];
    setMyFile(file);
  };

  const handleSbbmit = (e) => {
    e.preventDefault();
    if (!myFile) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("profilePicture", myFile);
    sendData(formData);
  };
  const sendData = async (formData) => {
    const res = await axios.post("http://localhost:8050/user/signup", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    if (res.status === 200) {
      alert("Signup success");
      // rest of the logic
    } else {
      alert("signup failed");
    }
  };
  return (
    <>
      <form onSubmit={handleSbbmit}>
        <input
          onChange={handleChanges}
          type="file"
          placeholder="Number of speakers"
          name="nspeakers"
        />
        <input type="submit" value="upload photo" class="btn btn-default" />
      </form>
    </>
  );
}

export default App;
