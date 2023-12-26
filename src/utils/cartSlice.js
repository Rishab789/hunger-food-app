import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        item: [],
        title: [],//changed you can delete it


    },
    reducers: {
        addItem: (state, action) => {
            state.item.push(action.payload)

        },
        addTitle: (state, action) => {//changed you can delete it
            state.title.push(action.payload)

        },//changed you can delete it
        removeItem: (state) => {
            state.item.pop();
        },
        clearCart: (state) => {
            state.item.length = 0;
        }
    }
})

export const { addItem, addTitle, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

