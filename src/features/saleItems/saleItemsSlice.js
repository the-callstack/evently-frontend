import { createSlice } from "@reduxjs/toolkit";



const initialState={
    saleItems:[]
}



export const saleItemsSlice=createSlice({
    name:'saleItems',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

    }
})


export const selectSaleItemsState = (state) => state.saleItems;