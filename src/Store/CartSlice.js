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
            const newitem = action.payload;
            const itemExists = state.items.find(item => item.id === newitem.id);
            if(!itemExists) {
                newitem.quantity = 1;
                state.items = [...state.items, newitem];
            } 
            else{
                itemExists.quantity+=1
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