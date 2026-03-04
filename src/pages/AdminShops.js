import { useState } from "react";
import "./../styles/Admin.css";

function AdminShops() {

  const [shops, setShops] = useState([
    { id: 101, name: "Sharma Kirana Store", category: "Grocery" },
    { id: 102, name: "Gupta General Store", category: "Grocery" },
    { id: 103, name: "Saini Grocery", category: "Grocery" },
    { id: 104, name: "Ramesh Grocery", category: "Grocery" },

    { id: 201, name: "Ramesh Carpenter Services", category: "Carpenter" },
    { id: 202, name: "Saini Woodworks", category: "Carpenter" },
    { id: 203, name: "Sharma Carpentry", category: "Carpenter" },
    { id: 204, name: "Gupta Woodcraft", category: "Carpenter" },

    { id: 301, name: "QuickFix Plumber", category: "Plumber" },
    { id: 302, name: "Saini Plumbing", category: "Plumber" },
    { id: 303, name: "Ramesh Plumbing Services", category: "Plumber" },
    { id: 304, name: "Sharma Plumbers", category: "Plumber" },

    { id: 401, name: "Ramesh Electrician", category: "Electrician" },
    { id: 402, name: "Sharma Electrical Services", category: "Electrician" },
    { id: 403, name: "Gupta Electricians", category: "Electrician" },
    { id: 404, name: "Saini Electricals", category: "Electrician" },

    { id: 501, name: "Garg Medical", category: "Medicine" },
    { id: 502, name: "Saini Pharmacy", category: "Medicine" },
    { id: 503, name: "Ramesh Medical Store", category: "Medicine" },
    { id: 504, name: "Sharma Pharmacy", category: "Medicine" },

    { id: 601, name: "Pizza Wings", category: "Ready to Eat" },
    { id: 602, name: "Samosa Junction", category: "Ready to Eat" },
    { id: 603, name: "Ramesh's Ready to Eat", category: "Ready to Eat" },
    { id: 604, name: "Sharma's Fast Food", category: "Ready to Eat" }
  ]);

  function deleteShop(id) {
    const updatedShops = shops.filter((shop) => shop.id !== id);
    setShops(updatedShops);
  }

  return (
    <div className="admin-container">

      <h1>Manage Shops</h1>

      <div className="manage-products">

        {shops.map((shop) => (
          <div key={shop.id} className="product-row">

            <div>
              <h3>{shop.name}</h3>
              <p>Category: {shop.category}</p>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteShop(shop.id)}
            >
              Remove
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AdminShops;