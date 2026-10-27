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
    },
});

export const {addItem} = cartSlice.actions;
export default cartSlice.reducer; 