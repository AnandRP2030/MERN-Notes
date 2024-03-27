import { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("Abcd");
  const [email, setEmail] = useState("abcd@gmail.com");
  const [password, setPassword] = useState("12341234");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitt", name, email, password);

    let obj = {
      name,
      email,
      password,
    };
    sendData(obj);
  }

  async function sendData(obj) {
    try {
      let res = await axios.post("http://localhost:8000/student/signup", obj);
      console.log("res", res);
      if (res.status === 200) {
        alert("Signup success");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1> Signup`</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" password="exampleForm.ControlInput1">
          <Form.Label>Passwords</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <button>Signup </button>
      </Form>
    </div>
  );
}

export default Signup;
