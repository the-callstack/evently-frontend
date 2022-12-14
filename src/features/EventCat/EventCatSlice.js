import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: [
        {
            name: 'hello',
            id: 1
        },
        {
            name: 'hi',
            id: 2
        },
        {
            name: 'yay',
            id: 3
        }
    ],
    categories: [
        {
            name: 'world',
            id: 2
        },
        {
            name: 'hala',
            id: 3
        },
        {
            name: 'asdasd',
            id: 1
        }
    ]
};


export const eventCatSlice = createSlice({
    name: 'eventCat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});


export const selectEventCatState = (state) => state.eventCat;
export default eventCatSlice.reducer;