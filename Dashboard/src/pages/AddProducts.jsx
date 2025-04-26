import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css"

function ProductForm() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "BreakFast",
  });

  const [image, setImage] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = ["BreakFast", "Lunch", "Dinner", "All"];

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!image) {
      setErrorMsg("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("category", productData.category);
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post("https://food-web-wgol.onrender.com//api/products", formData);
      setSuccessMsg("✅ Product added successfully!");
      setProductData({
        name: "",
        description: "",
        price: "",
        category: "BreakFast",
      });
      setImage(null);
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "❌ Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-form-container">
      <h2 className="product-form-title">Add New Product</h2>

      {successMsg && <p className="success-message">{successMsg}</p>}
      {errorMsg && <p className="error-message">{errorMsg}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleChange}
          required
          className="form-input"
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={productData.description}
          onChange={handleChange}
          required
          className="form-input form-textarea"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
          required
          className="form-input"
        />

        <select
          name="category"
          value={productData.category}
          onChange={handleChange}
          required
          className="form-input form-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <div className="file-input-container">
          <label className="file-input-label">
            {image ? image.name : "Choose Product Image"}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="file-input"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="submit-btn"
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;