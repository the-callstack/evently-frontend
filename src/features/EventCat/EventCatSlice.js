import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/config";

const initialState = {
    categories: [],
    eventId: 0,
    attendance: 0
};

export const createPackage = createAsyncThunk('eventCat/createPackage',
    async (data) => {
        const res = await axios.post('/package', data);
        return res.data;
    }
);

export const eventCatSlice = createSlice({
    name: 'eventCat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPackage.fulfilled, (state, action) => {
                const newState = action.payload;
                return newState;
            });
    }
});


export const selectEventCatState = (state) => state.eventCat;
export default eventCatSlice.reducer;