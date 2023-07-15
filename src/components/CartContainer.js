import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartItem from "./CartItem";

const CartContainer = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className="cartListContainer">
      <div className="space-y-6">
        
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id}></CartItem>
        ))}
      </div>
      <BillDetails></BillDetails>
    </div>
  );
};

export default CartContainer;
