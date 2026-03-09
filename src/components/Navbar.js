import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar({ cart = [], user, onLogout }) {
  return (
    <nav className="navbar">
      <h2 className="logo">LocalBizConnect</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {user ? (
          <>
            <span className="nav-user">Hi, {user.name}</span>
            <button className="link-button" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/vendor/dashboard">Vendor</Link>
        <Link to="/admin/dashboard">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
