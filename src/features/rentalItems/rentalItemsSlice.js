import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios  from "../../api/config";


const initialState={
    rentalItems:[],
    errMsg:'',
}

export const getSpecific = createAsyncThunk('rental/getSpecific',
    async (id) => {
        const res = await axios.get(`/rental/${id}`);
        return res.data ;
    }
)

export const getAll = createAsyncThunk('rental/getAll',
    async () => {
        const res = await axios.get('/rental');
        console.log(res.data);
        return res.data ;
    }
);


export const createItem = createAsyncThunk('rental/createItem',
    async (item) => {
        const created = await axios.post('/rental', item);
        return created.data;
    }
);

export const deleteItem = createAsyncThunk('rental/deleteItem',
    async (id) => {
        const res = await axios.delete(`/rental/${id}`);
        return res.data ;
    }
    );

    export const updateItem = createAsyncThunk('rental/updateItem',
    async (id, data) => {
        const res = await axios.put(`/rental/${id}`, data);
        return res.data ;
    }
    );    

export const rentalItemsSlice=createSlice({
    name:'rental',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.rentalItems = action.payload ;
        })
        .addCase(getAll.rejected, (state, action) => {
            state.errMsg = action.payload ;
        })
        .addCase(getSpecific.fulfilled, (state, action) => {
            state.rentalItems = action.payload ;
        })
        .addCase(getSpecific.rejected, (state, action) => {
            state.errMsg = action.payload ;
        })
        .addCase(deleteItem.fulfilled, (state, action) => {
            const newRentalItems = state.rentalItems.filter((item) => item.id !== action.payload);
            state.rentalItems=newRentalItems;
        })
        .addCase(deleteItem.rejected, (state, action) => {
            state.errMsg = action.payload ;
        })
        .addCase(updateItem.fulfilled, (state, action) => {
            state.rentalItems = action.payload ;
        });
    }
})

export const selectRentalItemsState = (state) => state.rentalItems;


export default rentalItemsSlice.reducer;

