export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const existingItemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingItemIndex !== -1) {
        return {
          ...state,
          basket: state.basket.map((item, index) => {
            if (index === existingItemIndex) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
        };
      }

    case 'REMOVE_FROM_BASKET':
      const updatedBasket = state.basket.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        basket: updatedBasket,
      };

    case 'INCREMENT_ITEM_QUANTITY':
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };

    case 'DECREMENT_ITEM_QUANTITY':
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.id && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
