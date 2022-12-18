import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/config";

const initialState = {
    saleItems: [],
    saleItem: {},
    errMsg:''
}

export const getAllSaleItems = createAsyncThunk('saleItems/getAllSaleItems',
    async () => {
        const sale = await axios.get(`/sale`);
        return sale.data;
    });

export const getSaleItem = createAsyncThunk('saleItems/getSaleItem',
    async (id) => {
        const sale = await axios.get(`/sale/${id}`);
        return sale.data;
    });

    export const getStoreSaleItems = createAsyncThunk('saleItems/getStoreSaleItems',
    async (id) => {
        const sale = await axios.get(`/salestore/${id}`);
        return sale.data;
    });

    export const getByCategory = createAsyncThunk('saleItems/getCatSaleItems',
    async (id) => {
        const sale = await axios.get(`/salecat/${id}`);
        return sale.data;
    });

export const postSaleItems = createAsyncThunk('saleItems/postSaleItems',
    async (data) => {
        const sale = await axios.post(`/sale`, data);
        return sale.data;
    });

export const updateSaleItems = createAsyncThunk('saleItems/updateSaleItems',
    async (data) => {
        const sale = await axios.put(`/sale/${data.id}`, data);
        return sale.data[1][0];
    });

export const deleteSaleItems = createAsyncThunk('saleItems/deleteSaleItems',
    async (id) => {
        const sale = await axios.delete(`/sale/${id}`);
        return id;
    });
export const getSaleByPrice = createAsyncThunk('saleItems/getSaleByPrice',
    async (price) => {
        const sale = await axios.get(`/saleprice/${price}`);
        return sale.data;
    });

    export const getSaleByName = createAsyncThunk('rental/getSaleByName',
    async (name) => {
        const saleItems = await axios.get(`/salekey?keyWord=${name}`);
        return saleItems.data ; 
    }
    );


export const saleItemsSlice = createSlice({
    name: 'saleItems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllSaleItems.fulfilled, (state, action) => {
                state.saleItems = action.payload;
            })
            .addCase(getSaleItem.fulfilled, (state, action) => {
                state.saleItem = action.payload;
            })
            .addCase(getStoreSaleItems.fulfilled, (state, action) => {
                state.saleItems = action.payload;
            })
            .addCase(getByCategory.fulfilled, (state, action) => {
                state.saleItems = action.payload;
            })
            .addCase(updateSaleItems.fulfilled, (state, action) => {
                state.saleItem = action.payload;
            })
            .addCase(postSaleItems.fulfilled, (state, action) => {
                state.saleItem = action.payload;
            })
            .addCase(deleteSaleItems.fulfilled, (state, action) => {
                const newSaleItems = state.saleItems.filter((item) => item.id !== action.payload);
                state.saleItems = newSaleItems;
            })
            .addCase(getSaleByPrice.fulfilled, (state, action) => {
                state.rentalItems = action.payload ;
            })
            .addCase(getSaleByPrice.rejected, (state, action) => {
                state.errMsg = action.error ;
            })
            .addCase(getSaleByName.fulfilled, (state, action) => {
                state.rentalItems = action.payload ;
            })
            .addCase(getSaleByName.rejected, (state, action) => {
                state.errMsg = action.error ;
            })
    }
})

export const selectSaleItemsState = (state) => state;


export default saleItemsSlice.reducer;
