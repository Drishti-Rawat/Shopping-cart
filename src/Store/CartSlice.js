import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const calculateTotalPrice = (item) => {
    return item.quantity * item.price;
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            // Ensure state.items is initialized as an array
            if (!Array.isArray(state.items)) {
                state.items = [];
            }

            const newitem = action.payload;
            const itemExists = state.items.find(item => item.id === newitem.id);

            if (!itemExists) {
                newitem.quantity = 1;
                newitem.totalPrice = newitem.price
                state.items.push(newitem);
            } else {
                itemExists.quantity += 1;
                itemExists.totalPrice = itemExists.price*itemExists.quantity
            }
        },
        removefromCart: (state, action) => {
            // Ensure state.items is initialized as an array
            if (!Array.isArray(state.items)) {
                state.items = [];
            }

            state.items = state.items.filter(item => item.id !== action.payload);
        },
        addQuantity: (state, action) => {
            // Ensure state.items is initialized as an array
            if (!Array.isArray(state.items)) {
                state.items = [];
            }

            const { id } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                item.quantity += 1;
                item.totalPrice = item.price * item.quantity;
            }
        },
        removeQuantity: (state, action) => {
            // Ensure state.items is initialized as an array
            if (!Array.isArray(state.items)) {
                state.items = [];
            }

            const { id } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.totalPrice = item.price * item.quantity; 
            }
        },

       
        
    }
});

export const { addtocart, removefromCart, addQuantity, removeQuantity, updateItemPrice } = CartSlice.actions;

export default CartSlice.reducer;
