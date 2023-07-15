import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Products/actions";

const FormContainer = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      productName,
      category,
      imageUrl,
      price: parseInt(price),
      quantity: parseInt(quantity),
    };

    setProductName("");
    setCategory("");
    setImageUrl("");
    setPrice("");
    setQuantity("");
    dispatch(addProduct(product));
  };
  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleSubmit}
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="name">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="category">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="quantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
