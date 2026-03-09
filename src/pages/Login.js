import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Auth.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    const result = onLogin({ email, password });
    if (!result.success) {
      setError(result.message || "Login failed");
      return;
    }

    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Login to LocalBizConnect</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit">Login</button>
      </form>

      <p className="hint">Demo user: demo@localbiz.com / demo123</p>
    </div>
  );
}

export default Login;
