import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar({ cart = [] }) {
  return (
    <nav className="navbar">
      <h2 className="logo">LocalBizConnect</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/vendor/dashboard">Vendor</Link>
        <Link to="/admin/dashboard">Admin</Link>
      
      </div>
    </nav>
  );
}

export default Navbar;