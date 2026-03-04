import "./../styles/Vendor.css";

function VendorOrders() {

  const orders = [
    { id: 1, product: "Veg Pizza", customer: "Rahul", price: 250 },
    { id: 2, product: "Cold Coffee", customer: "Anita", price: 120 },
    { id: 3, product: "Pasta Alfredo", customer: "Ramesh", price: 220 }
  ];

  return (
    <div className="vendor-container">

      <h1>Customer Orders</h1>

      <div className="manage-products">

        {orders.map((order) => (
          <div key={order.id} className="product-row">

            <div>
              <h3>{order.product}</h3>
              <p>Customer: {order.customer}</p>
              <p>₹ {order.price}</p>
            </div>

            <button className="delete-btn">
              Mark Completed
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default VendorOrders;