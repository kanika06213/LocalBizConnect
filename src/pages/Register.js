import "./../styles/Auth.css";

function Register() {
  return (
    <div className="auth-container">
      <h2>Create an Account</h2>

      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <select>
          <option value="">Select Role</option>
          <option value="customer">Customer</option>
          <option value="shopkeeper">Shopkeeper</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;