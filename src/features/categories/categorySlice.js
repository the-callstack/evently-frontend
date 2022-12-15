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

export const createCategory = createAsyncThunk('category/createCategory',
async (payload) => {
    const res = await axios.post('/category',payload);
    return res.data ;
}
);

export const updateCategory = createAsyncThunk('category/updateCategory',
async (payload) => {
    const res = await axios.put(`/category/${payload.id}`, payload.newCategory);
    return res.data ;
}
);
export const deleteCategory = createAsyncThunk('category/deleteCategory',
async (payload) => {
    const res = await axios.delete(`/category/${payload.id}`,{
        headers:{
            //TODO:add check authorization method in the backend
            Authorization: `Bearer ${payload.accessToken}`
        }
    });
    return res.data ;
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
            state.errMsg = action.error ;
        })
        .addCase(createCategory.fulfilled, (state, action) => {
            state.categories.push(action.payload) ;
        })
        .addCase(createCategory.rejected, (state, action) => {
            state.errMsg = action.error ;
        })
        .addCase(updateCategory.fulfilled, (state, action) => {
           const newCategories = state.categories.map(item => {
            //TODO:edit the query in the backend
                    if(item.id === action.payload.result.foundCategory.id) {
                        return action.payload.result.foundCategory;
                    }
                    return item ;
            });
            state.categories = [...newCategories] ;
        })
        .addCase(updateCategory.rejected, (state, action) => {
            state.errMsg = action.error ;
        })
        .addCase(deleteCategory.fulfilled, (state, action) => {
           const newCategories = state.categories.filter(item => item.id !== action.payload);
            state.categories = [...newCategories] ;
        })
        .addCase(deleteCategory.rejected, (state, action) => {
            state.errMsg = action.error ;
        })
    }

});



export const selectCategoryState = (state) => state;

export default categorySlice.reducer;


