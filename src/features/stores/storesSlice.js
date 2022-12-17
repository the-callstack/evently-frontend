import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/config";



const initialState = {
    stores: [],
    store:{},
}

export const getAllStores = createAsyncThunk('stores/getAllStores',
    async () => {
        const stores = await axios.get(`/store`);
        return stores.data;
    });

    export const getVendorStores = createAsyncThunk('stores/getVendorStores',
    async (vendorid) => {
        const stores = await axios.get(`/vendorstores/${vendorid}`);
        return stores.data;
    });

export const getStore = createAsyncThunk('stores/getStore',
    async (id) => {
        const stores = await axios.get(`/store/${id}`);
        return stores.data;
    });

export const postStore = createAsyncThunk('stores/postStore',
    async (data) => {
        const stores = await axios.post(`/store`,data);
        return stores.data;
    });

    export const updateStore = createAsyncThunk('stores/updateStore',
    async (data) => {
        const stores = await axios.put(`/store/${data.id}`,data);
        return stores.data;
    });

    export const deleteStore = createAsyncThunk('stores/deleteStore',
    async (id) => {
        const store = await axios.delete(`/store/${id}`);
        return id;
    });


export const storesSlice = createSlice({
    name: 'stores',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllStores.fulfilled, (state, action) => {
            state.stores = action.payload;
        })
        .addCase(getStore.fulfilled, (state, action) => {
            state.store = action.payload;
        })
        .addCase(getVendorStores.fulfilled, (state, action) => {
            state.stores = action.payload
            
        })
        .addCase(updateStore.fulfilled, (state, action) => {
            state.store = action.payload;
        })
        
        .addCase(postStore.fulfilled, (state, action) => {
            state.store = action.payload;
        })
        .addCase(deleteStore.fulfilled, (state, action) => {
            const newStores= state.stores.filter((store) => store.id !== action.payload);
            state.stores=newStores;
        })
    }
})


export const selectStoresState = (state) => state.stores;

export default storesSlice.reducer;