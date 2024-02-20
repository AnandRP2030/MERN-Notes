import Navbar from "../navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import myImg from "./my-img.jpg";
function Profile() {
  return (
    <div>
      <Navbar />
      <h1>Profile</h1>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={myImg} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
