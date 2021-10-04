export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => amount + item.price, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex((ele) => ele.id === action.item.id);
      let newBasket = state.basket;

      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      return {
        ...state,
        basket: newBasket,
      };
    }
    case "SET_USER": {
      return {
        ...state,
        user: action.user,
      };
    }
    case "EMPTY_BASKET": {
      return {
        ...state,
        basket: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
