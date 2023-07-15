import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Cart/actions";
import { decreaseProduct } from "../Redux/Products/actions";

const ProductItem = ({ product }) => {
  const { id, productName, category, imageUrl, price, quantity } = product;
  const dispatch = useDispatch();

  const addToCartHandler = (id) => {
    dispatch(decreaseProduct(id));
    dispatch(addToCart(id));
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imageUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() => addToCartHandler(id)}
          disabled={quantity <= 0}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
