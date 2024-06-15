import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    items: []

}

const calculateTotalPrice = (item) => {
    return item.quantity * item.price;
};

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {

        addtocart : (state,action)=>{
            const item = action.payload;
            const itemExists = state.items.find(item => item.id === item.id);
            if (itemExists) {
                itemExists.quantity += 1;
            } else {
                item.quantity = 1;
                state.items = [...state.items, item];
            } 
           
        },
        removefromCart : (state,action)=>{
            state.items = state.items.filter((item)=>item.id!==action.payload)
        },

        addQuantity : (state,action)=>{
            const { id } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                item.quantity++;
            }
        },
        removeQuantity : (state,action)=>{
            const { id } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        updateItemPrice : (state,action)=>{
            const { id } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.price = calculateTotalPrice(item);
            }
        }

       
    }
})
export const {addtocart,removefromCart,addQuantity,removeQuantity,updateItemPrice} = CartSlice.actions;

export default CartSlice.reducer;