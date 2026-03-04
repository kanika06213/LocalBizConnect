import "./../styles/ProductCard.css";
function ProductCard({ name, price, onAddToCart }) {
 return (
    <div className="product-card">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">₹{price}</p>
      <button className="add-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;