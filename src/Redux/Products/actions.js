import { ADDPRODUCT, DECREASEPRODUCT, INCREASEPRODUCT } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const decreaseProduct = (id) => {
  return {
    type: DECREASEPRODUCT,
    payload: id,
  };
};

export const increaseProduct = (id, quantity) => {
  return {
    type: INCREASEPRODUCT,
    payload: {
      id,
      quantity,
    },
  };
};
