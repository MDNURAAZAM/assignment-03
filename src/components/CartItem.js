import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "../Redux/Cart/actions";
import { decreaseProduct, increaseProduct } from "../Redux/Products/actions";

const CartItem = ({ item }) => {
  const { id, quantity } = item;
  const products = useSelector((state) => state.products);
  const {
    productName,
    category,
    imageUrl,
    price,
    quantity: productQuantity,
  } = products.find((product) => product.id === id);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(addToCart(id));
    dispatch(decreaseProduct(id));
  };

  const handleDecrement = () => {
    dispatch(removeFromCart(id));
    dispatch(increaseProduct(id, 1));
  };

  const handleDelete = () => {
    dispatch(deleteFromCart(id));
    dispatch(increaseProduct(id, quantity));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={imageUrl} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{productName}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={handleIncrement}
            disabled={productQuantity === 0}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={handleDecrement}
            disabled={quantity === 0}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart" onClick={handleDelete}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
