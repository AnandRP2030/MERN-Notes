import "./navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  function redirectLogin () {
    navigate('/login')
  }

  function redirectHome() {
    navigate('/')
  }

  function redirectProfile() {
    navigate('/profile')
  }
  
  return (
    <div className="navbar">
      <h1 onClick={redirectHome}> Logo </h1>

      <h4 className="nav-items" onClick={redirectHome}> Home </h4>
      <h4 className="nav-items" onClick={redirectProfile}> Profile </h4>
      <h4 className="nav-items"> Contact </h4>
      <div className="btn-container">
        <button className="btns"> Signup </button>
        <button className="btns" onClick={redirectLogin}> Login</button>
      </div>
    </div>
  );
}

export default Navbar;
