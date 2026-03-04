import { useState } from "react";
import "./../styles/Vendor.css";

function ManageProducts() {

  const [products, setProducts] = useState([
    { id: 1, name: "Veg Pizza", price: 250 },
    { id: 2, name: "Cold Coffee", price: 120 },
    { id: 3, name: "Pasta Alfredo", price: 220 }
  ]);

  function deleteProduct(id) {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  }

  return (
    <div className="vendor-container">

      <h1>Manage Products</h1>

      <div className="manage-products">

        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-row">

              <div>
                <h3>{product.name}</h3>
                <p>₹ {product.price}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default ManageProducts;