import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        list:[]
    },
    reducers:{
        addItem: (state,payload)
    }
})