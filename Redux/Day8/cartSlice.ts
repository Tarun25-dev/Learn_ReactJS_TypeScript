import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1,});
            }
        },
        
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        clearCart: (state) => {
            state.items = [];
        },

        decreaseQuantity: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload);
            if(existingItem){
                if(existingItem.quantity > 1){
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter((item) => item.id !== action.payload);
                }
            }
        },
    },
});

export const {addItem, removeItem, clearCart, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer; 