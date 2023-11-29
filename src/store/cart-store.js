import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    set(state, action) {
      state.cart = [...action.payload];
    },
    addItem(state, action) {
      let availableItem = state.cart.find(
        (ele) => ele.id === action.payload.id
      );

      if (availableItem === undefined) {
        let item = {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          itemNumber: 1,
        };

        state.cart.push(item);
      }
    },
    increment(state, action) {
      //let index;
      let index = state.cart.findIndex((e, i) => e.id === action.payload);

      console.log(index);

      state.cart[index].itemNumber++;
    },
    decrement(state, action) {
      let index = state.cart.findIndex((e, i) => e.id === action.payload);

      if (state.cart[index].itemNumber > 1) {
        state.cart[index].itemNumber--;
      } else {
        let newState = state.cart.filter((e) => e.id !== action.payload);
        state.cart = [...newState];
      }
    },
    clear(state) {
      state.cart = [];
    },
  },
});

export function fetchCart() {
  return (dispatch) => {
    async function fetchItems() {
      const cart = await JSON.parse(localStorage.getItem("cart"));

      if (cart) {
        dispatch(cartActions.set(cart));
      }
    }

    fetchItems();
  };
}

const store = configureStore({ reducer: cartSlice.reducer });

export const cartActions = cartSlice.actions;
export default store;
