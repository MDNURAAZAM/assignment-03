import { ADDTOCART, DELETEFROMCART, REMOVEFROMCART } from "./actionTypes";

const initialState = [];
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      const index = state.findIndex(
        (product) => product?.id === action.payload
      );
      if (index === -1) {
        return [...state, { id: action.payload, quantity: 1 }];
      }

      return state.map((product) => {
        if (product?.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

    case REMOVEFROMCART:
      return state.map((product) => {
        if (product?.id === action.payload) {
          return {
            ...product,
            quantity: Math.abs(product.quantity - 1),
          };
        }
        return product;
      });

    case DELETEFROMCART:
      return state.filter((product) => product.id !== action.payload);

    default:
      return [...state];
  }
};

export default cartReducer;
