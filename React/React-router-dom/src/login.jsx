import "./login.css";
function Login() {
  return (
    <div className="login">
      <h1> Login </h1>
      <form>
        <input className="email-input" type="email" placeholder="Email" />
        <br />
        <input
          className="password-input"
          type="password"
          placeholder="Password"
        />
        <br />
        <input className="submit-btn" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
