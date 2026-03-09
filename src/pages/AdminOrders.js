import { useEffect, useState } from "react";
import "./../styles/Admin.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [newOrder, setNewOrder] = useState({
    user: "",
    shop: "",
    product: "",
    price: "",
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) throw new Error("Failed to load orders");
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  function onChangeField(field, value) {
    setNewOrder((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function addOrder(event) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newOrder,
          price: Number(newOrder.price),
        }),
      });

      if (!response.ok) throw new Error("Could not create order");

      const created = await response.json();
      setOrders((prev) => [created, ...prev]);
      setNewOrder({ user: "", shop: "", product: "", price: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function deleteOrder(id) {
    setError(null);

    try {
      const response = await fetch(`/api/orders/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Could not delete order");
      setOrders((prev) => prev.filter((order) => order.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="admin-container">
      <h1>All Orders</h1>

      <form className="order-form" onSubmit={addOrder}>
        <div className="order-form-row">
          <input
            value={newOrder.user}
            onChange={(e) => onChangeField("user", e.target.value)}
            placeholder="Customer name"
            required
          />
          <input
            value={newOrder.shop}
            onChange={(e) => onChangeField("shop", e.target.value)}
            placeholder="Shop name"
            required
          />
          <input
            value={newOrder.product}
            onChange={(e) => onChangeField("product", e.target.value)}
            placeholder="Product / service"
            required
          />
          <input
            value={newOrder.price}
            onChange={(e) => onChangeField("price", e.target.value)}
            placeholder="Price"
            type="number"
            min="0"
            required
          />
          <button type="submit" disabled={submitting}>
            {submitting ? "Saving…" : "Add order"}
          </button>
        </div>
      </form>

      {loading ? (
        <p>Loading orders…</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
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
      )}
    </div>
  );
}

export default AdminOrders;