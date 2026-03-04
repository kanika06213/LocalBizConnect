import { Link } from "react-router-dom";
import "./../styles/Admin.css";

function AdminDashboard() {
  return (
    <div className="admin-container">

      <h1>Admin Dashboard</h1>

      <div className="admin-grid">

        <Link to="/admin/shops" className="admin-card">
          <h3>Manage Shops</h3>
          <p>View and manage all vendor shops</p>
        </Link>

        <Link to="/admin/users" className="admin-card">
          <h3>Manage Users</h3>
          <p>View registered customers</p>
        </Link>

        <Link to="/admin/orders" className="admin-card">
          <h3>All Orders</h3>
          <p>View all platform orders</p>
        </Link>

      </div>

    </div>
  );
}

export default AdminDashboard;