import { createSlice } from "@reduxjs/toolkit";


const INTIAL_STATE = {
    cartList: [],
    cartCount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: INTIAL_STATE,
    reducers: {
        increment: (state) => {
            state.cartCount += 1;
        },
        decrement: (state) => {
            state.cartCount -= 1;
        },
        addToCart: (state) => {
            state.cartCount = 1;
        },
    },
});

export const { increment, decrement, addToCart } = cartSlice.actions;

export default cartSlice.reducer;