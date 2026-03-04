import { useState } from "react";
import "./../styles/Vendor.css";

function AddProduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      name: name,
      price: price
    };

    console.log("Product Added:", newProduct);

    setName("");
    setPrice("");
  }

  return (
    <div className="vendor-container">

      <h1>Add Product</h1>

      <form className="vendor-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Product</button>

      </form>

    </div>
  );
}

export default AddProduct;