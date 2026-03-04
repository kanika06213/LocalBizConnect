import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./../styles/ShopProducts.css";

function ShopProducts({cart, setCart}) {
  const { id } = useParams();

  const shopProductsData = {
    101: [
      { id: 1, name: "Basmati Rice", price: 120 },
      { id: 2, name: "Wheat Flour", price: 45 },
      { id: 3, name: "Sugar", price: 40 },
      { id: 4, name: "Mustard Oil", price: 150 }
    ],

    102: [
      { id: 5, name: "Toor Dal", price: 110 },
      { id: 6, name: "Salt Pack", price: 20 },
      { id: 7, name: "Tea Powder", price: 180 },
      { id: 8, name: "Biscuits", price: 30 }
    ],
    103: [
      { id: 1, name: "Basmati Rice", price: 120 },
      { id: 2, name: "Wheat Flour", price: 45 },    
        { id: 3, name: "Sugar", price: 40 },
        { id: 4, name: "Mustard Oil", price: 150 }
    ],
    104: [
      { id: 5, name: "Toor Dal", price: 110 },
      { id: 6, name: "Salt Pack", price: 20 },
      { id: 7, name: "Tea Powder", price: 180 },
      { id: 8, name: "Biscuits", price: 30 }
    ],

    201: [
      { id: 9, name: "Door Installation", price: 2500 },
      { id: 10, name: "Furniture Repair", price: 1500 },
      { id: 11, name: "Wood Polishing", price: 1200 },
      { id: 12, name: "Custom Shelf Making", price: 3000 }
    ],
    202: [
      { id: 9, name: "Door Installation", price: 2500 },
      { id: 10, name: "Furniture Repair", price: 1500 },
        { id: 11, name: "Wood Polishing", price: 1200 },
        { id: 12, name: "Custom Shelf Making", price: 3000 }
    ],
    203: [
        { id: 9, name: "Door Installation", price: 2500 },
        { id: 10, name: "Furniture Repair", price: 1500 },
        { id: 11, name: "Wood Polishing", price: 1200 },
        { id: 12, name: "Custom Shelf Making", price: 3000 }
    ],
    204: [
        { id: 9, name: "Door Installation", price: 2500 },
        { id: 10, name: "Furniture Repair", price: 1500 },
        { id: 11, name: "Wood Polishing", price: 1200 },
        { id: 12, name: "Custom Shelf Making", price: 3000 }
    ],

    301: [
      { id: 13, name: "Pipe Leakage Repair", price: 800 },
      { id: 14, name: "Tap Installation", price: 500 },
      { id: 15, name: "Bathroom Fitting", price: 2000 },
      { id: 16, name: "Water Tank Cleaning", price: 1500 }
    ],
    302: [
      { id: 13, name: "Pipe Leakage Repair", price: 800 },
      { id: 14, name: "Tap Installation", price: 500 }, 
        { id: 15, name: "Bathroom Fitting", price: 2000 },
        { id: 16, name: "Water Tank Cleaning", price: 1500 }
    ],
    303: [
      { id: 13, name: "Pipe Leakage Repair", price: 800 },
        { id: 14, name: "Tap Installation", price: 500 },
        { id: 15, name: "Bathroom Fitting", price: 2000 },
        { id: 16, name: "Water Tank Cleaning", price: 1500 }
    ],
    304: [
        { id: 13, name: "Pipe Leakage Repair", price: 800 },
        { id: 14, name: "Tap Installation", price: 500 },
        { id: 15, name: "Bathroom Fitting", price: 2000 },
        { id: 16, name: "Water Tank Cleaning", price: 1500 }
    ],

    401: [
      { id: 17, name: "House Wiring", price: 4000 },
      { id: 18, name: "Fan Installation", price: 600 },
      { id: 19, name: "Switch Board Repair", price: 350 },
      { id: 20, name: "Inverter Setup", price: 5000 }
    ],

    402: [
      { id: 21, name: "AC Wiring Setup", price: 2500 },
      { id: 22, name: "Light Installation", price: 300 },
      { id: 23, name: "Generator Wiring", price: 4500 },
      { id: 24, name: "Electrical Maintenance", price: 2000 }
    ],
    403: [
      { id: 17, name: "House Wiring", price: 4000 },
      { id: 18, name: "Fan Installation", price: 600 }, 
        { id: 19, name: "Switch Board Repair", price: 350 },
        { id: 20, name: "Inverter Setup", price: 5000 }
    ],
    404: [
      { id: 21, name: "AC Wiring Setup", price: 2500 },
        { id: 22, name: "Light Installation", price: 300 },
        { id: 23, name: "Generator Wiring", price: 4500 },
        { id: 24, name: "Electrical Maintenance", price: 2000 }
    ],

    501: [
      { id: 25, name: "Paracetamol", price: 20 },
      { id: 26, name: "Cough Syrup", price: 95 },
      { id: 27, name: "Vitamin Tablets", price: 120 },
      { id: 28, name: "First Aid Kit", price: 350 }
    ],
        502: [
        { id: 25, name: "Paracetamol", price: 20 },
        { id: 26, name: "Cough Syrup", price: 95 },
        { id: 27, name: "Vitamin Tablets", price: 120 },
        { id: 28, name: "First Aid Kit", price: 350 }
    ],
        503: [
        { id: 25, name: "Paracetamol", price: 20 },
        { id: 26, name: "Cough Syrup", price: 95 },
        { id: 27, name: "Vitamin Tablets", price: 120 },
        { id: 28, name: "First Aid Kit", price: 350 }
    ],
        504: [
        { id: 25, name: "Paracetamol", price: 20 },
        { id: 26, name: "Cough Syrup", price: 95 },
        { id: 27, name: "Vitamin Tablets", price: 120 },
        { id: 28, name: "First Aid Kit", price: 350 }
    ],

    601: [
      { id: 29, name: "Veg Pizza", price: 250 },
      { id: 30, name: "Burger Combo", price: 180 },
      { id: 31, name: "Pasta Alfredo", price: 220 },
      { id: 32, name: "Cold Coffee", price: 120 }
    ],
        602: [
        { id: 29, name: "Veg Pizza", price: 250 },
        { id: 30, name: "Burger Combo", price: 180 },
        { id: 31, name: "Pasta Alfredo", price: 220 },
        { id: 32, name: "Cold Coffee", price: 120 }
    ],
        603: [
        { id: 29, name: "Veg Pizza", price: 250 },
        { id: 30, name: "Burger Combo", price: 180 },
        { id: 31, name: "Pasta Alfredo", price: 220 },
        { id: 32, name: "Cold Coffee", price: 120 }
    ],
        604: [
        { id: 29, name: "Veg Pizza", price: 250 },
        { id: 30, name: "Burger Combo", price: 180 },
        { id: 31, name: "Pasta Alfredo", price: 220 },
        { id: 32, name: "Cold Coffee", price: 120 }
    ]
  };

  const products = shopProductsData[id] || [];
  function handleAddToCart(product) {
  const updatedCart = [...cart, product];
  setCart(updatedCart);
}

  return (
  <div className="products-container">
    <h1 className="products-title">Products of Shop {id}</h1>

    {products.length === 0 ? (
      <p>No products available.</p>
    ) : (
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card-wrapper" key={product.id}>
            <ProductCard
              name={product.name}
              price={product.price}
              onAddToCart={() => handleAddToCart(product)}
            />
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default ShopProducts;