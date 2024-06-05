import { createSlice } from "@reduxjs/toolkit";

// Helper functions to load and save state from/to localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    console.error;
  }
};

const initialState = {
  items: loadState(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
      saveState(state.items);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1); //remove item at the specified index
      saveState(state.items);
    },
    reduceQuantity: (state, action) => {
      const index = action.payload;
      if (state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
      } else {
        state.items.splice(index, 1);
      }
      saveState(state.items);
    },
    increaseQuantity: (state, action) => {
      const index = action.payload;
      state.items[index].quantity += 1;
      saveState(state.items);
    },
  },
});

export const { addItem, removeItem, reduceQuantity, increaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
