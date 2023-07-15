import { ADDPRODUCT, DECREASEPRODUCT, INCREASEPRODUCT } from "./actionTypes";

const initialState = [];
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      const nextId = state.length === 0 ? 0 : state[state.length - 1].id + 1;
      return [...state, { id: nextId, ...action.payload }];

    case DECREASEPRODUCT:
      return state.map((product) => {
        if (product.id === action.payload && product.quantity > 0) {
          return {
            ...product,
            quantity: Math.abs(product.quantity - 1),
          };
        }
        return product;
      });

    case INCREASEPRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: Math.abs(product.quantity + action.payload.quantity),
          };
        }
        return product;
      });

    default:
      return [...state];
  }
};

export default productReducer;
