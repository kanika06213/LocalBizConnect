import { useState } from "react";
import "./../styles/Admin.css";

function AdminOrders() {

  const [orders, setOrders] = useState([
    { id: 1, user: "Rahul", shop: "Sharma Kirana Store", product: "Basmati Rice", price: 120 },
    { id: 2, user: "Anita", shop: "Gupta General Store", product: "Sugar", price: 40 },
    { id: 3, user: "Ramesh", shop: "QuickFix Plumber", product: "Tap Installation", price: 500 },
    { id: 4, user: "Priya", shop: "Ramesh Electrician", product: "Fan Installation", price: 600 },
    { id: 5, user: "Amit", shop: "Pizza Wings", product: "Veg Pizza", price: 250 },
    { id: 6, user: "Sneha", shop: "Samosa Junction", product: "Samosa Plate", price: 80 },
    { id: 7, user: "Karan", shop: "Garg Medical", product: "Paracetamol", price: 20 },
    { id: 8, user: "Pooja", shop: "Saini Pharmacy", product: "Vitamin Tablets", price: 120 }
  ]);

  function deleteOrder(id) {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  }

  return (
    <div className="admin-container">

      <h1>All Orders</h1>

      <div className="manage-products">

        {orders.map((order) => (
          <div key={order.id} className="product-row">

            <div>
              <h3>{order.product}</h3>
              <p>User: {order.user}</p>
              <p>Shop: {order.shop}</p>
              <p>₹ {order.price}</p>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteOrder(order.id)}
            >
              Remove
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AdminOrders;