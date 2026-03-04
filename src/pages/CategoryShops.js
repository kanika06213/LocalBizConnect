import { useParams, Link } from "react-router-dom";
import "./../styles/CategoryShops.css";

function CategoryShops() {
  const { id } = useParams();

  const shopsData = {
    1: [
      { id: 101, name: "Sharma Kirana Store" },
      { id: 102, name: "Gupta General Store" },
      { id: 103, name: "Saini Grocery" },
      { id: 104, name: "Ramesh Grocery" }
    ],
    2: [
      { id: 201, name: "Ramesh Carpenter Services" },
      { id: 202, name: "Saini Woodworks" },
      { id: 203, name: "Sharma Carpentry" },
      { id: 204, name: "Gupta Woodcraft" }
    ],
    3: [
      { id: 301, name: "QuickFix Plumber" },
      { id: 302, name: "Saini Plumbing" },
      { id: 303, name: "Ramesh Plumbing Services" },
      { id: 304, name: "Sharma Plumbers" }
    ],
    4: [
      { id: 401, name: "Ramesh Electrician" },
      { id: 402, name: "Sharma Electrical Services" },
      { id: 403, name: "Gupta Electricians" },
      { id: 404, name: "Saini Electricals" }
    ],
    5: [
      { id: 501, name: "Garg Medical" },
      { id: 502, name: "Saini Pharmacy" },
      { id: 503, name: "Ramesh Medical Store" },
      { id: 504, name: "Sharma Pharmacy" }
    ],
    6: [
      { id: 601, name: "Pizza Wings" },
      { id: 602, name: "Samosa Junction" },
      { id: 603, name: "Ramesh's Ready to Eat" },
      { id: 604, name: "Sharma's Fast Food" }
    ]
  };

  const shops = shopsData[id] || [];

  return (
    <div className="shops-container">
      <h1 className="shops-title">Shops in Category {id}</h1>

      {shops.length === 0 ? (
        <p>No shops available.</p>
      ) : (
        <div className="shops-grid">
          {shops.map((shop) => (
            <Link key={shop.id} to={`/shop/${shop.id}`} className="shop-card">
              <div className="shop-icon">🏪</div>
              <h3>{shop.name}</h3>
              <p className="shop-desc">Trusted local service provider</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryShops;