import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Auth.css";

function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    const result = onRegister({ name, email, password, role });
    if (!result.success) {
      setError(result.message ? result.message : "Registration failed");
      return;
    }

    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="customer">Customer</option>
          <option value="shopkeeper">Shopkeeper</option>
        </select>

        {error && <p className="error-text">{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
