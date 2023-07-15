import { ADDTOCART, DELETEFROMCART, REMOVEFROMCART } from "./actionTypes";

export const addToCart = (id) => {
  return {
    type: ADDTOCART,
    payload: id,
  };
};
export const removeFromCart = (id) => {
  return {
    type: REMOVEFROMCART,
    payload: id,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETEFROMCART,
    payload: id,
  };
};
