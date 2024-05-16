import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { product, quantity } = action.payload;
            const existingItem = state.items.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ product, quantity });
            }
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload, 1); //remove item at the specified index
        },
        reduceQuantity: (state, action) => {
            const index = action.payload;
            if (state.items[index].quantity > 1) {
                state.items[index].quantity -=1;
            } else {
                state.items.splice(index, 1);
            }
        },
        increaseQuantity: (state, action) => {
            const index = action.payload;
            state.items[index].quantity += 1;
        },
    },
});

export const { addItem, removeItem, reduceQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;