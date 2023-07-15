import React from "react";
import { useSelector } from "react-redux";
import logo from "../images/logo.png";

const Navbar = ({ setCurrentPage }) => {
  const cart = useSelector((state) => state.cart);

  const quantity = cart.reduce(
    (currentValue, cartItem) => cartItem.quantity + currentValue,
    0
  );
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            href="#home"
            className="navHome"
            id="lws-home"
            onClick={() => setCurrentPage("home")}
          >
            {" "}
            Home{" "}
          </a>
          <a
            href="#cart"
            className="navCart"
            id="lws-cart"
            onClick={() => setCurrentPage("cart")}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{quantity}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
