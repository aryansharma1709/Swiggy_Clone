import { createSlice, ReducerType } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
                state.items.pop();
        },
        clearCart:(state)=>{
                state.items.length=0;
        }
    }
})
export const {addItem,removeItem,clearCart}=cartSlice.actions

// ye default  reducer hai wo pure cartslice ka access deta hai 
export default cartSlice.reducer;