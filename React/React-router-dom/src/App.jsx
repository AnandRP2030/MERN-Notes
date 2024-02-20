import Navbar from "./navbar.jsx";
import Login from "./login.jsx";
import Button from 'react-bootstrap/Button';
import Car from "./20/car.jsx"
import "./App.css";

function App() {
  return (
    <div className="main">
      <Navbar />
      {/* <Login /> */}
      <h1>Home page </h1>

      <Button variant="primary">Primary</Button>{' '}

      <Car />
    </div>
  );
}

export default App;
