import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <h1> Logo </h1>

      <h4 className="nav-items"> Home </h4>
      <h4 className="nav-items"> About</h4>
      <h4 className="nav-items"> Contact </h4>
      <div className="btn-container">
        <button className="btns"> Signup </button>
        <button className="btns"> Login</button>
      </div>
    </div>
  );
}

export default Navbar;
