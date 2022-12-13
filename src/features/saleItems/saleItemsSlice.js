import { createSlice } from "@reduxjs/toolkit";
import axios from "../../api/config";



const initialState = {
    saleItems: [],
    saleItem: {},
}



export const getAllSaleItems = createAsyncThunk('saleItems/getAllSaleItems',
    async () => {

        const sale = await axios.get(`/sale`);
        return sale.data;
    });

export const getSaleItems = createAsyncThunk('saleItems/getSaleItems',
    async (id) => {
        const sale = await axios.get(`/sale/${id}`);
        return sale.data;
    });

export const postSaleItems = createAsyncThunk('saleItems/postSaleItems',
    async (data) => {
        const sale = await axios.post(`/sale`, data);
        return sale.data;
    });

export const updateSaleItems = createAsyncThunk('saleItems/updateSaleItems',
    async (id) => {
        const sale = await axios.put(`/sale/${id}`, data);
        return sale.data[1][0];
    });

export const deleteSaleItems = createAsyncThunk('saleItems/deleteSaleItems',
    async (id) => {
        const sale = await axios.delete(`/sale/${id}`);
        return id;
    });

export const saleItemsSlice = createSlice({
    name: 'saleItems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllSaleItems.fulfilled, (state, action) => {
                state.saleItems = action.payload;
            })
            .addCase(getSaleItems.fulfilled, (state, action) => {
                state.saleItem = action.payload;
            })
            .addCase(updateSaleItems.fulfilled, (state, action) => {
                state.saleItem = action.payload;
            })
            .addCase(postSaleItems.fulfilled, (state, action) => {
                state.saleItem = action.payload;
            })
            .addCase(deleteSaleItems.fulfilled, (state, action) => {
                const newSaleItems = state.saleItems.filter((item) => item.id !== action.payload);
                state.saleItems=newSaleItems;
            })
    }
})

export const selectSaleItemsState = (state) => state.saleItems;