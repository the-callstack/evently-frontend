import { createSlice } from "@reduxjs/toolkit";



const initialState={
    stores:[]
}


export const storesSlice=createSlice({
    name:'stores',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase()
    }
})


export const selectStoresState = (state) => state.stores;