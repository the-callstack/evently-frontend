import { createSlice } from "@reduxjs/toolkit";


const initialState={
    rentalItems:[]
}


export const rentalItemsSlice=createSlice({
    name:'rentalItems',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

    }
})


export const selectRentalItemsState = (state) => state.rentalItems;