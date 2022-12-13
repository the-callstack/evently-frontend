import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    stores: [],
    store:{},
}

export const getAllStores = createAsyncThunk('stores/getAllStores',
    async () => {

        const stores = await axiosPrivate.get(`/store`);
        return stores.data;
    });

export const getStore = createAsyncThunk('stores/getStore',
    async () => {
        const stores = await axiosPrivate.get(`/store/id`);
        return stores.data;
    });

export const postStore = createAsyncThunk('stores/postStore',
    async (data) => {
        const stores = await axiosPrivate.post(`/store`,data);
        return store.data;
    });

    export const updateStore = createAsyncThunk('stores/updateStore',
    async (data) => {
        const stores = await axiosPrivate.put(`/store/id`,data);
        return store.data;
    });

    export const deleteStore = createAsyncThunk('stores/deleteStore',
    async (data) => {
        const store = await axiosPrivate.delete(`/store/id`,);
        return null;
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
        .addCase(updateStore.fulfilled, (state, action) => {
            state.store = action.payload;
        })
        
        .addCase(postStore.fulfilled, (state, action) => {
            state.store = action.payload;
        })
        .addCase(deleteStore.fulfilled, (state, action) => {
        })
    }
})


export const selectStoresState = (state) => state.stores;