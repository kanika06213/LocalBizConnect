import "./../styles/Auth.css";

function Login() {
  return (
    <div className="auth-container">
      <h2>Login to LocalBizConnect</h2>

      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;