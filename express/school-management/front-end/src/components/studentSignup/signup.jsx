import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from 'axios';

export function StudentSignup() {
  const [validated, setValidated] = useState(false);
  const [studentData, setStudentData] = useState({
    name: "name",
    gender: "Male",
    email: "abc@gmail.com",
    age: "3",
    password: "12341234",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  console.log("student data", studentData);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    const {name, age, gender, email , password} = studentData;

    if (!name || !age || !gender || !email || !password) {
      alert("etner all details");
      return;
    }

    sendDataToServer()

  };
  const sendDataToServer =  async () => {
    try {

      let res = await axios.post('http://localhost:3000/student/create', studentData);
      console.log("resp ", res)

      if (res.status === 200) {
        alert("Signup sucesful")
        // Navigate()
        // todo navigate to login page 
      }
      
    }catch(err) {
      console.log("eRr on on send data to server",err)
    }
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChanges}
            placeholder="Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChanges}
            value={studentData.email}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Age</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              required
              type="text"
              placeholder="Age"
              name="age"
              onChange={handleChanges}
              value={studentData.age}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChanges}
            value={studentData.password}
          />
          <Form.Control.Feedback type="invalid">enter password!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Select required onChange={handleChanges} name="gender">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            Please choose a gender.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
