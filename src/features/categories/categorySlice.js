import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/config";

const initialState = {
    categories : [],
    errMsg:''
}

export const getAllCategories = createAsyncThunk('category/getAllCategories', 
async () => {
    const categories = await axios.get('/category');
    return categories.data;
}
);




export const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload ;
        })
        .addCase(getAllCategories.rejected, (state, action) => {
            state.errMsg = action.payload ;
        })
    }

});



export const selectCategoryState = (state) => state;

export default categorySlice.reducer;


