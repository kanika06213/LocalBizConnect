import { Link } from "react-router-dom";
import "./../styles/Vendor.css";

function VendorDashboard() {
  return (
    <div className="vendor-container">

      <h1>Vendor Dashboard</h1>

      <div className="vendor-grid">

        <Link to="/vendor/add-product" className="vendor-card">
          <h3>Add Product</h3>
          <p>Add new items to your shop</p>
        </Link>

        <Link to="/vendor/manage-products" className="vendor-card">
          <h3>Manage Products</h3>
          <p>Edit or delete your products</p>
        </Link>

        <Link to="/vendor/orders" className="vendor-card">
          <h3>View Orders</h3>
          <p>See customer orders</p>
        </Link>

      </div>

    </div>
  );
}

export default VendorDashboard;